import React from 'react';

interface Event {
  date: string;
  description: string;
}

const Timeline: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <span className="event-date">{event.date}</span>
          <span className="event-description">{event.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
