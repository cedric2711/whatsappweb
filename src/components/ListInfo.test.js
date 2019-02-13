import React from 'react';
import { shallow } from 'enzyme';

import ListInfo from './ListInfo';
import NavBar from "./NavBar";
import FriendList from './FriendList';


describe('ListInfo Component', () => {
    describe('ListInfo', () => {
        let wrapper = shallow(<ListInfo />);
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should contain a NavBar component', () => {
            expect(wrapper.find(NavBar)).toHaveLength(1);
        });

        it('should contain a FriendList component', () => {
            expect(wrapper.find(FriendList)).toHaveLength(1);
        });
    });
});