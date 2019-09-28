import React from 'react';


export function Navbar(props) {
    return (
        <div className="navbar sticky-top navbar-light bg-light">
                    <div class="col">
                    <h5>"Another classic game by Nate Elorreaga"<h6><i> - Forbes Fake Magazine</i></h6></h5>
                    </div>
                    <div class="col">
                        <h3 className>Click a unique image to score points!</h3>
                    </div>
                    <div class="col">
                        <h3>Score: {props.score} | High Score:{props.totalScore}</h3>
                    </div>
                </div>
    );
}