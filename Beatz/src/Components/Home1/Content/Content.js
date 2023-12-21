import React,{useState} from 'react'
import './Content.scss'
import Library from '../Library/Library'
import Songs from '../Songs/Songs'
import Upload from '../Upload/Upload'
import LibOpen from '../LibraryOpen/LibraryOpen'

function Content() {
  const [libOpen,setLibOpen]=useState(false);
  const [playlistOpen,setPlaylistOpen]=useState(null)
  const handleLibOpen=(playlist)=>{
      setPlaylistOpen(playlist)
      setLibOpen(!libOpen)
  }

  return (
    <div className='content'>
      <Library handleLibOpen={handleLibOpen}/>
      {libOpen?<LibOpen playlist={playlistOpen}/>:<Songs/>}
    </div>
  )
}

export default Content