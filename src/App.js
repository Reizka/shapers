import React, { useState, useEffect } from "react";
import "./css/App.css";
import Topic from "./components/topic";

function App() {
  const [topic, setTopic] = useState({
    title: "title",
    intro: "intro",
    exp_intro: "intro continued",
    date: "01-01-2019",
    location: "pleinlaan 2, 1050 ixelles, BE"
  });

  return (
    <div class="background">
      <div class="topic_box_container">
        <div class="topic_item">
          <h1 class="title">{topic.title}</h1>
          <div class="text_box">
            <p class="text">{topic.intro}</p>
          </div>
          <div class="text_box">
            <p class="text">{topic.exp_intro}</p>
          </div>
          <div class="date">{topic.date}</div>
          <dive class="location">{topic.location}</dive>
        </div>
      </div>
    </div>
  );
}

export default App;
