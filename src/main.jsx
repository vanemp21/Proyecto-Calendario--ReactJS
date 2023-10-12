import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalendarApp } from './CalendarApp.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalendarApp /> 
    {/* El calendarApp lo que tiene es un return al AppRouter */}
  </React.StrictMode>,
)
