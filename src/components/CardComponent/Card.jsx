import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  layout: {
    display: "flex",
    flexDirection: "row",
    height: "20%",
    padding: "10px",
    marginBottom: "60px",
  },

  "@media (min-width: 376px)": {
    layout: {
      width: "50%",
    }
  },

  "@media (max-width: 375px)": {
    layout: {
      marginBottom: "20px",
    }
  },

  img: {
    width: "80px",
    height: "80px",
    marginRight: "20px",
  },

  bookData: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "flex-start",
    padding: "5px",
  },

  heading1: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    color: "#F5F5FA",
  },

  heading2: {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "18px",
    color: "#EBEBF5",
  },
});

const Card = ({ imgUrl, bookTitle, author }) => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <img src={imgUrl} className={classes.img} />
      <div className={classes.bookData}>
        <h1 className={classes.heading1}>{bookTitle}</h1>
        <h2 className={classes.heading2}>{author}</h2>
      </div>
    </div>
  );
};

export default Card;
