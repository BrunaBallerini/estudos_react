import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handlePClique = this.handlePClique.bind(this);
  //   this.state = {
  //     name: "Bruna ",
  //     counter: 0
  //   };
  // }

  state = {
    name: "Bruna ",
    counter: 0
  };

  handlePClique = () => {
    const { name } = this.state;
    console.log(`<p> clicado ${name}`);
    this.setState({ name: 'Ballerini ' });
  }

  handleAClique = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClique}>
            {name} {counter}
          </p>
          <a onClick={this.handleAClique}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
