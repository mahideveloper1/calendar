import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import Calendar from './Calendar';
import EventList from './EventList';
import EventForm from './EventForm';
import { styled } from '@mui/material/styles';

import './App.css';

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event));
  };

  return (
    <Container>
      <div>
        {isAuthenticated && <h3>Hello {user.name}</h3>}
        {isAuthenticated ? (
          <Button variant="contained" color="secondary" onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={loginWithRedirect}>
            Authenticate Yourself
          </Button>
        )}
      </div>
      <Typography variant="h4" gutterBottom>
        Event Manager
      </Typography>
      {isAuthenticated && (
        <>
          <Calendar />
          <EventForm addEvent={addEvent} />
          <EventList events={events} updateEvent={updateEvent} />
        </>
      )}
    </Container>
  );
}

export default App;
