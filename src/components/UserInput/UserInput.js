import React, { Component } from 'react';

const UserInput = (props) => {
    const inputStyle={
        border: '3px solid red',
        backgroundColor: '#eaeae'
    }
   return ( 
        <div>
            <input type="text"
                    style={inputStyle}
                    onChange={props.change}
                    value={props.currentUsername} />
        </div>
    );
}

export default UserInput;