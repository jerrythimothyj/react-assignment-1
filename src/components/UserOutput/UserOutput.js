import React, { Component } from 'react';
import './UserOutput.css';

const UserOutput = (props) => (
    <div className='UserOutput'>
        <h3>{props.username}</h3>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
);

export default UserOutput;