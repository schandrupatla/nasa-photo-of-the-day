
import React,{useState,useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Details from './Details'

const API_KEY = `https://api.nasa.gov/planetary/apod?api_key=hjgolf8MRcFJpvP3unQQocq5IeVMXUFaU3yi0oRw`

function App() {
  const [dataNasa, setdataNasa] = useState([]);
  // const [currentFriendId, setCurrentFriendId] = useState(null);
  useEffect(() => {
  axios
  .get(`${API_KEY}`)
  .then((res) => {
    setdataNasa(res.data);
    console.log(res.data);
  })
  .catch((err) => {
    console.log(`lol whoops ${err}`);
  });
}, []);
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
        <Details  date = {dataNasa.date} hdurl= {dataNasa.hdurl} title={dataNasa.title} explanation={dataNasa.explanation} copyright={dataNasa.copyright}/>
   </div>
  )
}

export default App;
