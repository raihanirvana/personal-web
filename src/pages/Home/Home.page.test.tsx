import { render, act, renderHook } from '@testing-library/react';

import Home, { useCountdownDisplay } from './Home.page';

describe('Home Page', () => {
  describe('Home Page', () => {
    jest.useFakeTimers();
  
    it('should match snapshot initially', () => {
      const { asFragment } = render(<Home />);
      expect(asFragment()).toMatchSnapshot();
    });
  
    it('should match snapshot after 4700ms', () => {
      const { asFragment } = render(<Home />);
      
      act(() => {
        jest.advanceTimersByTime(4700);
      });
  
      expect(asFragment()).toMatchSnapshot();
    });
  
    afterEach(() => {
      jest.clearAllTimers();
      jest.clearAllMocks();
    });
  });

  describe('useCountdownDisplay Hook', () => {
    jest.useFakeTimers();
  
    it('should call setShowRole(true) after 4000ms and setShowButtonNavigation(true) after additional 700ms', () => {
      const setShowRole = jest.fn();
      const setShowButtonNavigation = jest.fn();
  
      renderHook(() => useCountdownDisplay(setShowRole, setShowButtonNavigation));
  
      act(() => {
        jest.advanceTimersByTime(4000);
      });
  
      expect(setShowRole).toHaveBeenCalledTimes(1);
      expect(setShowRole).toHaveBeenCalledWith(true);
      expect(setShowButtonNavigation).not.toHaveBeenCalled();

      act(() => {
        jest.advanceTimersByTime(700);
      });
  
      expect(setShowButtonNavigation).toHaveBeenCalledTimes(1);
      expect(setShowButtonNavigation).toHaveBeenCalledWith(true);
    });
  
    afterEach(() => {
      jest.clearAllTimers();
      jest.clearAllMocks();
    });
  });
  
 })
