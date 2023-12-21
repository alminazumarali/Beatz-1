import { configureStore } from '@reduxjs/toolkit';
import myPlaylistSlice from '../slices/MyPlaylistSlice';
import PlaylistSlice from '../slices/PlaylistSlice';
import SongSlice from '../slices/SongSlice';
import UserSlice from '../slices/UserSlice';
import playerSlice from '../slices/playerSlice';
import userAuth from '../slices/userAuth';

export const store=configureStore({
    reducer:{
        auth:UserSlice,
        authAction:userAuth,
        song:SongSlice,
        player:playerSlice,
        playlist:PlaylistSlice,
        myPlaylist:myPlaylistSlice,
    },
})