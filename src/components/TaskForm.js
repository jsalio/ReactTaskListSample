import React, { Component } from 'react';

class TaskForm extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            responsible:'',
            description:'',
            priority:'low'
        };
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    handlerChange(e){
        const { value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handlerSubmit(e){
        e.preventDefault();
        this.props.onAddTask(this.state);
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handlerSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.handlerChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="resposible" className="form-control" placeholder="Responsible" onChange={this.handlerChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Description"  onChange={this.handlerChange}/>
                    </div>
                    <div className="form-group">
                       <select name="priority" className="form-group" onChange={this.handlerChange}>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                       </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        ) 
    }
}


export default TaskForm;