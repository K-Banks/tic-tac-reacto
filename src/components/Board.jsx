import React from 'react';

function Board() {

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
        <div className="square" id="1"></div>
        <div className="square" id="2"></div>
        <div className="square" id="3"></div>
      </div>
      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="row">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
  );
}

export default Board;
