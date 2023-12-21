import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import SongsCards from '../../Common/Cards/SongsCards/SongsCards'
import Stream from '../Stream/Stream'
import './Songs.scss'

function Songs() {
  const songs= useSelector((state)=>state.song.songs)
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [playSong,setPlaySong]=useState("")
  const [songId,setSongId]=useState(null)
  // const 
  const handlePlaySong=(nanoSongId)=>{
    console.log("handling play song")
    setPlaySong(true)
    setSongId(nanoSongId)
  }
  const [isSongPlaying,setSongPlaying]=useState(false)
  const handleSongPlaying=(song)=>{
    setPlaySong(song)
    console.log(playSong)
    setSongPlaying(true)
  }
  return (
    <div className='songs-container'>
      <div className='title-song'>
        Songs
      </div>
      <div className='SongsContent'>
      {songs[0] ? (
        songs[0].map((song,index) => (
          <SongsCards i={index} song={song} Songs={songs} handleSongPlaying={handleSongPlaying}/>
        ))
      ) : null}
      </div>
      <div className='stream-songs'>
              {isSongPlaying&&<Stream playSong={playSong} Songs={Songs}/>}
      </div>
      {/* <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongsCards
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div> */}
    </div>
  )
}

export default Songs