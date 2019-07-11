import React, {Component} from 'react';
import './App.css';
import Data from "./data";
import Buttons from "./Components/Buttons"

export default class app extends Component {
  constructor() {
    super()
      this.state = {
        data: Data,
        index: 0

      }

    }
    previous() {
      if (this.state.index > 0) {
        this.setState({
          index: this.state.index - 1
        })}
      console.log(this.state.index)}
    next() {
      if (this.state.index < 24) {
      this.setState({
        index: this.state.index + 1
      })}
      console.log(this.state.index)
    }

    render() {
      console.log(this.state.data[this.state.index].name)
      let datamapped = this.state.data.map((e)=> {
        return (
          <div className="element"> 
            <h1> <b>Name:</b> {e.name.first} {e.name.last}</h1>
            <h1> City: {e.city} </h1>
            <h1>Country: {e.country}</h1>
            <h1>Employer: {e.employer}</h1>
            <h1>Title: {e.title}</h1>
            <h1>Favorite Movies: </h1>
            <h1>{e.favoriteMovies[0]}</h1>
            <h1>{e.favoriteMovies[1]}</h1>
            <h1>{e.favoriteMovies[2]}</h1>
          </div>
        )
      } )
      return (
        <div className="App">
          <header>
            <li className="home">Home</li>
          </header>
          <body>
            <main>
              <div className="content">
                {datamapped[this.state.index]}

              </div>
              <div className="location">
                <div className="index">{this.state.index + 1}/25</div>
              </div>
            </main>
              <div className="nav">
                <button className= "prev-next" onClick={()=> this.previous()}>Previous</button>
                <div className="buttons">
                  <button>edit</button>
                  <button>delete</button>
                  <button>new</button>
                </div>
                <button className= "prev-next"onClick={()=> this.next()}>Next</button>
                
              </div>
          </body>
    
        </div>
      );
    }
  
  } 
