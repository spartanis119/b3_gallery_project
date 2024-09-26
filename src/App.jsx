import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Moon } from "./components/Moon"
import { Mountain } from "./components/Mountain"
import { NightMoon } from "./components/NightMoon"
import { Planets } from "./components/Planets"
import { Tree } from "./components/Tree"
import { Waterfall } from "./components/Waterfall"
import { Wolves } from "./components/Wolves"
import { Navigation } from "./components/Navigation"

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/Moon' element={<Moon className="main-img-container" />} />
            <Route path='/Mountain' element={<Mountain className="main-img-container" />} />
            <Route path='/NightMoon' element={<NightMoon className="main-img-container" />} />
            <Route path='/Planets' element={<Planets className="main-img-container" />} />
            <Route path='/Tree' element={<Tree className="main-img-container" />} />
            <Route path='/Waterfall' element={<Waterfall className="main-img-container" />} />
            <Route path='/Wolves' element={<Wolves className="main-img-container" />} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
