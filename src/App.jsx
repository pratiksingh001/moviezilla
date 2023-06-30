import { useEffect, useState } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearhResult from './pages/searchResult/SearhResult'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/pageNotFound'

function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home)
  console.log(url)

  useEffect(() => {
    apiTest()
  }, [])
  
  const apiTest = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      console.log(res)
      dispatch(getApiConfiguration(res))
    })
  }

  Header

  // console.log(url.page)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearhResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
