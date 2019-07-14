import React, { Component } from "react";
 
class RPGs extends Component {
  render() {
    return (
      <div>
        <h2>Role Playing Games</h2>
        <p>This section has Japanese Role Playing Games (not limited to but including: 
            asyncronyous turn games), Action Role Playing Games,
            Massively Mulitplayer Online RPGs, and Strategy Games
        </p>
        <ol>
          <li>JRPGs</li>
          <li>Action RPGs</li>
          <li>Massive Mulitplayer Onuine RPGs</li>
          <li>Strategy</li>
        </ol>
      </div>
    );
  }
}
 
export default RPGs;