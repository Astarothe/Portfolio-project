import React from 'react';
import s from './Main.module.css';
import {Intro} from "./Intro/Intro";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";

export const Main = () => {
    return (
        <main className={s.main}>
            <Intro/>
            <Skills />
            <Projects />
            <Contacts />
        </main>
    );
}
