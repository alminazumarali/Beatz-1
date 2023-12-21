import React, { useEffect, useState } from 'react'
import './LibraryOpen.scss'
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { FaPlayCircle,FaPauseCircle } from "react-icons/fa";
import axios from 'axios';
import PlaylistCards from '../../Common/Cards/playlistCard/playlistCard'

function LibraryOpen({playlist}) {
    console.log(playlist)
    const [like,setLike]=useState(false)
    const [play,setPlay]=useState(false)
    const [playlistSongs,setPlaylistSongs]=useState(null)
    const handleLike=()=>{
        setLike(!like)
    }
    const handlePlay=()=>{
        setPlay(!play)
    }
    useEffect(()=>{
        console.log("inside use effect")
            const headers = {
            'Content-Type': 'application/json',
            };
        const fetchSongFiles = async () => {
            try {
            console.log("inside try")
            const response1 = await axios.get(`http://192.168.1.87:8081/library/getLibrary/${playlist.libId}`,headers);
            console.log("before dispatch")
            setPlaylistSongs(response1.data)
            console.log(response1.data)
            } catch (error) {
            console.error('Error fetching song files:', error);
            }
        };
        fetchSongFiles();
}, []);

    return (
        <div className='LibraryOpenContainer'>
            <div className='lib-profile'>
                <div><img className='libOpenImage' src={playlist.libImage} alt='image'/></div>
                <div className='playlist-title'>{playlist.libTitle}</div>
                <div className='playLike'>
                    {play?<FaPauseCircle onClick={handlePlay}/>:<FaPlayCircle onClick={handlePlay}/>}
                    {like?<IoHeartSharp onClick={handleLike}/>:<IoHeartOutline onClick={handleLike}/>}
                </div>
            </div><hr/>
            <div className='lib-songs'>
            {playlistSongs && playlistSongs.map((playlistSong) => (
            <PlaylistCards playlistSong={playlistSong}/>
            ))}
            </div>
        </div>
    )
}

export default LibraryOpen