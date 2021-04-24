import { useState, useEffect } from "react"
import axios from "axios"
import React from "react"
import Card from "./Card"
import "../App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Detail from "./Detail"
import Footer1 from "./Footer"
import HomeWorld from "./homeworld"

function Main() {
  const [data, setData] = useState([])
  const [url, setUrl] = useState("https://swapi.dev/api/people/?page=1")
  const [urlD, setUrlD] = useState([])
  const [urlW, setUrlW] = useState([])
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [isLoading, setLoading] = useState(true)
  useEffect(async () => {
    await axios.get(url).then(res => {
      setLoading(false)
      setData(res.data.results)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
    })
  }, [url])
  function goToNextPage() {
    setUrl(nextPageUrl)
  }
  function goToPrevPage() {
    setUrl(prevPageUrl)
  }
  if (isLoading) return <h2 className="loading">Loading...</h2>
  return (
    <>
      <main className="container">
        <div className="three-col-grid">
          <Router>
            <Switch>

              <Route path='/homeworld'>
                <HomeWorld ur={urlW} />
              </Route>
              
              <Route path="/detail">
                <Detail url={urlD} />
              </Route>

              

              <Route path="/">
                <Card data={data} setUrlD={setUrlD} setUrlW={setUrlW} goToNextPage={nextPageUrl ? goToNextPage : null} goToPrevPage={prevPageUrl ? goToPrevPage : null} />
              </Route>

            </Switch>
            <Footer1 />
          </Router>

          
        </div>
      </main>
    </>
  )
}

export default Main
