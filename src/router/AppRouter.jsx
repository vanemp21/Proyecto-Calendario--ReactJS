import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendario';

export const AppRouter = () => {
    const authStatus = 'authenticated'
    //depende del authstatus vamos a mostrar una ruta u otra
    return (
        <Routes>
            {
              (authStatus==='not-authenticated')   // Si no esta autenticado va a ir a LoginPage, en caso contrario a CalendarPage y en calendarPage esta el <Navbar/>
              ?<Route path="/auth/*" element={<LoginPage />} />
              :  <Route path="/*" element={<CalendarPage />} />
            }

            {/* Si voy a la ruta /auth me redirecciona a loginpage y a otra cualquiera me redirecciona a calendarpage */}
           
          
            <Route path="/*" element={<Navigate to ="auth/login" />} />
            
        </Routes>
    )
}
