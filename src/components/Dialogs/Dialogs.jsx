import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) =>{

    return (
        <div className={s.dialogs}>
           <div className={s.dialogItems}>
               <div className={`${s.dialog} ${s.active}`} >
                  <NavLink to="dialogs/1" >axto</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/2" >baxto</NavLink>
               </div>
               <div className={s.dialog}>
                    <NavLink to="/dialogs/3" >xcho</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/4" >smbo</NavLink>
               </div>
               <div className={s.dialog}>
                    <NavLink to="/dialogs/5" >bagrat</NavLink>
               </div>
           </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>how are you?</div>
                <div className={s.message}>bitch</div>
            </div>
        </div>
    );
}
export default Dialogs;
