import { Button, AppBar, Tabs, Tab, Grid } from '@material-ui/core';
import styles from './indexPage.less';
import React from 'react';
import LeftLayout from '../layouts/LeftLayout';
import RightLayout from '../layouts/RightLayout';
import header from '../assets/header.jpg';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

function IndexPage() {
    return (
        <div className={styles['root']}>
            <div className={styles.header}>
                <span className={styles['title']}>
                    <p>Su's Blog</p>
                </span>
            </div>
            <Grid container >
                <Grid item xs={8}>
                    <div>
                        <BrowserRouter>
                            <LeftLayout />
                            <App />
                        </BrowserRouter>
                    </div>

                </Grid>
                <Grid item xs>
                    <RightLayout />
                </Grid>
            </Grid>
        </div>
    );
}
export default IndexPage;