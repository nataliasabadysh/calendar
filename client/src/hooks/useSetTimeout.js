

import React, { useEffect, useRef, useState } from 'react';

export const useSetTimeout = () => {

    const ClickJSX = ()=>   <>

    < button onClick={ e=> {
        console.log('e.target',e.target);
        const t = e.target;
        setTimeout(()=> {
            console.log('+', t)
        }, 500)
    }}> Click</ button>
    </>

  return { ClickJSX }
};
