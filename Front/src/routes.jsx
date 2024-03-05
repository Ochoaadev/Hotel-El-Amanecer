import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Form_reservas from "./routes/Formulario_Reservas";
import About from "./components/AboutUs";
import Service from "./components/services";
import Advanced from './components/Benf'
import App from "./App";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/formulario_reservas',
        element: <Form_reservas/>
    },
    {
        path: '/AboutUs',
        element: <About/>
    },
    {
        path: '/services',
        element: <Service/>
    },
    {
        path: '/Benf',
        element: <Advanced/>
    }
])