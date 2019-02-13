import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10
  },
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "96%"
  },
  listinfo: {
    background: "gainsboro",
    minWidth: 330
  },
  chatwindow: {
    background: "#efe7dd url(https://cloud.githubusercontent.com/assets/398893/15136779/4e765036-1639-11e6-9201-67e728e86f39.jpg) repeat",
    minWidth: 660
  }
});

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    let mockFunction = jest.fn();
    wrapper = shallow(<App authedUser={'simon'} classes={styles} dispatch={mockFunction} />)
    wrapper.instance().componentDidMount();
  });
  describe('App', () => {
    it('should render correctly and match Snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});