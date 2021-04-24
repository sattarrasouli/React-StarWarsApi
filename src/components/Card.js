import React from "react"
import { Link } from "react-router-dom"
import morgan from "../assests/img/IMG-5057.JPG"
import Pagination from "./pagination"
import PropTypes from "prop-types"

const Card = ({ data, setUrlD, goToNextPage, goToPrevPage, setUrlW }) => {
  return (
    <>
      {data.map(data => (
        <div className="grid-item" key={data.url}>
          <img className="img-character" src={morgan} />
          <span className="description">
            <ul>
              <li>
                <Link to="/detail" className="link" url={data.url} onClick={() => setUrlD(data.url)}>
                  {data.name}
                </Link>
              </li>
              <li>
                Mass :<span>{data.mass}</span>
              </li>
              <li>
                Height : <span>{data.height}</span>
              </li>
              <li>
                Hair Color : <span> {data.hair_color} </span>
              </li>
              <li>
                Birthdate : <span>{data.birth_year}</span>
              </li>
              <li>
                Skin Color : <span>{data.skin_color}</span>
              </li>
              <li>
                Gender : <span> male </span>
              </li>
              <li>
                <Link className="link" to="/homeworld" onClick={() => setUrlW(data.homeworld)}>
                  <span>Planet</span>
                </Link>
              </li>
            </ul>
          </span>
        </div>
      ))}
      <Pagination goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} />
    </>
  )
}

export default Card

Card.propTypes = {
  data: PropTypes.array,
  setUrlD: PropTypes.func,
  goToNextPage: PropTypes.array,
  goToPrevPage: PropTypes.array,
  setUrlW: PropTypes.func
}
