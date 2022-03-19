import Track from '../Track/Track.js';
import { useEffect } from 'react';
import './Tracklist.css';

function Tracklist(props){
    
    return(
        <div className='Tracklist'>
            {props.tracks.map((track) => <Track track={track} key={track.id} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval}/>)}
        </div>
    );
}
export default Tracklist;