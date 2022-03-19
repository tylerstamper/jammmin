import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

function Playlist(props){


    const handleNameChange = (e) => {
        props.onNameChange(e.target.value);
    }

    return(
        <div className='Playlist'>
            <input value={props.playlistName} onChange={handleNameChange}/>
            <Tracklist
                tracks={props.tracks}
                onRemove={props.onRemove}
                isRemoval={true}/>
            <button className='Playlist-save' onClick={props.onSave}>Save to Spotify</button>
        </div>
    );
}
export default Playlist;