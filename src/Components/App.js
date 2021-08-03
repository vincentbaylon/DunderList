import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Shop from './Shop'
import Sell from './Sell'
import About from './About'
import Cart from './Cart'

function App() {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
    .then(res => res.json())
    .then(setProducts)
  }, [])

  function addProduct(newProduct) {
    setProducts([...products, newProduct])
  }

  function handleFilter(category) {
    const newProducts = products.filter((eachProduct) => eachProduct.category === category)
    setFilterProducts(newProducts)
  }

  console.log(products)

  return (
    <div>
     <Header />
      <Filters handleFilter={handleFilter}/>

    <Switch>
      <Route path="/sell">
        <Sell addProduct={addProduct}/>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route exact path="/">
        <Shop products={products}/>
      </Route>
    </Switch>

    </div>
  );
}

export default App;
