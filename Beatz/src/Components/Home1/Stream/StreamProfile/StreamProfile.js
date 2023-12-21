import React from 'react'
import './StreamProfile.scss'

function StreamProfile({Songs,Song}) {
    console.log(Song)
    console.log(Song.songImageUrl)
    return (
        <div className='StreamProfileContainer'>
            <img className='StreamProfileImage' src={Song.songImageUrl} alt='image'/>
            <div className='StreamProfileDetails'>
            <p>{Song.songTitle}</p>
            <p>{Song.artist}</p>
            </div>
        </div>
    )
}

export default StreamProfile