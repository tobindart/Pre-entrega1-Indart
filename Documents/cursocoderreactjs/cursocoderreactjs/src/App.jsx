import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  const enlaces = [
    "Inicio",
    "Productos",
    "Contacto"
  ]

  const greeting = "Bienvenidos a nuestro sitio!";

  return (
    <>
        <Navbar links={enlaces}/>
        <ItemListContainer mensaje={greeting}/>
    </>
  );
};

export default App
