import React from 'react';
import { shallow} from 'enzyme';
import {Select, Button} from '@material-ui/core';

import { Login } from './Login';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

const userID = ['simon', 'cedric'];

describe('Login Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login users={{}} classes={styles} usersID={userID} />)
    });
    describe('Login', () => {
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should contain a form element', () =>{
            expect(wrapper.find('form')).toHaveLength(1);
        })

        it('should contain a Select element', () =>{
            expect(wrapper.find(Select)).toHaveLength(1);
        })

        it('should contain a Button element', () =>{
            expect(wrapper.find(Button)).toHaveLength(1);
        })
    });
});