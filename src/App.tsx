import './styles/global.scss'
import { Getstarted } from './pages/getstarted.tsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Getstarted />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App