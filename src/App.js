import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Confirmation from './components/Confirmation';
import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  customerName: '',
  size: '',
  sauce: '',
  // toppings
  pepperoni: false,
  tomatos: false,
  sausage: false,
  bacon: false,
  garlic: false,
  spicySausage: false,
  cheese: false,
  pineapple: false,
  pepper: false,
  extraCheese: false,
  //
  glutenFree: false,
  special: '',
  count: 1
}
const initialFormErrors = {
  customerName: '',
  size: '',
  sauce: '',
  toppings: '',
  special: '',
  count: ''
}
const initialOrders = []
const initialDisabled = true

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
      .then(res => {
        setOrders(res.data.data)
      }).catch(err => console.error(err))
  }

  useEffect(() => {
    getOrders()
  }, [])

  const placeOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([res.data, ...orders]);
      })
    setFormValues(initialFormValues);
    setFormErrors(initialFormErrors)
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkToppingsLimit = (toppings => {
    if (toppings.length >= 4) {
      return true;
    } else return false;
  })

  const formSubmit = () => {
    const newOrder = {
      customerName: formValues.customerName,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: [ 'pepperoni', 'tomatos', 'sausage', 'bacon', 
                  'garlic', 'spicySausage', 'cheese', 'pineapple',
                  'pepper', 'extraCheese'].filter(topping => !!formValues[topping]),
      glutenFree: formValues.glutenFree,
      special: formValues.special.trim(),
      count: formValues.count
    }
    if (!checkToppingsLimit(newOrder.toppings)) {
      setFormErrors({ ...formErrors, toppings: 'At least 4 toppings' })
    } else {
      placeOrder(newOrder);
    }

  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/confirmation">Your Order</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
          <Form 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path="/confirmation">
          <Confirmation 
            values={orders}/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
