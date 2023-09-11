// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [dogImg, setDogImg] = useState([]);

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((r) =>r.json())
        .then((data) => {
            setDogImg(data.message)
        })
    })

    return(
        <>
        <p>Loading...</p>
        <img src={dogImg} alt="A Random Dog"></img>
        </>
    );
}

export default App;