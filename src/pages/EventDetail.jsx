import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EventDetail = () => {
  const {id} = useParams()
  // console.log(id)
  const [result, setResult] = useState(null)

  useEffect(()=>{
    axios
    .get(`https://example-data.draftbit.com/podcasts?_limit=50`)
    .then((response) =>{
      const data = response.data
      const foundItem = data.find((dataItem)=>dataItem.title === id)
      // console.log(foundItem)
      setResult(foundItem)
    })
  },[id])

  return (
    <div >
      {
      result && (<div key={result.id}>
        <p>{result.title}</p>
        <p>{result.author}</p>
        <p>{result.categories}</p>
        <p>{result.description}</p>
        </div>)}
    </div>
  )
}

export default EventDetail