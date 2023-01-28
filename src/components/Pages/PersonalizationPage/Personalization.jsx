import { createUseStyles } from "react-jss";
import Input from "../../InputComponent/Input.jsx";
import Badge from "../../BadgeComponent/Badge";
import Button from "../../ButtonComponent/Button.jsx";
import { useState } from "react";

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

  topics: {
    margin: "30px 0",
  },

  badges: {
    margin: "15px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },

  submit: {
    margin: "10px 10px 0 0",
    width: "200px",
    height: "50px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    color: "#FFFFFF",
    backgroundColor: "#4838D1",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },

  skip: {
    margin: "10px 10px 0 0",
    width: "200px",
    height: "50px",
    border: "1px solid white",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    color: "#FFFFFF",
    backgroundColor: "#0F0F29",
    borderRadius: "8px",
    cursor: "pointer",
  },

  "@media (min-width: 376px)": {
    pageContent: {
      width: "40%",
    },
  },

  "@media (max-width: 375px)": {
    submit: {
      width: "100%",
      height: "56px",
      margin: "5px 0",
    },

    skip: {
      width: "100%",
      height: "56px",
      margin: "5px 0",
    },
  },

  selectedTopics: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#F5F5FA",
  },
});

const Personalization = ({ props }) => {
  const [numberOfTopics, setNumberOfTopics] = useState(0);
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
          Choose min. 3 topics you like, we will give you more often that relate
          to it.
        </p>
      </div>

      <div className={classes.topics}>
        <Input placeholder="Placeholder" style={{ width: "100%" }} />

        <div className={classes.badges}>
          {badges.map((badge) => {
            return (
              <Badge key={badge} margin="2px">
                {badge}
              </Badge>
            );
          })}
        </div>

        <div className={classes.selectedTopics}>
          {numberOfTopics} topics Selected
        </div>
      </div>

      <div>
        <Button className={classes.submit}>Submit</Button>
        <Button className={classes.skip}>Skip</Button>
      </div>
    </div>
  );
};

export default Personalization;
