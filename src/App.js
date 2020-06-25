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

    deleteItem(id){
        const list = [...this.state.list];
        const updatedlist = list.filter(item => item.id !== id);
        this.setState({list: updatedlist})
    }

    updateItem(input){
        this.setState({newItem:input})
    }

    render(){
        return(
            <div>
                <img src={logo} height="100" width="120" className="logo" />
                <h1 className="app-title">ToDo App</h1>
                <div className="container">
                    Add an Item... <br/>
                    <input 
                    type="text" 
                    className="input-text" 
                    placeholder="Write a ToDo"
                    required
                    value={this.state.newItem}
                    onChange={e => this.updateItem(e.target.value)}
                    />
                    <button 
                    className="add-btn" 
                    onClick={() => this.addItem(this.state.newItem)}
                    disabled={!this.state.newItem.length}
                    >ADD TODO</button>
                    <div className="list">
                        <ul>
                            {this.state.list.map(item => {
                                return(
                                    <li key={item.id}>
                                        <input 
                                        type="checkbox" 
                                        name="idDone"
                                        checked={item.isDone}
                                        onChange={() => {}}
                                        />
                                        {item.value}
                                        <button
                                        className="btn"
                                        onClick={() => {this.deleteItem(item.id)}}
                                        >DELETE</button>
                                    </li>
                                );
                            })}
                            <li>
                                <input type="checkbox" />Play chess
                                <button className="btn" >DELETE</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;