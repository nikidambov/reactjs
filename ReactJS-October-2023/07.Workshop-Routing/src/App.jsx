import { Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header/header"
import { Footer } from "./components/Footer/footer"
import { Home } from "./components/Home/home"
import { Login } from "./components/Login/login"
import { Register } from "./components/Register/register"
import { CreateGame } from "./components/CreateGame/createGame"
import { Catalog } from "./components/Catalog/catalog"

function App() {

  return (
    <>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create-game' element={<CreateGame />} />
            <Route path='/catalog' element={<Catalog />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
