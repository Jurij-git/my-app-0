import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div>
            <div className = {s.dialogs}>
                <div className={s.dialogItems}>
                    <div className={s.dialog}>
                        Christine
                    </div>
                    <div className={s.dialog}>
                        Pablo
                    </div>
                    <div className={s.dialog}>
                        Alexia
                    </div>
                    <div className={s.dialog}>
                        Alex
                    </div>
                    <div className={s.dialog}>
                        John
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>Hello</div>
                    <div className={s.message}>Yo</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;