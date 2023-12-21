import React from 'react'
import './playlistCard.scss'

function playlistCard({playlistSong}) {
    console.log(playlistSong)
    return (
        <div className='playlistCardContainer'>
            <img className='playlistSongImage' src={playlistSong.songImageUrl} alt='image'/>
            <div className='playlistSongTitle'>
                {playlistSong.songTitle}
            </div>
        </div>
    )
}

export default playlistCard