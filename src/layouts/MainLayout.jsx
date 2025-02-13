import styles from '../assets/css/MainLayout.module.css';

import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


const MainLayout = ({ children }) => {
    return (
        <div className={styles.flexColBox}>
            <Header />
            <div className={styles.flexRowBox}>
                <Sidebar />
                { children }
            </div>
        </div>
    );
}

export default MainLayout;