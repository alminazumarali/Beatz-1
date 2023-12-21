import {createSlice} from '@reduxjs/toolkit'
const initialState= {playlists:[]}
const PlaylistSlice=createSlice({
    name:'PlaylistSlice',
    initialState,
    reducers:{
        AddLibrary:(state,action)=>{
            state.playlists.push(action.payload)
        }
    }
})
export const {AddLibrary}=PlaylistSlice.actions;
export default PlaylistSlice.reducer