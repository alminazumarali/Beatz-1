import axios from 'axios';
import React, { useEffect, useState, useReducer } from 'react';
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../Images/Logo/Logo-beatz.png';
import Profile from '../../../Images/profilepic2.jpg';
import Upload from '../Upload/Upload';
import './title.scss';
import { initialState,stateReducer,actionTypes } from '../../../slices/StateManage';

function Title() {
    const navigate=useNavigate();
    const user = useSelector((state) => state.auth.user);
    const [isDropDownVisible,setDropDownVisible]=useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [libOpen,setLibOpen]=useState(false);
    const [state, dispatch] = useReducer(stateReducer, initialState);
    const DropDown=()=>{
        setDropDownVisible(!isDropDownVisible);
    }
    const handleDropDown=(e)=>{
        setDropDownVisible(false);
        if(e.target.value=='edit1')
        {
            navigate("edit");
        }
    }
    
    const uploadData=async(SongData)=>{
        console.log(SongData)
        await SongData
    console.log(SongData)
    const SongConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        console.log("before form data");
        const response = await axios.post('http://192.168.1.87:8081/songList/addSongDetails', SongData, SongConfig);
        if (response.status === 200) {
            alert("song uploaded")
            setPopupOpen(false)
            console.log("SongData sent");
        }else {
            alert("some error happened...Try again")
            setPopupOpen(false)
            console.log("data not sent");
        }
    } catch (error) {
        console.log(error);
    }
    }
    const handleClosePopup=()=>{
        setPopupOpen(false)
    }
    const handleOpenPopup=()=>{
        console.log("open")
        setPopupOpen(true)
    }
    const handleOpenLibrary=()=>{
        setLibOpen(!libOpen)
        const openLib=!libOpen
        console.log(openLib)
        if(openLib){
            console.log(openLib)
            dispatch({ type: actionTypes.SET_TRUE });
        }
        else{
            // console.log(libOpen)
            dispatch({ type: actionTypes.SET_FALSE });
        }
    }
    return (
    <div className='Title-Home1'>
        <div className='logo-home1'>
            <img className='Logo-image' src={Logo} alt='image'/>
        </div>
        <div className='search-cont'>
            <div className='search-home1' onClick="handleChange">
                <IoIosSearch/>
                <p>Search here</p>
            </div>
        </div>
        <div className='lib-upload-home1'>
            <button className='My-lib button1' onClick={()=>handleOpenLibrary()}>{libOpen?'Home':'My Library'}</button>
            <button className='Upload button1' onClick={handleOpenPopup}>Upload</button>
                {isPopupOpen&&<Upload uploadData={uploadData} handleClosePopup={handleClosePopup}/>}
        </div>
        <div className='profile-home1'>
            <button onClick={DropDown} className='home1-dropdown'>
            {user.imageUrl ? (
            <img className='profile-pic' src={user.imageUrl} alt="Profile" />
            ) : (
            <img className='profile-pic' src={Profile} alt="Default Profile" />
            )}
                <RiArrowDropDownLine/>
            </button>
            {isDropDownVisible && (
                    <div className='dropdown1'>
                        <ul className='dropdown'>
                            <button className='edit-btn' value="edit1" onClick={handleDropDown}>Edit</button>
                            <button className='edit-btn' value="create1">Sign Out</button>
                        </ul>
                    </div>
                )}
        </div>
    </div>
)
}

export default Title