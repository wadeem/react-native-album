import React from "react";
import {Text, View, Image} from "react-native";
import Card from "./card.js";
import CardSection from "./card-section.js";
import Button from "./button.js";

const AlbumDetail = function ({album,clickHandler}) {

    const {headerContentStyle, imageStyle, titleStyle, albumArtStyle} = styles;
    const {title, artist, thumbnail_image, image} = album;

    return <Card>
        <CardSection>
            <View>
                <Image source={{uri: thumbnail_image}} style={imageStyle}/>
            </View>
            <View style={headerContentStyle}>
                <Text style={titleStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>
        <CardSection>
            <Image source={{uri: image}} style={albumArtStyle}/>
        </CardSection>
        <CardSection>
            <Button text={"Click me!"} handler={() => clickHandler(title)}/>
        </CardSection>
    </Card>
};

const styles = {

    headerContentStyle: {
        justifyContent: "space-around",
        flexDirection: "column"
    },

    titleStyle: {
        fontSize: 17
    },

    imageStyle: {
        height: 40,
        width: 40,
        marginRight: 10,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center"
    },

    albumArtStyle: {
        height: 300,
        width: null,
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    }

};

export default AlbumDetail;