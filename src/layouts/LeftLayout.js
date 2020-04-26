import React from 'react';
import { Tabs, Tab, Alert } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import { withRouter } from 'react-router-dom';

function LeftLayout(props) {
    const [state, setState] = React.useState({
        value: './paper',
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { value, open, vertical, horizontal } = state;
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const handleChange = (event, newValue) => {
        try {
            setState({ ...state, value: newValue, open: true});
            props.history.push(newValue); 
        } catch (error) {
            alert(error);
        }

    };
    return (
        <>
            <Tabs centered
                textColor="primary"
                indicatorColor="primary"
                value={value}
                onChange={handleChange}>
                <Tab label='文章' value='./paper'>文章</Tab>
                <Tab label='时间线' value='./timeLine'>时间线</Tab>
                <Tab label='相册' value='/album'>相册</Tab>
            </Tabs>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={`${vertical},${horizontal}`}
                open={open}
                onClose={handleClose}
                message={`跳转到${value}`}
            />
        </>);
}
export default withRouter(LeftLayout);