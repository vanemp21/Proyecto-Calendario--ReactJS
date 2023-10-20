import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent, Navbar, CalendarModal } from '../';
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';

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
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#0062cc',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    }
  }
  const onDoubleClick = (event) => {
    console.log({ doubleClick: event })
  }
  const onSelect = (event) => {
    console.log({ click: event });
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)

  }
  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView} //la ultima pagina en la que has estado
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged} //En la pagina que estas ejecuta onviewchanged, 
      />
      <CalendarModal/>
    </>
  )
}

