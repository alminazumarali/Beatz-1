import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddMyLibrary, AddMySongs } from '../../../slices/MyPlaylistSlice'
import { initialState, stateReducer } from '../../../slices/StateManage'
import LibCards from '../../Common/Cards/LibCards/LibCards'
import './Library.scss'

function Library({handleLibOpen}) {
  const playlists= useSelector((state)=>state.playlist.playlists)
  const user = useSelector((state) => state.auth.user);
  const [libOpen,setLibOpen]=useState(false)
  const [myPlaylists,setMyPlaylists]=useState([])
  const [state, dispatch] = useReducer(stateReducer, initialState);
  useEffect(() => {
    if(state.isStateTrue){
      setLibOpen(true)
      console.log("inside use effect")
      const headers = {
        'Content-Type': 'application/json',
      };
      const fetchPlaylistFiles = async () => {
        try {
          console.log("inside try lib open")
          const MyLibrary = await axios.get(`http://192.168.1.87:8081/library/allLibrary/${user.nanoId}`,headers);
          setMyPlaylists(MyLibrary.data)
          console.log("before dispatch")
          dispatch(AddMyLibrary(MyLibrary.data));
        } catch (error) {
          console.error('Error fetching song files:', error);
        }
      };
      fetchPlaylistFiles();
  }
  }, [dispatch]);
  // useEffect(() => {
  //   console.log("inside use effect")
  //   const headers = {
  //     'Content-Type': 'application/json',
  //   };
  //   const fetchPlaylistFiles = async () => {
  //     try {
  //       console.log("inside trydfcdc")
  //       const mySongs = await axios.get(`http://192.168.1.87:8081/songList/mySongs/${user.nanoId}`,headers);
  //       console.log("before dispatch")
  //       dispatch(AddMySongs(mySongs.data));
  //     } catch (error) {
  //       console.error('Error fetching song files:', error);
  //     }
  //   };
  //   fetchPlaylistFiles();
  // }, [dispatch]);
  return (
    <div className='lib-container'>
      <div className='lib-title'>
        {libOpen?'My Library':'Library'}
      </div>
      <div className='lib-content'>
        {libOpen?myPlaylists[0].map((myLibrary) => (
              <LibCards key={myLibrary.id} playlist={myLibrary} handleLibOpen={handleLibOpen} />
            )):playlists[0].map((playlist) => (
              <LibCards key={playlist.id} playlist={playlist} handleLibOpen={handleLibOpen} />
            ))}
      </div>
    </div>
  )
}

export default Library