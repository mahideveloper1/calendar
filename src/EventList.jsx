import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';

const EventList = ({ events, updateEvent }) => {
  return (
    <List>
      {events.map(event => (
        <ListItem key={event.id}>
          <ListItemText
            primary={event.title}
            secondary={`${event.description} - ${event.date} ${event.time}`}
          />
          <ListItemSecondaryAction>
            <Button onClick={() => updateEvent(event)}>Edit</Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default EventList;
