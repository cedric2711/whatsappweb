import React from 'react';
import { shallow} from 'enzyme';

import ListInfo from './ListInfo';

const styles = theme => ({
    textField: {
        background: "#fff",
        width: "90%"
    }
});

describe('ListInfo Component', () => {
    describe('ListInfo', () => {
        let wrapper = shallow(<ListInfo/>);
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});