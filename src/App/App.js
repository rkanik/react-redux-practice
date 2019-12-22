import React, { Component } from 'react'
import { connect } from "react-redux"

import './App.css';

/** Actions */
import { fetchUsers } from "../store/users/users.actions"

class App extends Component {

   componentDidMount = () => {
      this.props.fetchUsers()
   }

   render() {
      return (
         <div className='App'>
            <h4>APP APP</h4>
         </div>
      )
   }
}

const mapActions = dispatch => ({
   fetchUsers: () => dispatch(fetchUsers())
})

export default connect(null, mapActions)(App);
