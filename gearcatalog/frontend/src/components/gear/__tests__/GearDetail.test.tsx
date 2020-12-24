import React from 'react';
import { mount } from 'enzyme';
import GearDetail, { mapStateToProps } from '../GearDetail';

// jest.mock('../../common/Input');
jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  Link: 'div',
}));
jest.mock('../../layout/LinkButton');

describe('Form', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should render component and call selectGear', () => {
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
        locking: false,
      },
      selectGear: jest.fn(),
    };

    const wrapper = mount(<GearDetail {...props} />);

    expect(wrapper.contains(<h2 className="my-2">Gear Detail</h2>))
      .toBe(true);
    expect(wrapper.contains(<p className="card-text">Locking: No</p>))
      .toBe(true);
    expect(props.selectGear).toHaveBeenCalledTimes(1);
  });

  test('Should simulate onClick event on delete button', () => {
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
        locking: true,
      },
      selectGear: jest.fn(),
      deleteGear: jest.fn(),
    };

    const wrapper = mount(<GearDetail {...props} />);

    const onClickEvent = {
      preventDefault: jest.fn(),
    };

    expect(props.deleteGear).toHaveBeenCalledTimes(0);
    expect(wrapper.contains(<p className="card-text">Locking: Yes</p>))
      .toBe(true);
    wrapper.find('button').at(0).simulate('click', onClickEvent);
    expect(props.deleteGear).toHaveBeenCalledTimes(1);
  });
});

describe('mapStateToProps', () => {
  test('Should return state object', () => {
    const state = {
      gearList: {
        selectedGear: {
          name: 'foo',
          desc: 'baz',
          brand: 'bar',
          weight_grams: '1',
          length_mm: '2',
          width_mm: '3',
          depth_mm: '4',
          locking: false,
        },
      },
      auth: {
        token: 'foo',
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(mapStateToProps(state as any).token).toBe(state.auth.token);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(mapStateToProps(state as any).selectedGear)
      .toBe(state.gearList.selectedGear);
  });
});
