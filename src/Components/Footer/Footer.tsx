import React from 'react';
import s from './Footer.module.css';
import sContainer from "./../../common/Styles/Container.module.css"
import {Social} from "./Social/Social";

export const Footer = () => {
    return (
        <footer className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer} `}>
                <h3>Мишель Савич</h3>
                <div className={s.iconWrapper}>
                    <Social/>
                    <Social/>
                    <Social/>
                    <Social/>
                </div>
                <p>© 2021 Все права защищены</p>
            </div>
        </footer>
    );
}
