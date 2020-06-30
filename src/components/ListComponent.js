import React from "react";
import events from "../data";
import EventItem from "./EventItem";

const EventList = () => {
  const eventList = events.map((event) => (
    <EventItem event={event} key={event.id} />
  ));
  return <div> {eventList}</div>;
};
export default EventList;
