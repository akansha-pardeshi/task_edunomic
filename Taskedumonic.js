import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import AutoComplete from "./Autocomplete"
import Axios from "axios";

class Taskedumonic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
    //   query: "",
    //   filteredData: [],
      loading: true,
      
    };
  }

//   handleInputChange = event => {
//     const query = event.target.value;

//     this.setState(prevState => {
//       const filteredData = prevState.fields.filter(element => {
//         return element.username.toLowerCase().includes(query.toLowerCase());
//       });

//       return {
//         query,
//         filteredData
//       };
//     });
//   };


  componentDidMount() {
    let fields = this.state.fields;
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ fields: res.data, loading: false });
      console.log({ fields: res.data });
    })
    //   .then(fields => {
    //     const { query } = this.state;
    //     const filteredData = fields.filter(element => {
    //       return element.username.toLowerCase().includes(query.toLowerCase());
    //     });
  
    //     this.setState({
    //       fields,
    //       filteredData
    //     });
    //   });
    
  }

  render() {
    return (
      <div>

          <AutoComplete search={["hej"]}/>
        {/* <div className="searchForm">
        <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <div>{this.state.filteredData.map(fields => <p>{fields.username}</p>)}</div>
      </div> */}
        <div className="container">
          <div class="row" className="hdr">
            <div class="col-sm-12 btn btn-info">
              User table
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
           
            <table style={{ alignContent: "center" }}>
              <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
                {this.state.fields.map((fields)=>
                  <tr key={fields.id}>
                    <td>{fields.name}</td>
                    <td>{fields.username}</td>
                    <td>{fields.email}</td>
                    <td>{fields.phone}</td>
                  </tr>
                )}
            </tbody>
          </table>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Taskedumonic;