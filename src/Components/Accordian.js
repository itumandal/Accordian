import React, { useState } from "react";
import QuesApi from "./data.js";
import SingleQuestion from "./Questions.js";

function Accordian() {
  const [ques] = useState(QuesApi);
  return (
    <main>
      <h1>FAQ/Accordion</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <section className="info">
          {ques.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}>
                {" "}
              </SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Accordian;
