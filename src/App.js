import React,{Component} from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Employee from './Employee';

/*

 componentDidMount() {
 this.refreshCourses();
 }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to REACT</p><p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*//*

class App extends React.Component{

    constructor(){
        super();
        this.state={
            data:[
                {
                    id:1,
                    name:"Rishi",
                    age:"32"
                },
                {
                    id:2,
                    name:"Sunaina",
                    age:"32"
                },
                {
                    id:3,
                    name:"Noni",
                    age:"1"
                }
            ]
        }

    }
    render(){
        return(
            <div>
                <h1>Header
                    </h1>
                <table>
                    <tbody>
            {this.state.data.map((person,i)=><Content key={i} data={person}/>)}
                        </tbody></table>
            </div>
            );
    }
}

class Content extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
            );
    }
}*/

class App extends Component {
    render() {
        return (
            <div className="container">
                <Employee />
            </div>
            );
    }
}

export default App;
