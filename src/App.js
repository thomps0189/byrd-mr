import "./index.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}></Nav>
      {!contactSelected ? <Hero /> : <Contact />}
    </div>
  );
}

export default App;
