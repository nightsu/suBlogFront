import React from 'react';
import { AppBar, Tabs, Tab,Container } from '@material-ui/core';

function RightLayout() {
    return (
            <Tabs centered>
                <Tab label='A'>文章</Tab>
                <Tab label='B'>时间线</Tab>
                </Tabs>);
}

export default RightLayout;