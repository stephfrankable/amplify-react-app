import './App.css';
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

const Github = () => {
    const [born, updateBorn] = useState([]);

    const fetchBorn = async() => {
        const data = await API.get('bornapi', '/born');
        updateBorn(data.born);
    }
}

useEffect(() => {
    fetchBorn()
}, []);

return (
    <div className = "Github">
        <h3>GitHub user {x.name} was established on {x.day}</h3>
    </div>
)