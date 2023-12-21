import React,{useEffect,useState} from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { IoIosClose } from "react-icons/io";
import {useSelector} from 'react-redux'
import { storage } from '../../Firebase';
import {ref,uploadBytes,getDownloadURL,listAll} from 'firebase/storage'
import {v4} from 'uuid'

function Upload({uploadData,handleClosePopup}) {
    const user = useSelector((state) => state.auth.user);
    const [SongData,setSongData]=useState({nanoId:user.nanoId,songTitle:'',artist:'',songImageUrl:'',songUrl:''})
    const [SongImage,setSongImage]=useState(null)
    const [song,setSong]=useState(null)
    const handleSongChange=(e)=>{
    const {name,value}=e.target;
    setSongData({...SongData,[name]:value})
    }
    const handleUpload=async(e)=>{
        e.preventDefault();
        console.log(SongData);
        if(SongImage)
        {
            const songImageRef = ref(storage, `images/${SongImage.name + v4()}`);
            console.log(songImageRef);
            try {
                await uploadBytes(songImageRef, SongImage);
                alert("File uploaded");
                const url = await getDownloadURL(songImageRef);
                console.log(url);
                await setSongData((prevData) => ({
                    ...prevData,
                    songImageUrl: url
                }));
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }
        if(song){
        const songRef = ref(storage, `songs/${song.name + v4()}`);
        console.log(songRef);
        try{
            await uploadBytes(songRef,song);
            const songUrl=await getDownloadURL(songRef);
            await setSongData((prevData) => ({
                ...prevData,
                songUrl: songUrl
            }));
            } catch (error) {
                console.error("Error uploading file:", error);
            }}
            else{
                alert("please upload a song");
            }
        // window.close();
    }
    useEffect(() => {
        console.log(SongData);
        if (SongData.songUrl) {
            uploadData(SongData);
        }
    }, [SongData.songUrl]);
    const handleClose = () => {
        handleClosePopup()
    };
    
    return (
    <div className='upload-container'>
        <div className='upload-cont'>
            <div className='close-popup'>
                <button className='close' onClick={handleClose}><IoIosClose /></button>
            </div>
            <div className='title-upload'>
                    Add Song
                </div>
            <form className='upload-content'>
                <input className='inputbox' type='text' name='songTitle' value={SongData.songTitle} onChange={handleSongChange} placeholder='Song Name'/>
                <input className='inputbox' type='text' name='artist' value={SongData.artist} onChange={handleSongChange} placeholder='Artists'/>
                <div className='file-upload'>
                    <label>Song Profile</label>
                    <input className='input-box' type='file' name='image' onChange={(event)=>{setSongImage(event.target.files[0])}} placeholder='Song Profile'/>
                </div>
                <div className='file-upload'>
                    <label>Song</label>
                    <input className='input-box' type='file' name='song' onChange={(event)=>{setSong(event.target.files[0])}} placeholder='Song'/>
                </div>
                <div>
                    <button className='upload-btn' onClick={handleUpload}>Upload</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default Upload