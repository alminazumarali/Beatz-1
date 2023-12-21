import React,{useState,useEffect} from 'react'
import'./Stream.scss';
import { setActiveSong } from '../../../slices/playerSlice';
import StreamPlayer from './StreamPlayer/StreamPlayer'
import StreamVolume from './StreamVolume/StreamVolume'
import StreamProfile from './StreamProfile/StreamProfile'

function Stream({Songs,playSong}) {
    console.log("Stream open")
    console.log(playSong)
  return (
    <div className='stream-home1'>
      <StreamProfile Songs={Songs} Song={playSong}/>
      <StreamPlayer Songs={Songs} Song={playSong}/>
      <StreamVolume Songs={Songs} Song={playSong}/>
    </div>
  )
}

export default Stream