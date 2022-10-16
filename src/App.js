import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './sass/style.scss';
import Home from "./components/Home/Home"
import News from "./components/News/News"
import Contact from "./components/Contact/Contact"

function App() {
  return (
        <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
