import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Main from './Components/Main';
import MovieDetails from './Components/MovieDetails';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import getMovie from './Components/SingleMOvie';
import AddMovie from './Components/AddMovie';

const router= (
    <Router>
        <Header/>
        <ul>
            <li><Link to="/app">LIST ALL MOVIES</Link></li>
            <li><Link to="/getMovie">GET MOVIE BY ID</Link></li>
            <li><Link to="/addMovie">ADD MOVIE</Link></li>
        </ul>
        <Footer/>
        <Route path="/app" component={App}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/getMovie" component={MovieDetails}></Route>
        <Route path="/addMovie" component={AddMovie}></Route>
    </Router>
)
ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();