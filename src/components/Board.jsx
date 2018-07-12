import React from 'react';

function Board() {

  function registerClick(e) {
    console.log(e.currentTarget.id);
  }

  return(
    <div>
      <style jsx>
        {`
          .row {
            height: 100px;
            width: 300px;
            display: flex;
          }
          .square {
            height: 100px;
            width: 100px;
            border: 1px solid black;
          }
        `}
      </style>
      <div className="row">
        <div className="square" onClick={registerClick} id="1"></div>
        <div className="square" id="2" onClick={registerClick}></div>
        <div className="square" id="3" onClick={registerClick}></div>
      </div>
      <div className="row">
        <div className="square" onClick={registerClick} id="4"></div>
        <div className="square" onClick={registerClick} id="5"></div>
        <div className="square" onClick={registerClick} id="6"></div>
      </div>
      <div className="row">
        <div className="square" onClick={registerClick} id="7"></div>
        <div className="square" onClick={registerClick} id="8"></div>
        <div className="square" onClick={registerClick} id="9"></div>
      </div>
    </div>
  );
}

export default Board;
