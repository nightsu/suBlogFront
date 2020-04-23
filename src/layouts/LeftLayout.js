import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

function LeftLayout() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        // <Paper>
            <Tabs centered
                textColor="primary"
                indicatorColor="primary"
                value={value}
                onChange={handleChange}>
                <Tab label='文章'>文章</Tab>
                <Tab label='时间线'>时间线</Tab>
                <Tab label='相册'>相册</Tab>
            </Tabs>)
        // </Paper>);
}

export default LeftLayout;