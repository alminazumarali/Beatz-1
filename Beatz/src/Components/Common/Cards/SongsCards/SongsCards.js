import React,{useState,useEffect} from 'react'
import { setActiveSong,playPause } from '../../../../slices/playerSlice'
import PlayPause from '../../PlayPause/playPause'
import Image from '../../../../Images/profilepic2.jpg'
import './SongsCards.scss'
import Audio from '../../../../Images/heeriye.mp3'

import {useDispatch} from 'react-redux'

function SongsCards({ song, Songs, i,handleSongPlaying }) {
    console.log(song)
    const dispatch=useDispatch()
    const [songImageSrc, setSongImageSrc] = useState(null);
    const handlePauseClick = () => {
      dispatch(playPause(false));
    };
  
    const handlePlayClick = () => {
      // dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };
  //   const [playSong,setPlaySong]=useState(false);
  //   const [isPlaying, setIsPlaying] = useState(false);
  //   const handleButtonClick = () => {
  //   const audio = document.getElementById('audio');
  //   if (!audio) {
  //     return;
  //   }

  //   if (isPlaying) {
  //     audio.pause();
  //   } else {
  //     audio.play();
  //   }

  //   setIsPlaying(!isPlaying);
  // };
    // useEffect(() => {
    //     if (song && song.songImageData && song.songImageType) {
    //       const base64Image = `data:${song.songImageType};base64,${song.finalSongImage}`;
    //       console.log(base64Image)
    //       setSongImageSrc(base64Image);
    //       console.log(songImageSrc)
    //     }
    //   }, [song]);
      const StreamSong=(nanoId)=>{
        console.log("play song")
        // onSongClick({nanoId})
      }
      const SongPlaying=()=>{
        handleSongPlaying(song)
      }
  return (
    <button className='songCard-cont' onClick={SongPlaying}>
        {/* {playSong? <Stream songId={song.nanoSongId}/>:null} */}
        {/* <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          /> */}
        <div className='song-profiles'>
            {song.songImageUrl && (
            <img className='song-image' src={song.songImageUrl} alt="Song Image" />)}
            {/* <img  src={Image} alt='image'/> */}
        </div>
        <div className='song-content'>
            <div className='song-name'>
                {song.songTitle}
            </div>
            <div className='song-artist'>
                {song.artist}
            </div>
            {/* <div>
            <button onClick={handleButtonClick}>
        {isPlaying ? 'Pause' : 'Play'} Sound
      </button>
              <audio id='audio' src={Audio}/>
            </div> */}
        </div>
    </button>

  )
}

export default SongsCards