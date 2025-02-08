import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Event = ({ event, onBook, onLike }) => {
  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img variant="top" src={event.img} />
      <Card.Body className="text-start">
        <Card.Title>{event.name}</Card.Title>
        {/* <Card.Text>{event.description}</Card.Text> */}
        <Card.Text>Price: {event.price} TND</Card.Text>
        <Card.Text>Number Of Tickets: {event.nbTickets}</Card.Text>
        <Card.Text>Number Of Participants: {event.nbParticipants}</Card.Text>
        <Button variant="primary" onClick={() => onBook(event.id)} disabled={event.nbParticipants - event.nbTickets === 0}>
          {event.nbParticipants - event.nbTickets > 0 ? 'Book an event' : 'Sold Out'}
        </Button>
        <Button variant="secondary" className="ms-2" onClick={() => onLike(event.id)}>
          {event.like ? 'Dislike' : 'Like'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Event;