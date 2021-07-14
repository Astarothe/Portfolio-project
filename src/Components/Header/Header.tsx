import React from 'react';
import s from './Header.module.css';
import {Navigation} from "./Navigation/Navigation";
import sContainer from './../../common/Styles/Container.module.css'


export const Header = () => {
    return (
            <header className={`${s.header}`}>
                <Navigation/>
            </header>
    );
}
