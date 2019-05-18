import React from "react";
import {Text, TouchableOpacity} from "react-native";

const Button = function ({handler, children}) {

    const {buttonStyle, textStyle} = style;

    return <TouchableOpacity
        onPress={handler}
        style={buttonStyle}>
        <Text style={textStyle}> {children} </Text>
    </TouchableOpacity>

};

export default Button;

const style = {

    textStyle: {
        fontWeight: "600",
        color: "#007aff",
        fontSize: 16,
        alignSelf: "center",
        paddingTop: 10,
        paddingBottom: 10
    },

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