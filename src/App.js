import React,{useState,useEffect} from "react";
import "./App.css";
import axios from 'axios'

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
        <div className ="Header">
          <h1 className="title">NASA Astronomy Picture of the Day.</h1>
          <h4>Date:{dataNasa.date}</h4>
        </div>
        <section>
        <div className = "nasaImg" >  
        <img src= {dataNasa.hdurl}  height ="600" alt="Nasa astronomy picture of the day" ></img>
        <p> {dataNasa.title}</p>
        </div>
        </section>
        <div>
          <p> {dataNasa.explanation}</p>
        </div>
   </div>
  )
}

export default App;
