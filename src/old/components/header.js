import React, {Component} from "react";
import {Text, View} from "react-native";

const Header = function ({headerText}) {

    const {textStyle, viewStyle} = styles;

    return <View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text>
    </View>
};

const styles = {
    textStyle: {fontSize: 20},
    viewStyle: {
        height: 60,
        backgroundColor: "#D0D0D0",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.9,
        position: "relative",
        elevation: 2
    }
};

export default Header;