import React from 'react';
import { shallow } from 'enzyme';
import { FormControl, AppBar } from '@material-ui/core';

import { NavBar } from './NavBar';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    withoutBorder: {
        '&:before': {
            borderBottom: 0
        },
        '&:after': {
            borderBottom: 0
        },
        '&:hover': {
            borderBottom: 0
        }
    },
    withoutLabel: {
        borderRadius: 24,
        marginTop: 11,
        background: "white"
    },
});
const user = {
    id: "simon",
    name: "Simon Jude",
    avatarURL: "images/icons/Man-1.svg",
    friendList: {
        chetan: ["id1", "id3", "id5"],
        cedric: ["id8", "id10", "id12"]
    }
}
describe('NavBar Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavBar user={user} classes={styles} />)
    });
    describe('NavBar', () => {
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should contain a AppBar component', () => {
            expect(wrapper.find(AppBar)).toHaveLength(1);
        });

        it('should contain a FormControl component', () => {
            expect(wrapper.find(FormControl)).toHaveLength(1);
        });
    });
});