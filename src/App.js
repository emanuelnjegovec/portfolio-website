import React, { useState, useEffect } from 'react';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import useBreakpoints from './components/useBreakpoints';
import './App.css';
import MobileNav from './components/MobileNav';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/emanuelnjegovec')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  const {isXs, isSm} = useBreakpoints();

  return ( user ? 
    <main>
      {isXs || isSm ? <></> : <div id='thing1'>
        <Sidebar />
      </div>}
      
      <div id='thing2'>
        {isXs || isSm ? <MobileNav /> : <></>}
        <About user={user.basics} />
        <Projects user={user.projects} />
        <Skills user={user.skills} />
        <Contact />
      </div>
    </main> : null
  );
}

export default App;
