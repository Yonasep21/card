import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state ={
        habits:[
            {name:'Raading', conut:0},
            {name:'Running', conut:0},
            {name:'Coding', conut:0},
        ],
    };

    render() {
        return (
            <ul>
               {this.state.habits.map((habit) => (
                  <Habit habit={habit}/>
                  ))}
            </ul>
        )
    }
}

export default Habits;