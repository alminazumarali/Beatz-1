import React from 'react'
import './LibCards.scss'

function LibCards({playlist,handleLibOpen}) {
    return (
        <div className='libCard-container' onClick={()=>handleLibOpen(playlist)}>
            <img className="libImage" src={playlist.libImage} alt="image"/>
            <p className='libName'>{playlist.libTitle}</p>
        </div>
    )
}

export default LibCards