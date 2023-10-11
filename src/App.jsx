// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'
import ContactForm from './components/ContactForm/ContactForm'

import Navigation from "./components/Navigation/Navigation"
import ContactHeader from './components/contactHeader/contactHeader'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <main className='main_container'>
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App
