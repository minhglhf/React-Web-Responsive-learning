import React from 'react'
import HeroSection from '../../HeroSection';
import {homeObjOne} from './data';

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
        </>
    )
}

export default Home
