// Core
import React from 'react';
import { createPortal } from 'react-dom';

// Instruments
import Styles from './styles.module.css';

const portal = document.getElementById('spinner');

export const Spinner = (props) => {
    return createPortal(
        props.isSpinning ? <div className = { Styles.spinner } /> : null,
        portal,
    );
};
