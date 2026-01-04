import React from "react";
import EventsSlider from "./EventsSlider"; 
import "./Events.css";

const Events = () => {
  return (
    <div className="events-section">
      <div className="events-box">
        <h2 className="section-title">Events</h2>
        <EventsSlider />
      </div>

      <div className="events-box">
        <h2 className="section-title">News & Updates</h2>
        <EventsSlider />
      </div>
    </div>
  );
};

export default Events;