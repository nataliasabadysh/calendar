import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './transition.module.css';


export const Transition = ({ children }) => {
    const [isToggled, setToggle] = useState(false);
    const _toggle = () =>  setToggle((state) => !state );

        return (
            <div>
                <button onClick={_toggle}>Toggle</button>

                <CSSTransition
                    in={isToggled}
                    timeout={1500}
                    classNames={{
                        enter: styles.boxEnter,
                        enterActive: styles.boxEnterActive,
                        exit: styles.boxExit,
                        exitActive: styles.boxExitActive,
                    }}
                    unmountOnExit
                >
                {() => (
                    <div className={styles.box}>
                        { children }
                    </div>
                )} 
                </CSSTransition>
            </div>
        );
    }
