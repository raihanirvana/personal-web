import React from 'react';

import headersList from '../../data/NavigationsList.data';

import {
  HeaderItem,
  UseActiveButtonReturn,
  Props,
} from './NavigationBar.component.type';
import { Link } from 'react-router-dom';

const baseClass =
  'w-4 gap-1 mr-10 md:w-10 overflow-hidden text-white text-center md:gap-4 flex items-center md:mr-26';
const activeClass =
  'overflow-visible transition-all duration-300 ease-in-out cursor-pointer w-18 md:w-30 rounded-lg shadow-md border-b-4 border-l-1 border-blue-600/60 transform hover:shadow-lg hover:translate-y-[-2px] p-2';
const hoverClass =
  'hover:w-16 hover:overflow-visible md:hover:w-30 transition-all duration-500 ease-in-out hover:cursor-pointer';

/**
 * Renders a header element with optional styles for first or last headers.
 *
 * @param {HeaderItem} headerData - Header item that contain icon, key and title.
 * @param {void} onChangeActiveNavigation - void function to change state status.
 * @param {number} isActive - to check the active number navigation.
 * @returns {JSX.Element} A JSX element representing the header with the specified title and styling.
 */
const renderHeaderItem = (
  { icon, key, title, navigation }: HeaderItem,
  onChangeActiveNavigation: (key: number) => void,
  isActive: boolean
): JSX.Element => (
  <Link
    type="button"
    to={navigation}
    onClick={() => onChangeActiveNavigation(key)}
    className={`${baseClass} ${isActive ? activeClass : hoverClass}`}
  >
    <span className="text-sm md:text-2xl">{icon}</span>
    <span className="text-sm md:text-xl">{title}</span>
  </Link>
);

/**
 * Custom hook to manage the active navigation state.
 *
 * @returns {UseActiveButtonReturn} return state and onChange function
 */
const useActiveNavigation = (activeBar: number): UseActiveButtonReturn => {
  const [activeNavigation, setActiveNavigation] =
    React.useState<number>(activeBar);

  const onChangeActiveNavigation = React.useCallback((key: number): void => {
    setActiveNavigation(key);
  }, []);

  return {
    onChangeActiveNavigation,
    activeNavigation,
  };
};

/**
 * Returns a debounced scroll handler.
 *
 * @param {Function} setIsScrolling - Function to update the scrolling state.
 * @param {React.MutableRefObject<NodeJS.Timeout | null>} scrollTimeout - Reference for the debounce timeout.
 * @param {number} delay - Delay in milliseconds before setting scrolling to false.
 * @returns {() => void} The scroll handler function.
 */
const handleScrollWithDebounce = (
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>,
  scrollTimeout: React.MutableRefObject<NodeJS.Timeout | null>,
  delay: number
): (() => void) => {
  return () => {
    setIsScrolling(true);
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsScrolling(false), delay);
  };
};

/**
 * Attaches and cleans up the scroll event listener.
 *
 * @param {() => void} handler - The scroll event handler.
 */
const useScrollListener = (handler: () => void) => {
  React.useEffect(() => {
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [handler]);
};

/**
 * Custom React hook to determine whether the user is currently scrolling.
 *
 * @param {number} [delay=500] - The debounce delay in milliseconds to wait after the last scroll event.
 * @returns {boolean} `true` if the user is currently scrolling, `false` otherwise.
 */
export const useNavbarVisibility = (delay: number = 500): boolean => {
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);
  const scrollTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const handleScroll = React.useCallback(
    handleScrollWithDebounce(setIsScrolling, scrollTimeout, delay),
    [delay]
  );
  useScrollListener(handleScroll);
  return isScrolling;
};

/**
 * A functional component that renders a list of headers.
 *
 * @returns {JSX.Element} A JSX element containing the header list.
 */
const NavigationBar = ({ activeBar }: Props): JSX.Element => {
  const { onChangeActiveNavigation, activeNavigation } =
    useActiveNavigation(activeBar);
  const isScrolling = useNavbarVisibility()

  return (
    <div className={`flex gap-4 w-screen justify-between lg:gap-0 lg:w-fit lg:justify-normal transition-opacity duration-500 ${ isScrolling ? 'opacity-20' : 'opacity-100' }`}>
      {headersList.map((header: HeaderItem) => (
        <React.Fragment key={header.key}>
          {renderHeaderItem(header, onChangeActiveNavigation,activeNavigation === header.key)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavigationBar;
