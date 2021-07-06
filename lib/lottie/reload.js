import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Reload from './reload.json';

const lottieOptions = {
    animationData: Reload,   
    loop: true,        
    autoplay: true
    // rendererSettings: {
    //   className: 'add-class', // svg에 적용
    //   preserveAspectRatio: 'xMidYMid slice'
    // }
};

export default function ReloadLottie () {

    const [isPaused, SetIsPaused] = useState(false);
    const onPause = () => {
        SetIsPaused(!isPaused);
    };

    return(
            <Lottie
                options={lottieOptions}
                isPaused={isPaused}
                isClickToPauseDisabled={false}
                style={{width: '30px', height: '30px'}} 
            >
            </Lottie>
    );
}