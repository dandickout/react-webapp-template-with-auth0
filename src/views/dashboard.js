import React, { useState } from 'react';
import axios from 'axios';
import LeftNavBar from '../components/leftNavBar';

const Dashboard = () => {

    return (
        <div style={{ display: 'flex' }}>
            <LeftNavBar />
            {/* Rest of the view here */}

        </div>
    );
};

export default Dashboard;