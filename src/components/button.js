import React from "react";
import {Text, TouchableOpacity} from "react-native";

const Button = function ({text}) {

    return <TouchableOpacity onPress={()=>console.log("I was clicked")}>
        <Text> {text} </Text>
    </TouchableOpacity>

};

export default Button;

const style = {
    buttonStyle: {
        // flex
    }
};