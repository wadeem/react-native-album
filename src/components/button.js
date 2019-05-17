import React from "react";
import {Text, TouchableOpacity} from "react-native";

const Button = function ({text, handler}) {

    const {buttonStyle} = style;

    return <TouchableOpacity onPress={handler} style={buttonStyle}>
        <Text> {text} </Text>
    </TouchableOpacity>

};

export default Button;

const style = {
    buttonStyle: {
        flex: 1,
        borderColor: "#007aff",
        borderRadius: 5,
        borderWidth: 1,
        alignSelf: "stretch",
        backgroundColor: "#fff",
        marginLeft: 5,
        marginRight: 5
    }
};