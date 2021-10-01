import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Form from './components/Form';
import Cart from './components/Cart';
import TodoList from './components/ToDoList/TodoList';
import { ContextProvider } from './components/ToDoList/Context';
import { CartProvider } from './components/Context';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './scss/app.css';



const App = () => {
  return (
    <>
      {/* <Header /> */}
    <Switch>
      <Route exact path='/' component={TodoList} />
      <Route exact path='/login' component={Form} />
      <Route exact path='/cart' component={Cart} />
    </Switch>
    </>
  )
}
ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
    <ContextProvider>
    <App />
    </ContextProvider>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();

