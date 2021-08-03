import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Shop from './Shop'
import Sell from './Sell'
import About from './About'
import Cart from './Cart'

function App() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
    .then(res => res.json())
    .then(setProducts)
  }, [])

  function addProduct(newProduct) {
    setProducts([...products, newProduct])
  }

  function addToCart(id){
    setCart([...cart, id])
    console.log("from addto cart in app: ", cart)
  }

  function removeFromCart(id){
    const updatedCart = cart.filter(item => item !== id)
    setCart(updatedCart)
    console.log("from remove cart in app: ", cart)
  }

  const displayProducts = products.filter((eachProduct) => {
    if (filter === '') {
      return eachProduct
    } else {
      return eachProduct.category === filter
    }
  }).filter((eachProduct) => {
    if (search) {
      return eachProduct.title.toLowerCase().includes(search.toLowerCase())
    } else {
      return eachProduct
    }
  })

  //console.log(products)

  return (
    <div>
     <Header />

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
        <Shop products={displayProducts} setFilter={setFilter} search={search} setSearch={setSearch} addToCart={addToCart} removeFromCart={removeFromCart}/>
      </Route>
    </Switch>

    </div>
  );
}

export default App;
