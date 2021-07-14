import React from 'react';
import s from './Navigation.module.css';
import {List} from "./List/List";

export const Navigation = () => {
    return (
        <nav className={s.nav}>
            <List />
        </nav>
    );
}
