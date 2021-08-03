import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Shop from './Shop'
import Sell from './Sell'
import About from './About'
import Cart from './Cart'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
    .then(res => res.json())
    .then(setProducts)
  }, [])

console.log(products)

  return (
    <div>
     <Header />

    <Switch>
      <Route path="/sell">
        <Sell />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route exact path="/">
        <Shop />
      </Route>
    </Switch>

    </div>
  );
}

export default App;
