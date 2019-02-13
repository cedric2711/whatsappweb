import React from 'react';
import { shallow} from 'enzyme';

import { ChatSection } from './ChatSection';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'scroll',
        maxHeight: 600,
        height: 600,
        padding: `0 ${theme.spacing.unit * 3}px`,
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing.unit}px auto`,
        padding: theme.spacing.unit * 2,
    },
    date: {
        fontSize: 11,
        height: 15,
        float: "right",
        whiteSpace: "nowrap"
    },
    message: {
        color: "#000",
        clear: "both",
        lineHeight: 18,
        fontSize: 15,
        padding: 8,
        position: "relative",
        margin: "8px 0",
        maxWidth: "85%",
        wordWrap: "break-word",
        '&:after': {
            position: "absolute",
            content: "''",
            width: 0,
            height: 0,
            borderStyle: "solid",
        },
        '&:focus': {
            outline: "none"
        }
    },
    send: {
        background: '#e1ffc7',
        borderRadius: "5px 0px 5px 5px",
        float: 'right',
        '&:after': {
            borderWidth: "0px 0 10px 10px",
            borderColor: "transparent transparent transparent #e1ffc7",
            top: 0,
            right: -10
        }
    },
    receive: {
        background: "#fff",
        borderRadius: "0px 5px 5px 5px",
        float: "left",
        '&:after': {
            borderWidth: "0px 10px 10px 0",
            borderColor: "transparent #fff transparent transparent",
            top: 0,
            left: -10
        }
    }
});

describe('ChatSection Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ChatSection authedUser={null} classes={styles} activeChat={null} />)
        wrapper.instance().componentDidMount();
        wrapper.instance().componentDidUpdate();
    });
    describe('ChatSection', () => {
        it('should render correctly and match Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});