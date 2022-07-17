// create your App component here
import React, {useEffect, useState } from "react"


function App() {
    const [dogPc, setDogPc] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => { 
            setDogPc(data.message);
    });
}, []);

if (!dogPc)
return <p>Loading...</p>

return <img src={dogPc} alt="A Random Dog" />;

}

export default App;