import React from 'react';
import './App.css';
import {Rating} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";

function App() {
    return (
        <div className="App">
            <Rating value={5}/>
            <Accordion title={'cities'}/>
            <Rating value={3} />
        </div>
    );
}

export default App;
