import React, { Component } from 'react'

export default class Message extends Component {
    state={
        time:new Date().toLocaleString("en-US",{hour:'numeric',minute:"numeric"})
    }
    render() {
    console.log(this.props.message)
    return this.props.message?(
      <div>
        <p>
            <span className='content'>{this.props.message} </span>
            <sub className='time'>{this.state.time}</sub>
        </p>
      </div>
    ):null
  }
}
