import React from 'react'
import Track from './Track'
import Controls from './Controls'
import Seekbar from './Seekbar'
import Player from './Player'
import Volumebar from './Volumebar';

import { useState, useEffect } from 'react';

const MusicPlayer = () => {
  return (
    <div className='bg-white fixed bottom-0 w-full grid md:grid-cols-8 grid-cols-6'>
        <Track/>
        <div className='w-full md:col-start-3 col-span-4'>
        <Controls/>
        <Seekbar/>
        <Player/>
        </div>
        <Volumebar/>
    </div>
  )
}

export default MusicPlayer