import s from "./ListItem.module.css";
import React from "react";

export const ListItem = () => {
    return (
        <>
            <li className={s.item}><a href="">Home</a></li>
            <li className={s.item}><a href="">Skills</a></li>
            <li className={s.item}><a href="">Work</a></li>
            <li className={s.item}><a href="">Contact</a></li>
        </>

    );
}