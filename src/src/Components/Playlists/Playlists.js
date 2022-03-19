import './Playlists.css';

function Playlists(props){
    console.log(props.playlists);
    return(
        <div className="Playlists">
            <h2>Your Playlists</h2>
            {props.playlists.map((playlistItem) => {
                return(
                <div key={playlistItem.playlistId} className="Playlist-information">
                    <h3>{playlistItem.playlistName}</h3>
                    <img src={playlistItem.playlistImages[0].url} alt='playlist cover image'/>
                </div>
                );
            })}
        </div>
    );
}

export default Playlists;