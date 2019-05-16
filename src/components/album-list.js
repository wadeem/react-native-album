import React from "react";
import {Text, ScrollView, Image} from "react-native";
import AlbumData from "./album-data.js";
import AlbumDetail from "./album-detail.js";
import axios from "axios";


class AlbumList extends React.Component {

    state = {
        albums: []
    };

    renderAlbums() {
        return this.state.albums.map((album) => {
            return <AlbumDetail album={album} key={album.url}/>
        });
    }

    componentWillMount() {

        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                console.log(response.data);
                this.setState({
                    albums: response.data
                })
            });
        console.log("component AlbumData did mount");
    }

    render() {

        console.log(this.state.albums);

        return <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    };
}

export default AlbumList;