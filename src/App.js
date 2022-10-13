import "./App.css"
import Card from "./components/card/Card"
import Header from "./components/header/Header"
import { useEffect, useState } from "react"
import ErrorComponent from "./components/error-component/ErrorComponent"
import Footer from "./components/footer/Footer"

function App() {
  const [characters, setCharacters] = useState([])
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")
  const [info, setInfo] = useState({})

  useEffect(() => {
    fetchCharacters()
  }, [search]);

  function fetchCharacters() {
    try {
      fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.results)
          setInfo(data.info)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClick = () => {
    setSearch(query)
  }

  return (
    <div className="App">
      <Header />
      <div className="input-wrapper">
        <input type="text" placeholder="Search..." onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="cards-container">
        {characters === undefined && <ErrorComponent />}
        {characters?.map((character) => {
          return (
            <Card
              image={character.image}
              name={character.name}
              status={character.status}
              location={character.location.name}
              species={character.species}
              key={character.id}
            />
          )
        })}
      </div>
      <Footer totalCharacters={info.count} totalPages={info.pages} />
    </div>
  )
}

export default App
