import './App.css';
import { useState } from 'react';
import {
  Button,
  Form,
} from 'semantic-ui-react';

function App() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState('');

  return (
    <div className="App">
      <EventInput eventName={eventName}></EventInput>
    </div>
  );
}

function EventInput({ eventName }: { eventName : string }) {
  return (
    <Form>
      <Form.Field>
        <label>Event Name</label>
        <input
          placeholder='Name'
          value={eventName}
        />
      </Form.Field>
      <Form.Field>
        <label>Date</label>
        <input placeholder='Date' />
      </Form.Field>
      <Form.Field>
        <label>Time</label>
        <input placeholder='Time' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  );
}

export default App;
