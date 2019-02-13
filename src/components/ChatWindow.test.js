import React from 'react';
import { shallow } from 'enzyme';
import TextField from '@material-ui/core/TextField';

import { ChatWindow } from './ChatWindow';
import ChatSection from './ChatSection';

const styles = theme => ({
    textField: {
        background: "#fff",
        width: "90%"
    }
});
let activeChat = [
    {
        id: 'id1',
        text: 'message 1',
        timestamp: 1549000872634,
        user: 'simon'
    },
    {
        id: 'id2',
        text: 'message 2',
        timestamp: 1549000872635,
        user: 'chetan'
    },
    {
        id: 'id3',
        text: 'message 3',
        timestamp: 1549000872636,
        user: 'simon'
    },
    {
        id: 'id4',
        text: 'message 4',
        timestamp: 1549000872637,
        user: 'chetan'
    }];

let authedUser = "simon";
let friendChat = "chetan";
describe('ChatWindow Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ChatWindow authedUser={authedUser} classes={styles} activeChat={activeChat} friendChat={friendChat} />)
    });
    describe('ChatWindow', () => {
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should contain a TextField component', () => {
            expect(wrapper.find(TextField)).toHaveLength(1);
        });

        it('should contain a ChatSection component', () => {
            expect(wrapper.find(ChatSection)).toHaveLength(1);
        });
    });
});