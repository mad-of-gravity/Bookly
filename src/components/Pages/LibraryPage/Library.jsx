import { createUseStyles } from "react-jss";
import { useState, useEffect } from "react";
import Input from "../../InputComponent/Input.jsx";
import Card from "../../CardComponent/Card.jsx";

const useStyles = createUseStyles({
  pageContainer: {
    width: "90%",
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
      width: "100%",
      height: "80vh",
    },

    cardContainer: { 
      height: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "scroll",
      overflowX: "hidden",
      flexWrap: "wrap",
    },
  },
  
  "@media (max-width: 375px)": {
    pageContainer: {
      width: "87%",
      marginTop: "40px",
    },

    cardContainer: {
      height: "60vh",
    },
  },
});

const Library = () => {
  const classes = useStyles();
  const topics = [];

  for (let key in localStorage) {
    topics.push(localStorage.getItem(key));
  }

  useEffect(() => {
    //Remove the page header from the library screen
    const header = document.getElementById("header");
    if (header) {
      header.remove();
    }

    const author = "J. K. Rowling";
    const works = "Harry Potter and the Deathly Hallows";

    fetch(`https://openlibrary.org/search.json?author=${author}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className={classes.pageContainer}>
      <div className={classes.pageHeader}>
        <img src="bookly-logo.png" className={classes.logoImg} />
        <img src="Bookly.png" className={classes.logoLabel} />
      </div>
      <div className={classes.main}>
        <h1 className={classes.heading1}>My Books</h1>
        <Input
          placeholder="Search Books or Author..."
          style={{ width: "100%", marginTop: "12px" }}
        />

        <div className={classes.cardContainer}>
          <Card
            imgUrl="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
            author="Barrack Obama"
            bookTitle="A Promised Land"
          />
          <Card
            imgUrl="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
            author="J. K. Rowling"
            bookTitle="Harry Potter and the Half-Blood Prince"
          />
          <Card
            imgUrl="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
            author="J. K. Rowling"
            bookTitle="Harry Potter and the Philosopher's Stone"
          />
          <Card
            imgUrl="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
            author="J. K. Rowling"
            bookTitle="Harry Potter and the Philosopher's Stone"
          />
          <Card
            imgUrl="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
            author="J. K. Rowling"
            bookTitle="Harry Potter and the Philosopher's Stone"
          />
          <Card
            imgUrl="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
            author="J. K. Rowling"
            bookTitle="Harry Potter and the Philosopher's Stone"
          />
        </div>
      </div>
    </div>
  );
};

export default Library;
