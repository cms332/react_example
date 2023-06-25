import React, { Component } from 'react'
import "./Square.css";

export default class Square extends Component {
  render() {
    return (
      // onClick 속성 사용으로 클릭 시 콜백 함수 실행
    
      <button className="square" onClick={() => this.props.clickHandler()}>
        {this.props.value}
      </button>
    )
  }
}
