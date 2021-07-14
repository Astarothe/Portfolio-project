import React from 'react';
import s from './Projects.module.css';
import sContainer from "./../../../common/Styles/Container.module.css"
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
       <section className={s.projectBlock}>
           <div className={`${sContainer.container} ${s.projectContainer}`}>
               <h2>Мои работы</h2>
               <div className={s.projectList}>
                   <Project title={"Todolist"} description={"Краткое описание"}/>
                   <Project title={"Social-Network"} description={"Краткое описание"}/>
               </div>
           </div>
       </section>
    );
}
