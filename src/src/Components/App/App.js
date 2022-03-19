import React, { useEffect, useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Playlists from '../Playlists/Playlists';
import Spotify from '../../Utils/Spotify';

import './App.css';

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState('New Playlist Name');
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        getUserPlaylists();
    }, [])


    const getUserPlaylists = () => {
        Spotify.getUserPlaylists().then(function(playlists){
            setPlaylists(playlists);
        })
    }

    const addTrack = (track) => {
        let tracks = playlistTracks;
        if(tracks.find((savedTrack) => savedTrack.id === track.id)){
            return;
        }
        setPlaylistTracks([...playlistTracks, track]);
    }

    const removeTrack = (track) => {
        let tracks = playlistTracks.filter((currentTrack) => track.id !== currentTrack.id);
        setPlaylistTracks(tracks);
    }

    const updatePlaylistName = (name) => {
        setPlaylistName(name);
    }

    const savePlaylist = () => {
        let trackUris = playlistTracks.map((track) => track.uri);
        if(trackUris && trackUris.length){
            Spotify.savePlayList(playlistName, trackUris)
            .then(function(){
                getUserPlaylists();
                setPlaylistName('New Playlist Name');
                setPlaylistTracks([]);
            });
        } else {
            alert('Your Playlist is empty! Add some tracks');
        }
    }

    const search = (term) => {
        Spotify.search(term)
        .then(function(results){
            setSearchResults(results);
        });
    }

    return(
        <div>
            <h1>Ja<span className="highlight">m<span className='lg'>m</span>m</span>in</h1>
            <div className='App'>
                <SearchBar onSearch={search}/>
                <div className='App-playlist'>
                    <div className='flex-group'>
                        <SearchResults
                            searchResults={searchResults}
                            onSearch={search}
                            onAdd={addTrack}
                        />
                        <Playlists
                            playlists={playlists}
                        />
                    </div>
                    <Playlist
                        playlistName={playlistName}
                        tracks={playlistTracks}
                        onRemove={removeTrack}
                        onNameChange={updatePlaylistName}
                        onSave={savePlaylist}
                    />
                </div>
            </div>
        </div>
    );
}
export default App;