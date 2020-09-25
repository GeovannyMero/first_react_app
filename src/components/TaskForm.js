import React, {Component} from 'react';

export default class TaskForm extends Component{

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
        console.log(this.state);

    }

    onChange = e => {
        //console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
       // this.props.addTask('da','das');
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    name="title" 
                    placeholder="Escribe una tarea" 
                    onChange={this.onChange} 
                    value={this.state.title}
                />
                <br/>
                <br />
                <textarea 
                    placeholder="Escribe una descripcion"
                    name='description' 
                    onChange={this.onChange} 
                    value={this.state.description}>
                </textarea>
                <input type="submit"/>
            </form>
        )
    }
}

