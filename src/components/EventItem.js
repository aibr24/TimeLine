import React from "react";
import { Title, Date, ListContainer } from "../styles";

const EventItem = (props) => {
  const event = props.event;
  return (
    <ListContainer>
      <Date>{event.date}</Date>
      <Title>{event.info}</Title>
    </ListContainer>
  );
};
export default EventItem;
