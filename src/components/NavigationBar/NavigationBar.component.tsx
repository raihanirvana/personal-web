import React from 'react';

import headersList from '../../data/NavigationsList.data';

import {
  HeaderItem,
  UseActiveButtonReturn,
  Props,
} from './NavigationBar.component.type';
import { Link } from 'react-router-dom';

const baseClass =
  'w-4 gap-1 mr-5 md:w-10 overflow-hidden text-white text-center md:gap-4 flex items-center md:mr-26';
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
 * A functional component that renders a list of headers.
 *
 * @returns {JSX.Element} A JSX element containing the header list.
 */
const NavigationBar = ({ activeBar }: Props): JSX.Element => {
  const { onChangeActiveNavigation, activeNavigation } =
    useActiveNavigation(activeBar);

  return (
    <div className="flex gap-4 md:gap-0">
      {headersList.map((header: HeaderItem) => (
        <React.Fragment key={header.key}>
          {renderHeaderItem(header, onChangeActiveNavigation,activeNavigation === header.key)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavigationBar;
