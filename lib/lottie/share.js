import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Share from './share.json';

const lottieOptions = {
    animationData: Share,   
    loop: true,        
    autoplay: true
    // rendererSettings: {
    //   className: 'add-class', // svg에 적용
    //   preserveAspectRatio: 'xMidYMid slice'
    // }
};

export default function ShareLottie () {
    return(

            <Lottie
                options={lottieOptions}
                isClickToPauseDisabled={false}
                style={{width: '30px', height: '30px'}} 
            >
            </Lottie>

    );
}