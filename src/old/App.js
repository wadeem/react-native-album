import React from "react";
import {Text} from "react-native";
import Header from "./components/header.js";

const App = () => {
    return <React.Fragment>
        <Header headerText="Album!"/>
        <Text>Hello this is app!</Text>
    </React.Fragment>
};

export default App;