import React from "react";
import {Text, View} from "react-native";

const Header = function({headerText}) {

    const {textStyle,viewStyle}= styles;

    return <View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text>
    </View>
};

const styles = {
    textStyle:{
        fontSize:22
    },
    viewStyle: {
        height:60,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#b0b0b0"
    }
};

export default Header;