import React, {Component} from 'react';

import './Task.css';
class Task extends Component{

StyleComplete(){
    
}

    render()
    {
        return  <div><p>
            {this.props.task.title} - {this.props.task.done}
                    <input type="checkbox"/>
                    <button style={BtnDelete}>X</button>
                    </p>
        </div>
            
    }
}

const BtnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}
export default Task;