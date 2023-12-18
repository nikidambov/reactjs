import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as gameService from './services/gameService';

import { Header } from "./components/Header/header"
import { Footer } from "./components/Footer/footer"
import { Home } from "./components/Home/home"
import { Login } from "./components/Login/login"
import { Register } from "./components/Register/register"
import { CreateGame } from "./components/CreateGame/createGame"
import { Catalog } from "./components/Catalog/catalog"
import { GameDetails } from './components/GameDetails/gameDetails';

function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        console.log(result);
        setGames(result);
      })
  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);

    // TODO add to state, DONE
    setGames(state => [...state, newGame]);

    // TODO redirect to catalog, DONE
    navigate('/catalog');
  }

  return (
    <>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
            <Route path='/catalog' element={<Catalog games={games} />} />
            <Route path='/catalog/:gameId' element={<GameDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
