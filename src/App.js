import React, { Component } from "react";
import Profileimg from "./Profileimg.png";

class App extends Component {
  state = {
    Person: {
      fullName: "Mahmoud Magdy",
      bio: "qweeqw",
      imgSrc: { Profileimg },
      profession: "Web Developer",
    },
    show: false,
    count: 0,
  };

  handleShowPerson = () => {
    if (this.state.show === false) {
      setInterval(() => this.counter(), 1000);
      this.setState({
        ...this.state,
        show: !this.state.show,
        count: 0,
      });
    } else {
      this.setState({
        show: !this.state.show,
        count: 0,
      });
      clearInterval(this.counter);
    }
  };
  counter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        {this.state.show && (
          <>
            <img src={Profileimg} style={{ height: "100px" }} alt="eeee" />
            <p>{this.state.Person.fullName}</p>
            <p>{this.state.Person.bio}</p>
            <p>{this.state.Person.profession}</p>
          </>
        )}
        <div>{this.state.count}</div>

        <button onClick={this.handleShowPerson}>Toggle</button>
      </div>
    );
  }
}

export default App;
