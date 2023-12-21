import { MdSkipPrevious,MdSkipNext } from "react-icons/md";
import { FaPlayCircle,FaPauseCircle } from "react-icons/fa";
import { TiArrowShuffle, TiArrowLoop  } from "react-icons/ti";
import React,{useState} from 'react'
import './StreamPlayer.scss'

function StreamPlayer({Songs,Song,audioPlay}) {
    console.log(Song)
    const [isSongPlay,setSongPlay]=useState(false);
    // const [audioPlay,setAudioPlay]=useState(true)
    // const audio = document.getElementById('audio');
    // if(audioPlay){
    //     audio.play();
    // }
    const handlePlayPause=()=>{
        console.log("Audio playing")
        const audio = document.getElementById('audio');
        if (!audio) {
        return;
        }

        if (isSongPlay) {
        audio.pause();
        } else {
        audio.play();
        }
        setSongPlay(!isSongPlay)

    }
    return (
        <div className="StreamPlayerContainer">
            <TiArrowShuffle/>
            <MdSkipPrevious/>
            {isSongPlay?<FaPauseCircle onClick={handlePlayPause}/>:
            <FaPlayCircle onClick={handlePlayPause}/>}
            <MdSkipNext/>
            <TiArrowLoop/>
            <audio id='audio' src={Song.songUrl}/>
        </div>
    )
}

export default StreamPlayer