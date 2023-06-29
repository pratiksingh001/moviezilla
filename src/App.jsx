import { useEffect, useState } from 'react'
import { fetchDataFromApi } from './utils/api'

function App() {

  useEffect(() => {
    apiTest()
  },[])
  const apiTest = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      console.log(res)
    })
  }

  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  )
}

export default App
