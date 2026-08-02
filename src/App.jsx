import './Reset.css'
import './Scss/style.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Main from './Pages/Main'
import Location from './Pages/Location'

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""} className="App" >
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/location' element={<Location />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
