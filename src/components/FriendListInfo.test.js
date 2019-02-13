import React from 'react';
import { shallow } from 'enzyme';
import { ListItem, ListItemText, Avatar } from '@material-ui/core';

import { FriendListInfo } from './FriendListInfo';

const activeChat = [
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

const friendChat = "chetan";
const users = {
    simon: {
        id: "simon",
        name: "Simon Jude",
        avatarURL: "images/icons/Man-1.svg",
        friendList: {
            chetan: ["id1", "id3", "id5"],
            cedric: ["id8", "id10", "id12"]
        }
    },
    chetan: {
        id: "chetan",
        name: "Chetan Narvekar",
        avatarURL: "images/icons/Man-6.svg",
        friendList: {
            simon: ["id2", "id4", "id6"],
            cedric: ["id13", "id15", "id17"]
        }
    }
};
const styles = {
    avatar: {
        margin: 10,
    },
    centerSpace: {
        width: "75%"
    },
    cardSpace: {
        background: "white",
        marginTop: 5,
        '&:hover': {
            background: "#f4f5f5"
        }
    },
    selectedChat: {
        background: "#f4f5f5"
    }
};
describe('FriendListInfo Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <FriendListInfo
                activeChat={activeChat}
                users={users}
                friendChat={friendChat}
                classes={styles}
                friendID={'chetan'} />
        )
    });
    describe('FriendListInfo', () => {
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should contain a ListItem component', () => {
            expect(wrapper.find(ListItem)).toHaveLength(1);
        });

        it('should contain a Avatar component', () => {
            expect(wrapper.find(Avatar)).toHaveLength(1);
        });

        it('should contain a Avatar component', () => {
            expect(wrapper.find(ListItemText)).toHaveLength(2);
        });
    });
});