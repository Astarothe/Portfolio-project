import React from 'react';
import s from './Project.module.css';

type ProjectType = {
    title: string
    description:string
}

export const Project = (props:ProjectType ) => {
    return (
       <div className={s.projectBlock}>
           <div className={s.imgContainer}>
               <a className={s.previewButton} href={"#"}>
                   Смотреть
               </a>
               <img src="" alt=""/>
           </div>

           <div className={s.projectDescription}>
               <h3 className={s.title}>{props.title}</h3>
               <p className={s.description}>{props.description}</p>
           </div>
       </div>
    );
}
