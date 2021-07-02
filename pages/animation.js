import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import styles from '../styles/Home.module.css'

export default function AnimationButton() {

    const [state, setState] = useState(true);
    return (
        <SwitchTransition>
          <CSSTransition
            key={state? "Hello, world!" : "Goodbye, world!"}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div className={styles.button_container}>
              <button onClick={() => setState(state => !state)}>
                {state ? "Hello, world!" : "Goodbye, world!"}
              </button>
            </div>
          </CSSTransition>
        </SwitchTransition>
    );
}

// if (typeof window != "undefined") {
    ReactDOM.render(
        <AnimationButton />,
        document.getElementById('root')
    );
// }
