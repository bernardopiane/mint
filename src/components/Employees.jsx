import Axios from "axios";
import React, { Component } from "react";
import AboutImage from "./AboutImage";

class Employees extends Component {
  // https://jsonplaceholder.typicode.com/users

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  async componentDidMount() {
    const response = await Axios.get("https://randomuser.me/api/?results=12");

    this.setState({
      employees: response.data.results,
    });
  }

  render() {
    if (!this.state.employees.length > 0) {
      return <div className="container">Loading...</div>;
    }
    return (
      <div className="container">
        <h2>Employees</h2>
        <div className="row">{this.renderEmployees()}</div>
      </div>
    );
  }

  renderEmployees() {
    return this.state.employees.map((el) => {
      const name = el.name.title + " " + el.name.first + " " + el.name.last;
      return (
        <div key={el.email} className="col-12 col-md-6 col-lg-3">
          <div className="py-3">
            <AboutImage
              title={name}
              subtitle={el.login.username}
              image={el.picture.large}
            />
          </div>
        </div>
      );
    });
  }
}

export default Employees;
