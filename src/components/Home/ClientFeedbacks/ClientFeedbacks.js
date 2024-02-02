import React from "react";

import "./ClientFeedbacks.css";
import { feedbacks } from "./fakeFeedback";
import Feedback from "../Feedback/Feedback";

const ClientFeedbacks = () => {
  return (
    <div className="feedback">
      <h2 className="text-center">
        Clients <span style={{ color: "#7ab259" }}>Feedback</span>
      </h2>

      <div className="container">
        <div className="row mt-5">
          {feedbacks.map((feedback) => (
            <Feedback feedback={feedback} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientFeedbacks;
