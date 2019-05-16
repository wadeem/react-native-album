import React from "react";
import {View,Text} from "react-native";
import Header from "./src/components/header.js";
import AlbumList from "./src/components/album-list.js";

export default class App extends React.Component {

    render() {
        return <View>
            <Header headerText={"Hello World!"}/>
            <AlbumList/>
        </View>
    };
}