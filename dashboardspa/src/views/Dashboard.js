import React from 'react';
import Room from '../components/Room'

const Dashboard = props => {
  return (
    <div>
      <h3>Dashboard View</h3>
      <div>
        <ul>
          <li><Room /></li>
        </ul>
      </div>
        
    </div>
  );
};

export default Dashboard;