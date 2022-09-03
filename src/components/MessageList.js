import React, { Component } from 'react'
import TakeMessage from './TakeMessage'
import Message from './Message'

export default class MessageList extends Component {
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    addMessage=(currentMessage)=>{
        //console.log("new message from take message component")
        //console.log(currentMessage.newMessage)
        this.setState({
            list:[...this.state.list,currentMessage]
        })
    }
    render() {
    return (
      <center>
        <TakeMessage onSubmit={this.addMessage}/>
        {
            this.state.list.map((m)=>(
                <Message message={m.newMessage}/>
            ))
        }
      </center>
    )
  }
}
