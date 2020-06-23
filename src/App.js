import React from "react";
import logo from "./todo-list.png"
import "./App.css"

class App extends React.Component {
    render(){
        return(
            <div>
                <img src={logo} />
            </div>
        );
    }
}

export default App;