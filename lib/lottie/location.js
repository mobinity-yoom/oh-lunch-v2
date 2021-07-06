import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Location from './location.json';

const lottieOptions = {
    animationData: Location,   
    loop: true,        
    autoplay: true
    // rendererSettings: {
    //   className: 'add-class', // svg에 적용
    //   preserveAspectRatio: 'xMidYMid slice'
    // }
};

export default function LocationLottie () {
    return(

            <Lottie
                options={lottieOptions}
                isClickToPauseDisabled={false}
                style={{width: '35px', height: '35px'}} 
            >
            </Lottie>

    );
}