import { Route, Routes } from 'react-router-dom'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Info from './pages/Info'
import Layout from './components/Layout'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
