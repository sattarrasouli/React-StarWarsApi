import PropTypes from 'prop-types'
import React, {useEffect, useState, } from "react"
import Avatar from "../assests/img/3.jfif"
import axios from "axios"



function Detail({url}) {

  const [info, setInfo] = useState([])
  const [loading, setLoading ] = useState(true)
  

  useEffect(async() => {
    await axios.get(url).then(res => {
    setInfo(res.data)
    console.log(fetch)
      setLoading(false)
             })
            }, [])
  console.log(info)

  if (loading) return (<h2 className='loading'>Loading...</h2>)

  return (
    <>
    
      <main>
        <p className="headName">{info.name}</p>
        <div className="d-detail-section">
          <div className="d-grid-item">
            <img className="d-img-character" src={Avatar} />
            <span className="details">
              <ul>
                <li>
                  Age : <span>{info.birth_year}</span>
                </li>
                <li>
                  Height : <span>{info.height}</span>
                </li>
                <li>
                  Birth Year :<span>{info.birth_year}</span>
                </li>
                <li>
                  Skin Color : <span>{info.skin_color}</span>
                </li>
                <li>
                  Eye color : <span>{info.eye_color}</span>
                </li>
                <li>
                  Gender : <span>{info.gender}</span>
                </li>
                <li>
                  Vehicles : <span>{info.vehicles == "" ? "There's No Vehicles" : info.vehicles}</span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </main>
    </>
  )
}

export default Detail


Detail.propTypes= {
  url : PropTypes.array
}