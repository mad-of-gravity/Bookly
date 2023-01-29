import { createUseStyles } from "react-jss";
import { useState, useEffect } from "react";
import Input from "../../InputComponent/Input.jsx";
import Card from "../../CardComponent/Card.jsx";
import "./Scrollbar.css";

const useStyles = createUseStyles({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    height: "100vh",
  },

  pageHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },

  logoImg: {
    width: "40px",
    height: "40px",
  },

  logoLabel: {
    height: "24px",
    marginLeft: "8px",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
  },

  heading1: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "36px",
    color: "#F5F5FA",
  },

  cardContainer: {
    width: "100%",
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    overflow: "scroll",
    overflowX: "hidden",
  },

  "@media (min-width: 376px)": {
    pageContainer: {
      marginTop: "10px",
    },

    main: {
      marginTop: "20px",
      width: "50%",
      height: "80vh",
      justifyContent: "center",
    },

    cardContainer: {
      height: "80%",
      width: "80%",
      margin: " 20px auto 0 auto",
    },
  },

  "@media (max-width: 375px)": {
    pageContainer: {
      width: "90%",
      marginTop: "20px",
    },

    cardContainer: {
      height: "60vh",
    },

    main: {
      width: "90%",
      height: "80vh",
      marginTop: "20px",
      justifyContent: "center",
    },
  },
});

const Library = () => {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState([]);
  const [topics, setTopics] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    //Remove the page header from the library screen
    const header = document.getElementById("header");
    if (header) {
      header.remove();
    }

    const storedTopics = localStorage.getItem("topics");
    setTopics(JSON.parse(storedTopics));
    //http://openlibrary.org/subjects/love.json


  }, []);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  //searching by title
  const handleOnEnterPress = (event) => {
    const cleanup = true;

    if (event.key === "Enter") {
      fetch(`https://openlibrary.org/search.json?title=${title}`)
        .then((res) => res.json())
        .then((data) => {
          setBooks(data.docs);
          console.log(books);
        })
        .catch((err) => {
          setBooks([]);
          alert(err.message);
        });
    }
  };

  return (
    <div className={classes.pageContainer}>
      <div className={classes.pageHeader}>
        <img src="bookly-logo.png" className={classes.logoImg} />
        <img src="Bookly.png" className={classes.logoLabel} />
      </div>
      <div className={classes.main}>
        <h1 className={classes.heading1}>My Books</h1>
        <Input
          placeholder="Enter book title..."
          style={{ width: "100%", marginTop: "12px" }}
          value={title}
          onChange={handleInputChange}
          onKeyPress={handleOnEnterPress}
        />

        <div className={classes.cardContainer}>
          {books.map((book) => {
            return (
              <Card
                key={book.key}
                imgUrl={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "no-cover.png"
                }
                bookTitle={book.title}
                author={
                  book.author_name[0] 
                    ? book.author_name[0] 
                    : "Unknown Author"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Library;
