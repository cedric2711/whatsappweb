import React from 'react';
import { shallow} from 'enzyme';

import { FriendList } from './FriendList';

const styles = theme => ({
    textField: {
        background: "#fff",
        width: "90%"
    }
});

describe('FriendList Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FriendList users={null} classes={styles} userInfo={null} filterUsers={null}/>)
    });
    describe('FriendList', () => {
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});