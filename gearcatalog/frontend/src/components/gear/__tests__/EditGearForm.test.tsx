import React from 'react';
import { mount } from 'enzyme';
import EditGearForm, { mapStateToProps } from '../EditGearForm';

jest.mock('react-redux');

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  Link: 'div',
}));

describe('Form', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should render component and call function selectGear',
  () => {
    const props = {
      match: {
        params: {
          id: 42
        }
      },
      selectedGear: {
        name: 'foo',
        desc: 'baz',
        brand: 'bar',
        weight_grams: '1',
        length_mm: '2',
        width_mm: '3',
        depth_mm: '4',
        locking: 'false',
      },
      selectGear: jest.fn(),
    };

    const wrapper = mount(<EditGearForm {...props}/>);

    expect(wrapper.contains(<h2>Edit Gear</h2>)).toBe(true);
    expect(props.selectGear).toHaveBeenCalledTimes(1);
  });

  test('Should simulate submit event and call mockHistoryPush and editGear',
  () => {
    const props = {
      match: {
        params: {
          id: 42
        }
      },
      selectedGear: {
        name: 'foo',
        desc: 'baz',
        brand: 'bar',
        weight_grams: '1',
        length_mm: '2',
        width_mm: '3',
        depth_mm: '4',
        locking: 'false',
      },
      selectGear: jest.fn(),
      editGear: jest.fn(),
    };

    const submitEvent = {
      preventDefault: jest.fn(),
    };

    const wrapper = mount(<EditGearForm {...props}/>);

    expect(mockHistoryPush).toHaveBeenCalledTimes(0);
    expect(props.editGear).toHaveBeenCalledTimes(0);
    wrapper.find('form').simulate('submit', submitEvent);
    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(props.editGear).toHaveBeenCalledTimes(1);
  });
});

describe('mapStateToProps', () => {
  test('Should return state object', () => {
    const state = {
      gearList: {
        selectedGear: '42',
      },
      auth: {
        token: 'foo',
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(mapStateToProps(state as any).selectedGear)
    .toBe(state.gearList.selectedGear);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(mapStateToProps(state as any).token).toBe(state.auth.token);
  });
});
