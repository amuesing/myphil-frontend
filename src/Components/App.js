import Header from './Header/Header'
import Homepage from './Homepage/Homepage.js'
import Login from './Login/Login'
import Support from './Support/Support'
import Visit from './Visit/Visit'
import Calendar from './Calendar/Calendar'
import About from './About/About'

import { Switch, Route, Redirect } from "react-router-dom"
import ConcertDetail from './Calendar/ConcertDetail'

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
          <Route exact path="/calendar/:id">
            <ConcertDetail />
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
