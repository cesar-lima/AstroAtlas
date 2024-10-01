import './styles/global.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Getstarted } from './pages/getstarted.tsx'
import { Planets } from './pages/planets.tsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Getstarted />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App