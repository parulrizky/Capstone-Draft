import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Donation from './components/pages/Donation';
import Volunteer from './components/pages/Volunteer';
import SignUp from './components/pages/SignUp';
import Berita from './components/pages/Berita';
import { AuthProvider } from './context/auth'


function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/donasi' component={Donation} />
          <Route path='/relawan' component={Volunteer} />
          <Route path='/berita/:id' component={Berita} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
    </>
  );
}




export default App;
