import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeftNavBar from '../components/leftNavBar';

const Dashboard = () => {
    const [authStatus, setAuthStatus] = useState(localStorage.getItem('isAuthenticated') === 'true');

    useEffect(() => {
        setAuthStatus(localStorage.getItem('isAuthenticated') === 'true');
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <LeftNavBar />
            {/* Rest of the view here */}
        </div>
    );
};

export default Dashboard;
