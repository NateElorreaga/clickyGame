import React from 'react';


export function Navbar(props) {
    return (
        <div className="navbar sticky-top navbar-light bg-light">
                    <div class="col">
                        <h3>CLICK IT GAME</h3>
                    </div>
                    <div class="col">
                        <h3 className>Click an image to start!</h3>
                    </div>
                    <div class="col">
                        <h3>Score: {props.score} | High Score:{props.totalScore}</h3>
                    </div>
                </div>
    );
}