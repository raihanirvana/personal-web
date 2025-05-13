import { render, screen, fireEvent, renderHook, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Header, { useNavbarVisibility } from './NavigationBar.component';

jest.useFakeTimers();

describe('Header Component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Header activeBar={1} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should apply opacity-20 while scrolling and revert to opacity-100 after debounce', () => {
    const { container } = render(
      <MemoryRouter>
        <Header activeBar={1} />
      </MemoryRouter>
    );
  
    const headerWrapper = container.querySelector('div.flex');
    expect(headerWrapper?.className).toContain('opacity-100');
    expect(headerWrapper?.className).not.toContain('opacity-20');
  
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
  
    expect(headerWrapper?.className).toContain('opacity-20');
    expect(headerWrapper?.className).not.toContain('opacity-100');
  
    act(() => {
      jest.advanceTimersByTime(500);
    });
  
    expect(headerWrapper?.className).toContain('opacity-100');
    expect(headerWrapper?.className).not.toContain('opacity-20');
  });

  it('navigates to the correct route when a link is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Header activeBar={1} />} />
          <Route path="/resume" element={<div>Resume</div>} />
        </Routes>
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole('link', { name: /resume/i });
    fireEvent.click(aboutLink);

    expect(await screen.findByText('Resume')).toBeInTheDocument();
  });

  describe('useNavbarVisibility', () => {
    beforeEach(() => {
      jest.clearAllTimers();
    });
  
    it('should be false by default', () => {
      const { result } = renderHook(() => useNavbarVisibility());
      expect(result.current).toBe(false);
    });
  
    it('should become true on scroll and revert to false after delay', () => {
      const { result } = renderHook(() => useNavbarVisibility(1000));
  
      act(() => {
        window.dispatchEvent(new Event('scroll'));
      });
  
      expect(result.current).toBe(true);
  
      act(() => {
        jest.advanceTimersByTime(999);
      });
      expect(result.current).toBe(true);
  
      act(() => {
        jest.advanceTimersByTime(1);
      });

      expect(result.current).toBe(false);
    });
  
    it('should reset debounce timer if scroll happens again within delay', () => {
      const { result } = renderHook(() => useNavbarVisibility(1000));
  
      act(() => {
        window.dispatchEvent(new Event('scroll'));
      });

      expect(result.current).toBe(true);
  
      act(() => {
        jest.advanceTimersByTime(500);
        window.dispatchEvent(new Event('scroll'));
      });
  
      act(() => {
        jest.advanceTimersByTime(999);
      });

      expect(result.current).toBe(true);
  
      act(() => {
        jest.advanceTimersByTime(1);
      });

      expect(result.current).toBe(false);
    });
  });
});
