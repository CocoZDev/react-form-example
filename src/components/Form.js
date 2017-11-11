import React, { Component } from 'react'

export default class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit () {
    // we would do something like this
    // fetch(`/api/user`, { method: 'post', body: {
    //   email: this.state.email,
    //   password: this.state.password
    // }}).then(res => {
    //   console.log('sucess!')
    // })

    
    // Validation part
    if (this.state.email === '') {
      alert('please enter an email')
    }
    
    // this would be replaced with an ajax post
    console.log({
      email: this.state.email,
      password: this.state.password
    })
  }

  render () {
    return (
      <div>
        <div>
          Email: 
          <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
          <p>
            email: {this.state.email}
          </p>
        </div>
        <div>
          Password:
          <input type='text' value={this.state.password} onChange={this.handlePasswordChange} />
          <p>
            password: {this.state.password}
          </p>
        </div>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}
