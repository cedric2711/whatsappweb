import React from 'react';
import { shallow} from 'enzyme';

import { ChatWindow } from './ChatWindow';

const styles = theme => ({
    textField: {
        background: "#fff",
        width: "90%"
    }
});

describe('ChatWindow Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ChatWindow authedUser={null} classes={styles} activeChat={null} friendChat={null}/>)
    });
    describe('ChatWindow', () => {
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});