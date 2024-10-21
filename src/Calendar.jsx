import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import { addMonths, subMonths, format, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns';
import { styled } from '@mui/material/styles';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5">
            {format(currentDate, 'MMMM yyyy')}
          </Typography>
        }
        action={
          <div>
            <Button onClick={handlePreviousMonth} variant="contained" color="primary">
              Previous
            </Button>
            <Button onClick={handleNextMonth} variant="contained" color="primary">
              Next
            </Button>
          </div>
        }
      />
      <CardContent>
        <Grid container spacing={1}>
          {daysInMonth.map((day) => (
            <Grid item xs={1.5} key={day.toString()}>
              <div
                style={{
                  padding: '10px',
                  backgroundColor: isToday(day) ? '#3f51b5' : '#fff',
                  color: isToday(day) ? '#fff' : '#000',
                  borderRadius: '5px',
                  textAlign: 'center',
                }}
              >
                {format(day, 'd')}
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Calendar;
