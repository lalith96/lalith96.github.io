import React from 'react';

function Header(props){
    return(
        <div class="text-center">
            <h1>-{props.text}-</h1>
        </div>
    );
}

export default Header;