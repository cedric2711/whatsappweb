import React from 'react';
import { shallow } from 'enzyme';
import List from '@material-ui/core/List';

import { FriendList } from './FriendList';

const styles = theme => ({
    textField: {
        background: "#fff",
        width: "90%"
    }
});
const userInfo = {
    id: "simon",
    name: "Simon Jude",
    avatarURL: "images/icons/Man-1.svg",
    friendList: {
        chetan: ["id1", "id3", "id5"],
        cedric: ["id8", "id10", "id12"]
    }
}

let users = {
    simon: {
        id: "simon",
        name: "Simon Jude",
        avatarURL: "images/icons/Man-1.svg",
        friendList: {
            chetan: ["id1", "id3", "id5"],
            cedric: ["id8", "id10", "id12"]
        }
    }
}
describe('FriendList Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FriendList users={users} classes={styles} userInfo={userInfo} filterUsers={null} />)
    });
    describe('FriendList', () => {
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should contain a List component', () => {
            expect(wrapper.find(List)).toHaveLength(1);
        });
    });
});