import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Doctors from './components/Doctors/Doctors';
import Blogs from './components/Blogs/Blogs';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './components/User/PrivateRoute/PrivateRoute';
import LoginRegistration from './components/User/LoginRegistration/LoginRegistration';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      {/* <h2>Welcome to Plasma Healthcare</h2> */}
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path='/loginregistration'>
              <LoginRegistration></LoginRegistration>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
