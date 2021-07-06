import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Click from './click.json';

const lottieOptions = {
    animationData: Click,   
    loop: true,        
    autoplay: true
    // rendererSettings: {
    //   className: 'add-class', // svg에 적용
    //   preserveAspectRatio: 'xMidYMid slice'
    // }
};

export default function ClickLottie () {

    const [isPaused, SetIsPaused] = useState(false);
    const onPause = () => {
        SetIsPaused(!isPaused);
    };

    return(
        <button onClick={onPause}>
                
            <Lottie
                options={lottieOptions}
                isStopped={isPaused}
                isClickToPauseDisabled={false}
                style={{width: '30px', height: '30px'}} 
            >
                
            </Lottie>
            </button>
    );
}