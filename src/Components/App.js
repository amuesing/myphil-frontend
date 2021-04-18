import Header from './Header/Header'
import Home from './Home/Home.js'
import Login from './Account/Login'
import Support from './Support/Support'
import Visit from './Visit/Visit'
import Calendar from './Calendar/Calendar'
import About from './About/About'
import Register from './Account/Register'
import Sidebar from './Home/Sidebar'
// import LoginModal from './Modals/LoginModal'


import { Switch, Route, Redirect } from "react-router-dom"
import ConcertDetail from './Calendar/ConcertDetail'

function App() {

  return (
    <div className="App">
      <section>
        <Header />
      </section>
      {/* <section>
        <Sidebar />
      </section> */}
        <Switch>
          <Route exact path="/">
            <Home />
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
          <Route exact path="/register">
            <Register />
          </Route>
          {/* <Route exact path="/auth">
            <LoginModal/>
          </Route> */}
          <Route exact path="/account">
            <Login />
          </Route>



          <Route exact path="/*">
            <Redirect
              to={{
                pathname: '/',
              }} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
