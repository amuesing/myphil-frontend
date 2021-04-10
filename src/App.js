import Header from './Components/Header/Header'
import Homepage from './Components/Homepage/Homepage.js'
import Login from './Components/Login/Login'
import Support from './Components/Support/Support'
import Visit from './Components/Visit/Visit'
import Calendar from './Components/Calendar/Calendar'
import About from './Components/About/About'
// import Concert from './Components/Calendar/Concert'

import './App.css';
import { Switch, Route, Redirect } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
          <Route exact path="/visit">
            <Visit />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>


          <Route exact path="/*">
            <Redirect
              to={{
                pathname: '/',
              }} />
          </Route>
        </Switch>

      </header>
    </div>
  );
}

export default App;
