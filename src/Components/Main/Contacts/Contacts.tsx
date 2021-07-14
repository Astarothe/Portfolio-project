import React from 'react';
import s from './Contacts.module.css';
import sContainer from "./../../../common/Styles/Container.module.css"

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer} `}>
                <h2>Contacts</h2>
                <form action="#" className={s.form}>
                    <input className={s.input} type="text"/>
                    <input className={s.input} type="email"/>
                    <textarea className={s.textarea}></textarea>
                </form>
                <button className={s.buttonContacts}>Отправить</button>
            </div>
        </div>
    );
}
