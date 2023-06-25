import React from 'react'
import "./HistoryButton.css";

function HistoryButton({value, clickHandler}) {
    return (
    // onClick 속성 사용으로 클릭 시 콜백 함수 실행
    <button className="square" onClick={clickHandler}>
      {value}
    </button>
  )
}

export default HistoryButton;