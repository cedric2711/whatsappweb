import React from 'react';
import { shallow} from 'enzyme';

import { FriendListInfo } from './FriendListInfo';

describe('FriendListInfo Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FriendListInfo/>)
    });
    describe('FriendListInfo', () => {
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});