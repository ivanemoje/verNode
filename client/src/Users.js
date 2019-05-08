import React, { Component } from 'react';

class Users extends React.Component  {
constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      crns: []
    }
  }

componentDidMount() {
    fetch('http://localhost:3000/api/crns')
    // fetch('https://jsonplaceholder.typicode.com/users')
 	.then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            crns: result.crns
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

render() {
    const { error, isLoaded, crns } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {crns && crns.map(crn => (
            <li key={crn.CRN_id}>
              {crn.CRN_cycle} 
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Users;


 // <ul>
	// 	          {crns.map(crn => (
	// 	            <li key={crn.CRN_id}>
	// 	              {crn.fdp} {crn.price} {crn.CRN_cycle} {crn.CRN_month} {crn.CRN_year}

	// 	            </li>
	// 	          ))}
	// 	        </ul>