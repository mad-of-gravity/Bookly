import { createUseStyles } from "react-jss";
import Input from "../../InputComponent/Input.jsx";
import Badge from "../../BadgeComponent/Badge";
import Button from "../../ButtonComponent/Button.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    margin: "20px 0",
  },

  badges: {
    margin: "12px 0",
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

//Audio book topics
const initialTopics = [
  { id: 0, name: "Art", color: "transparent" },
  { id: 1, name: "Business", color: "transparent" },
  { id: 2, name: "Comedy", color: "transparent" },
  { id: 3, name: "Biography", color: "transparent" },
  { id: 4, name: "Culture", color: "transparent" },
  { id: 5, name: "Education", color: "transparent" },
  { id: 6, name: "News", color: "transparent" },
  { id: 7, name: "Philosophy", color: "transparent" },
  { id: 8, name: "Psychology", color: "transparent" },
  { id: 9, name: "Technology", color: "transparent" },
  { id: 10, name: "Travel", color: "transparent" },
];

const Personalization = ({ props }) => {
  const navigate = useNavigate();
  const [numberOfTopics, setNumberOfTopics] = useState(0);
  const [topics, setTopics] = useState(initialTopics);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const classes = useStyles();
  const badgeColors = {
    clickedColor: "#4838D1",
    notClickedColor: "transparent",
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  /*This function adds the selected topic 
  to the selectedTopics and localStorage
  */
  const addSelectedTopic = (topic) => {
    const updatedTopics = [...selectedTopics, topic.name];
    localStorage.setItem("topics", JSON.stringify([...updatedTopics]));
    setSelectedTopics(updatedTopics);
  };

  /*This function removes the already selected topic 
  from selectedTopics and localStorage
  */
  const removeSelectedTopic = (topic) => {
    let updatedTopics = [...selectedTopics];
    const topicName = topic.name;

    const index = updatedTopics.indexOf(topicName);
    updatedTopics = [
      ...updatedTopics.slice(0, index),
      ...updatedTopics.slice(index + 1),
    ];
    localStorage.setItem("topics", JSON.stringify([...updatedTopics]));
    setSelectedTopics(updatedTopics);
  };

  const handleBadgeClick = (id) => {
    const updatedTopics = topics.map((topic) => {
      if (topic.id !== id) {
        //No change in topic
        return topic;
      } else {
        //Get current topic color
        const topicCurrentColor = topic.color;
        let updatedColor = "";

        //If the current badge has already been pressed
        if (topicCurrentColor === badgeColors.clickedColor) {
          //Change #4838D1 color to transparent
          updatedColor = badgeColors.notClickedColor;
          setNumberOfTopics(numberOfTopics - 1);
          removeSelectedTopic(topic);
        } else {
          //Change transparent color to #4838D1
          updatedColor = badgeColors.clickedColor;
          setNumberOfTopics(numberOfTopics + 1);
          addSelectedTopic(topic);
        }

        //Change topic color
        return {
          ...topic,
          color: updatedColor,
        };
      }
    });

    //Update the topic array
    setTopics(updatedTopics);
  };

  //handleSubmitClick handler goes here
  const handleSubmitClick = () => {
    navigate("/ready");
  };


  //handleSkipClick handler goes here
  const handleSkipClick = () => {
    localStorage.clear();
    navigate("/ready");
  };

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
          {topics.map((topic) => {
            return (
              <Badge
                key={topic.id}
                style={{ backgroundColor: topic.color }}
                margin="2px"
                onClick={() => handleBadgeClick(topic.id)}
              >
                {topic.name}
              </Badge>
            );
          })}
        </div>

        <div className={classes.selectedTopics}>
          {numberOfTopics} topics Selected
        </div>
      </div>

      <div>
        <Button className={classes.submit} onClick={handleSubmitClick}>Submit</Button>
        <Button className={classes.skip} onClick={handleSkipClick}>Skip</Button>
      </div>
    </div>
  );
};

export default Personalization;
