import { createUseStyles } from "react-jss";

const Library = () => {
    const topics = [];

    for (let key in localStorage) {
        topics.push(localStorage.getItem(key));
    }
  return <div>{
    topics
  }</div>;
};

export default Library;
