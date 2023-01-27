import { createUseStyles } from "react-jss";
import Input from "../../InputComponent/Input.jsx";
import Badge from "../../BadgeComponent/Badge";

const useStyles = createUseStyles({
  pageContent: {
    marginTop: "-30px", 
    width: "80%",
    padding: "1%",
  },

  textContent: {
    padding: "4px",
  },

  heading1: {
    margin: "8px 0",
    fontSize: "16px",
    fontWeight: "600",
    color: "#F5F5FA",
    lineHeight: "21px",
    width: "189px",
    height: "24px",
  },

  paragraph: {
    margin: "5px 0",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "21px",
    color: "#F5F5FA",
  },

  categories: {
    margin: "30px 0",
  },

  badges: {
    margin: "15px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

const Personalization = ({ props }) => {
  const classes = useStyles();
  const badges = [
    "Art",
    "Business",
    "Biography",
    "Comedy",
    "Culture",
    "Education",
    "News",
    "Philosophy",
    "Technology",
    "Travel",
  ];

  return (
    <div className={classes.pageContent}>
      <div className={classes.textContent}>
        <h1 className={classes.heading1}>Personalize Suggestion</h1>
        <p className={classes.paragraph}>
          Choose min. 3 topics you like, we will give you
          more often that relate to it.
        </p>
      </div>
      <div className={classes.categories}>
        <Input placeholder="Placeholder"/>

        <div className={classes.badges}>
          {badges.map((badge) => {
            return (
              <Badge key={badge} margin="2px">
                {badge}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Personalization;
