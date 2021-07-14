import React from 'react';
import s from './Intro.module.css';

export const Intro = () => {
    return (
        <div className={s.container}>
            <div className={s.textContainer}>
                <span className={s.greetUsers}>Hi There</span>
                <h1 className={s.greetUsers}>I am Jeffrey Aaron</h1>
                <p className={s.greetUsers}>Frontend Developer</p>
            </div>
            <div className={s.photo}></div>
        </div>
    );
}
