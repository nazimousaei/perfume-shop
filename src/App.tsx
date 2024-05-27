import routes from "./routes"
import { useRoutes } from 'react-router-dom'
import { useEffect, useState } from "react"

export default function App() {

  const [locate, setLocate] = useState(null)


  useEffect(() => {

    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=bb4beb4184bd466faa56de72a9144ac0')
      .then(response => response.json())
      .then(data => {
        setLocate(data)
      })
  }, [])

  useEffect(() => {
    if (locate) {
      fetch('https://db-perfume.liara.run/identify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'

        }, body: JSON.stringify(locate)
      }).then(res => console.log(res.json()))
        .then(result => console.log(result))
    }
  }, [locate])


  const router = useRoutes(routes)

  return (
    <>
      {router}
    </>
  )
}

