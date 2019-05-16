import React from "react";
import {View} from "react-native";

const CardSection = function (props) {

    const {containerStyle} = styles;

    return <View style={containerStyle}>
        {props.children}
    </View>
};

const styles = {

    containerStyle: {
        borderWidthBottom:2,
        justifyContent:"flex-start",
        backgroundColor:"#fff",
        flexDirection:"row",
        padding:5,
        position:"relative",
        borderColor:"#888"
    }

};

export default CardSection;