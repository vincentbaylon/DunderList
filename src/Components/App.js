import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Shop from './Shop'
import Sell from './Sell'
import About from './About'
import Cart from './Cart'

function App() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [cart, setCart] = useState([])
  const [sellers, setSellers] = useState([])

  //array of only names of the sellers
  const sellerNames = sellers.map(seller => seller.name)


  useEffect(() => {
    fetch(`http://localhost:3000/products`)
    .then(res => res.json())
    .then(setProducts)
  }, [])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/526/cast`)
    .then(res => res.json())
    .then(data => {
        console.log('external fetch done')
        setSellers(data.map(item => item.character))
    })
}, [])

  function addProduct(newProduct) {
    setProducts([...products, newProduct])
  }

  function addToCart(id){
    setCart([...cart, id])
  }

  function removeFromCart(id){
    const updatedCart = cart.filter(item => item !== id)
    setCart(updatedCart)
  }

  const displayProducts = products.filter((eachProduct) => {
    if (filter.length < 1) {
      return eachProduct
    } else {
      return filter.includes(eachProduct.category)
    }
  }).filter((eachProduct) => {
    if (search) {
      return eachProduct.title.toLowerCase().includes(search.toLowerCase())
    } else {
      return eachProduct
    }
  }).sort((firstProduct, secondProduct) => {
    if (sort === 'relevant') {
      if (firstProduct.id > firstProduct.id) return -1
    } else if (sort === 'priceHighLow') {
      if (firstProduct.price > secondProduct.price) return -1
    } else if (sort === 'priceLowHigh') {
      if (firstProduct.price < secondProduct.price) return -1
    }
  })

  //console.log(products)

  return (
    <div>
      <Header cart={cart} />

    <Switch>
      <Route path="/sell">
        <Sell addProduct={addProduct} sellerNames={sellerNames}/>
      </Route>
      <Route path="/about">
        <About sellers={sellers}/>
      </Route>
      <Route path="/cart">
        <Cart cart={cart} products={products} removeFromCart={removeFromCart} />
      </Route>
      <Route exact path="/">
        <Shop products={displayProducts} setFilter={setFilter} filter={filter} search={search} setSearch={setSearch} addToCart={addToCart} removeFromCart={removeFromCart} setSort={setSort} />
      </Route>
    </Switch>

    </div>
  );
}

export default App;
