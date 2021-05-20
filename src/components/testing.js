import React, { Component } from 'react';

class testing extends Component {

  constructor(props){
      super(props)
      this.state = {
            count : 0
      }
  }

incrementCount(){
    this.setState(prevState => ({
        count :  prevState.count + 1
    }),
    () => {console.log('callbck value', this.state.count)})
    console.log(this.state.count)
}

incrementCountFive(){
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();

}

    render() {
        return (
            <div>
                <div>Count : {this.state.count}</div>
                <button onClick = {() => this.incrementCountFive()}>Hit</button>
            </div>
        )
    }
}

export default testing
