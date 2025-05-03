import styles from '@css/MainLayout.module.css';

import {useState} from 'react';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import SearchTabsPage from '@pages/SearchTabsPage';


const MainLayout = ({ children }) => {
    const [search, setSearch] = useState('');
    const handleSearchInput = (value) => {
        setSearch(value);
    };
    return (
        <div className={styles.flexColBox}>
            <Header searchInput={handleSearchInput}/>
            <div className={styles.flexRowBox}>
                <Sidebar />
                { search.length>0
                ?<SearchTabsPage search={search}/>
                :children }
            </div>
        </div>
    );
}

export default MainLayout;