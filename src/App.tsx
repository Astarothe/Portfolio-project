import React from 'react';
import s from './App.module.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main />
            <Footer />
        </div>
    );
}

export default App;
