import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import Event from './Event';
import eventsData from '../data/events.json';

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showBuyAlert, setShowBuyAlert] = useState(false); // Pour le message d'alerte de succès

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBook = (id) => {
    setEvents(events.map(event => {
      if (event.id === id && event.nbTickets > event.nbParticipants) {
        return { ...event, nbParticipants: event.nbParticipants + 1 };
      }
      return event;
    }));
  };

  const handleLike = (id) => {
    setEvents(events.map(event => event.id === id ? { ...event, like: !event.like } : event));
  };

  // La fonction pour acheter un billet
  const handleBuy = (id) => {
    setEvents(events.map(event => {
      if (event.id === id && event.nbTickets > 0) {
        return { ...event, nbTickets: event.nbTickets - 1 }; // Réduire le nombre de billets
      }
      return event;
    }));

    // Afficher l'alerte de succès
    setShowBuyAlert(true);

    // Cacher l'alerte après 2 secondes
    setTimeout(() => {
      setShowBuyAlert(false);
    }, 2000);
  };

  return (
    <Container>
      {/* {showWelcome && <Alert variant="success">Bienvenue sur la gestion des événements !</Alert>} */}

      {/* Afficher l'alerte de succès après l'achat */}
      {showBuyAlert && <Alert variant="success">Achat réussi !</Alert>}

      <Row>
        {events.map((event, index) => (
          <Col key={index} md={4}>
            <Event event={event} onBook={handleBook} onLike={handleLike} />
            <Button
              variant="success"
              onClick={() => handleBuy(index)}
              disabled={event.nbTickets === 0}
            >
              {event.nbTickets > 0 ? 'Acheter un billet' : 'Épuisé'}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
