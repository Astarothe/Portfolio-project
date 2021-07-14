import s from "./List.module.css";
import React from "react";
import {ListItem} from "./ListItem/ListItem";

export const List = () => {
    return (
        <ul className={s.list}>
            <ListItem/>
        </ul>
    );
}