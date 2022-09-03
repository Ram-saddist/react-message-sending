import React, { Component } from 'react'

export default class TakeMessage extends Component {
    constructor(){
        super();
        this.state={
            inputValue:""
        }
    }
    handleInputMessage=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    send=()=>{
        //console.log(this.state.inputValue)
        this.props.onSubmit({
            newMessage:this.state.inputValue
        })
        this.setState({
            inputValue:""
        })
    }
    render() {
    return (
      <div className='main-take'>
        <input value={this.state.inputValue} onChange={this.handleInputMessage} type="text" placeholder='Type a message here'/>
        <img onClick={this.send}
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpc9jhHMrrSdahBS_tciIc9oPaiSkZE0icGQ&usqp=CAU" 
        alt="submit image"
        width="3%"/>
      </div>
    )
  }
}
