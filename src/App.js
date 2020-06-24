import React from "react";
import logo from "./todo-list.png"
import "./App.css"

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            newItem : "",
            list: []
        }
    }

    addItem(todoValue){
        if(todoValue !== ""){
            const newItem = {
                id: Date.now(),
                value: todoValue,
                isDone: false
            };
            const list = [...this.state.list]
            list.push(newItem);

            this.setState({
                list,
                newItem: ""
            })
        }
    } 

    render(){
        return(
            <div>
                <img src={logo} height="100" width="120" className="logo" />
                <h1 className="app-title">ToDo App</h1>
                <div className="container">
                    Add an Item... <br/>
                    <input type="text" className="input-text" placeholder="Write a ToDo"></input>
                    <button className="add-btn">ADD TODO</button>
                    <div className="list">
                        <ul>
                            <li>
                                <input type="checkbox" />Play chess
                                <button className="btn">DELETE</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;