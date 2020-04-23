import { Button, AppBar, Tabs, Tab, Grid } from '@material-ui/core';
import styles from './indexPage.less';
import React from 'react';
import LeftLayout from '../layouts/LeftLayout';
import RightLayout from '../layouts/RightLayout';
import header from '../assets/header.jpg'

function IndexPage() {
    return (
        <div className={styles['root']}>
            <div className={styles.header}> 
                
                <span className={styles['title']}>
                    <p>Su's Blog</p>
                </span>
               
            </div>
           
            {/* </div> */}
        
            <Grid container >
                <Grid item xs={8}>
                    <LeftLayout />
                </Grid>
                <Grid item xs>
                    <RightLayout />
                </Grid>


            </Grid>
        </div>
    );
}
export default IndexPage;