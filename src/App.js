import React from "react";
import logo from "./todo-list.png"
import "./App.css"

class App extends React.Component {
    render(){
        return(
            <div>
                <img src={logo} height="100" width="120" className="logo" />
                <h1 className="app-title">ToDo App</h1>
                <div className="container">
                    Add an Item... <br/>
                    <input type="text" className="input-text" placeholder="Write a ToDo"></input>
                    <button className="app-btn">Add ToDo</button>
                </div>
            </div>
        );
    }
}

export default App;