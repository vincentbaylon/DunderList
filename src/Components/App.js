import { Route, Switch, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Sticky } from 'semantic-ui-react'
import Header from './Header'
import Shop from './Shop'
import Sell from './Sell'
import About from './About'
import Cart from './Cart'
import Login from './Login'
import ProductCard from './ProductCard'

function App() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [cart, setCart] = useState([])
  const [sellers, setSellers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [sellerFilter, setSellerFilter] = useState('all')
  const [likes, setLikes] = useState([])
  const location = useLocation()

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
       // console.log('external fetch done')
        setSellers(data.map(item => item.character))
    })
  }, [])

  useEffect(() => {
    if (loggedIn) {
      fetch(`http://localhost:3000/users/${currentUser.user.id}`)
      .then(res => res.json())
      .then(user => {
        if ((user.cart !== undefined) && (cart.length === 0)) {
          setCart(user.cart)
        } else {
          fetch(`http://localhost:3000/users/${currentUser.user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${currentUser.accessToken}`
          },
          body: JSON.stringify({
            "cart": cart
          })
          })
          .then(res => res.json())
          .then(data => data)
        }
        if ((user.likes !== undefined)) {
          setLikes(user.likes)
          setProducts(products)
        }
      })
    }
  }, [loggedIn])

  
  useEffect(()=> {
    if (sellerFilter !== 'all' && location.pathname !== '/'){
      setSellerFilter('all')
    }
  }, [location])
  

  function addProduct(newProduct) {
    setProducts([...products, newProduct])
  }

  function addToCart(id){
    if (cart.includes(id)) setCart(cart)
    else setCart([...cart, id])

    if (loggedIn) {
      const updateCart = [...cart, id]
      fetch(`http://localhost:3000/users/${currentUser.user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify({
          "cart": updateCart
        })
      })
      .then(res => res.json())
      .then(data => data)
    }
  }

  function removeFromCart(id){
    const updatedCart = cart.filter(item => item !== id)
    setCart(updatedCart)

    if (loggedIn) {
      fetch(`http://localhost:3000/users/${currentUser.user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify({
          "cart": updatedCart
        })
      })
      .then(res => res.json())
      .then(data => data)
    }
  }

  function addLikes(id) {    
    if (loggedIn) {
      const updateLikes = [...likes, id]
      fetch(`http://localhost:3000/users/${currentUser.user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify({
          "likes": updateLikes
        })
      })
      .then(res => res.json())
      .then(() => setLikes([...likes, id]))
    } else {
      alert("Login to like an item.")
    }
  }

  function removeLikes(id) {
    if (loggedIn) {
      const updateLikes = likes.filter(item => item !== id)
      fetch(`http://localhost:3000/users/${currentUser.user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify({
          "likes": updateLikes
        })
      })
      .then(res => res.json())
      .then(() => setLikes(updateLikes))
    }
  }

  const displayProducts = products.filter((eachProduct) => {
    if (filter.length < 1) {
      return eachProduct
    } else {
      return filter.includes(eachProduct.category)
    }
  }).filter((eachProduct) => {
    if(sellerFilter !== 'all'){
      return eachProduct.seller === sellerFilter
    } else {return eachProduct}
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
      <Sticky>
        <Header cart={cart} loggedIn={loggedIn} setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} setCart={setCart} setLikes={setLikes} />
      </Sticky>

    <Switch>
      <Route path="/sell">
        <Sell addProduct={addProduct} sellerNames={sellerNames} currentUser={currentUser}/>
      </Route>
      <Route path="/about">
        <About sellers={sellers} setSellerFilter={setSellerFilter} products={products}/>
      </Route>
      <Route path="/cart">
        <Cart cart={cart} products={products} removeFromCart={removeFromCart} setCart={setCart} currentUser={currentUser} />
      </Route>
      <Route path="/login">
        <Login setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} />
      </Route>
      <Route exact path="/">
        <Shop products={displayProducts} setFilter={setFilter} filter={filter} search={search} setSearch={setSearch} addToCart={addToCart} removeFromCart={removeFromCart} setSort={setSort} cart={cart} sellerNames={sellerNames} setSellerFilter={setSellerFilter} sellerFilter={sellerFilter} addLikes={addLikes} likes={likes} removeLikes={removeLikes} />
      </Route>
    </Switch>

    </div>
  );
}

export default App;
