import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Navbar } from '../';
import { localizer, getMessagesES } from '../../helpers';



const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 1),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Vanessa'
  }
}]
export const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
      />
    </>
  )
}

