import axios from 'axios'
import Avatar from "../assests/img/9.jpeg"
import React , {useEffect, useState} from 'react'
import "../App.css"

function HomeWorld({ ur }){

  const [info, setInfo] = useState([])
  const [loading, setLoading ] = useState(true)
  

  useEffect(async() => {
    await axios.get(ur).then(res => {
    setInfo(res.data)
    console.log(fetch)
      setLoading(false)
             })
            }, [])
  console.log(info)

if (loading) return <h2 className='loading'>Loading ...</h2>
  return(

    <main>
    <p className="headName">{info.name}</p>
    <div className="d-detail-section">
      <div className="d-grid-item">
        <img className="w-img-character" src={Avatar} />
        <span className="details">
          <ul>
            <li>
            Climate : <span>{info.climate}</span>
            </li>
            <li>
              Diameter : <span>{info.diameter}</span>
            </li>
            <li>
            Gravity  :<span>{info.gravity}</span>
            </li>
            <li>
            Orbital Period : <span>{info.orbital_period}</span>
            </li>
            <li>
            Population : <span>{info.population}</span>
            </li>
            <li>
            Rotation Period : <span>{info.rotation_period}</span>
            </li>
            <li>
            Terrain : <span>{info.terrain}</span>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </main>
  )
}

export default HomeWorld;