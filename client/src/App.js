import React, {Component} from 'react';
import Navigation from './Navigation';
import Users from './Users';
// import { Input, Label, Menu } from 'semantic-ui-react';

class App extends Component {

  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  render () {
return (

        <div className="App">
            <Navigation />
            <Users />
      </div>

  );

  }
  }




export default App;

     