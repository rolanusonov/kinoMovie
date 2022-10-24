import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Popular from "./components/pages/Popular";
import NowPlaying from "./components/pages/NowPlaying";
import Detail from "./components/pages/Detail";

function App() {
  return (
      <div>
<Header/>
        <Routes>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/nowplaying" element={<NowPlaying/>}/>

        </Routes>
          <Popular/>
      </div>
   );
}

export default App;
