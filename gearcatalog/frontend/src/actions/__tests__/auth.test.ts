import { loadUser, login, logout, register } from '../auth';
import axios from 'axios';
import * as c from "../action-constants";

jest.mock('axios');

describe('Auth', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('loadUser', () => {
    test('should call axios.get and dispatch return data', async () => {
      const mockData = {
        data: '12345'
      };
      (axios.get as jest.Mock).mockResolvedValue(mockData);
      const token = '42';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await loadUser(token)(mockDispatch, null as any, null);

      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: c.USER_LOADED,
        payload: mockData.data,
      });
    });

    test('should call axios.get and dispatch error message', async () => {
      const error = {
        response: {
          data: 'will be an android',
          status: 404
        },
      };
      (axios.get as jest.Mock).mockRejectedValue(error);
      const token = '42';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await loadUser(token)(mockDispatch, null as any, null);

      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: c.AUTH_ERROR,
      });
    });
  });

  describe('login', () => {
    test('should call axios.post and dispatch return data', async () => {
      const mockData = {
        data: '12345'
      };
      (axios.post as jest.Mock).mockResolvedValue(mockData);
      const username = 'woof';
      const password = '42';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await login(username, password)(mockDispatch, null as any, null);

      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: c.LOGIN_SUCCESS,
        payload: mockData.data,
      });
    });

    test('should call axios.post and dispatch error message', async () => {
      const error = {
        response: {
          data: 'will be an android',
          status: 404
        },
      };
      (axios.post as jest.Mock).mockRejectedValue(error);
      const username = 'woof';
      const password = '42';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await login(username, password)(mockDispatch, null as any, null);

      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: c.LOGIN_FAIL,
      });
    });
  });

  describe('register', () => {
    test('should call axios.post and dispatch return data', async () => {
      const mockData = {
        data: '12345'
      };
      (axios.post as jest.Mock).mockResolvedValue(mockData);
      const username = 'woof';
      const email = 'woof@bark.com';
      const password = '42';

      await register({username, email, password})(mockDispatch,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        null as any, null);

      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: c.REGISTER_SUCCESS,
        payload: mockData.data,
      });
    });

    test('should call axios.post and dispatch error message', async () => {
      const error = {
        response: {
          data: 'will be an android',
          status: 404
        },
      };
      (axios.post as jest.Mock).mockRejectedValue(error);
      const username = 'woof';
      const email = 'woof@bark.com';
      const password = '42';

      await register({username, email, password})(mockDispatch,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        null as any, null);

      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: c.REGISTER_FAIL,
      });
    });
  });

  describe('logout', () => {
    test('should call axios.post and dispatch return data', async () => {
      const mockData = {
        data: '12345'
      };
      (axios.post as jest.Mock).mockResolvedValue(mockData);
      const token = '42';

      await logout(token)(mockDispatch,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        null as any, null);

      expect(mockDispatch).toHaveBeenLastCalledWith({
        type: c.LOGOUT_SUCCESS,
      });
    });

    test('should call axios.post and dispatch error message', async () => {
      const error = {
        response: {
          data: 'will be an android',
          status: 404
        },
      };
      (axios.post as jest.Mock).mockRejectedValue(error);
      const token = '42';

      await logout(token)(mockDispatch,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        null as any, null);

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });
});
