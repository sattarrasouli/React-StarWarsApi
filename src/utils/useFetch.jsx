// /* eslint-disable*/
// import { useState, useEffect } from "react"

// import axios from "axios"

// const useFetch = () => {
//   const [data, setData] = useState([])
//   const [url, setUrl] = useState([])
//   const [isLoading, setLoading] = useState(false)
//   useEffect(() => {
//     const getData = async () => {
//       setLoading(true)
//       const payload = await axios.get(`https://swapi.dev/api/people/?page=1`)
//       setData(payload.data.results)
//       setUrl(payload.data.results[2].url)
//     }
//     getData()
//   }, [])
//   console.log(url)
//   return { data, isLoading, url }
// }

// export default useFetch
