import {createSlice} from '@reduxjs/toolkit'
const initialState= {myPlaylists:[],mySongs:[]}
const myPlaylistSlice=createSlice({
    name:'myPlaylistSlice',
    initialState,
    reducers:{
        AddMyLibrary:(state,action)=>{
            // console.log("hgbjhb")
            state.myPlaylists.push(action.payload)
        },
        AddMySongs:(state,action)=>{
            state.mySongs.push(action.payload)
        }
    }
})
export const {AddMyLibrary,AddMySongs }=myPlaylistSlice.actions;
export default myPlaylistSlice.reducer