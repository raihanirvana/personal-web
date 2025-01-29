import React from 'react';

import headersList from '../../data/NavigationsList.data';

import { HeaderItem, UseActiveButtonReturn } from './NavigationBar.component.type'

const baseClass = "w-10 text-white overflow-hidden text-center p-4 flex gap-4 items-center pb-6";
const activeClass = "overflow-visible w-36 transition-all duration-300 ease-in-out cursor-pointer pl-8";
const hoverClass = "hover:overflow-visible hover:w-36 transition-all duration-300 ease-in-out hover:cursor-pointer hover:pl-8";

/**
 * Renders a header element with optional styles for first or last headers.
 * 
 * @param {HeaderItem} headerData - Header item that contain icon, key and title.
 * @param {void} onChangeActiveNavigation - void function to change state status.
 * @param {number} isActive - to check the active number navigation.
 * @returns {JSX.Element} A JSX element representing the header with the specified title and styling.
 */
const renderHeaderItem = (
  { icon, key, title }: HeaderItem,
  onChangeActiveNavigation: (key: number) => void,
  isActive: boolean
): JSX.Element => (
  <button
    type="button"
    onClick={() => onChangeActiveNavigation(key)}
    className={`${baseClass} ${isActive ? activeClass : hoverClass}`}
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-xl">{title}</span>
  </button>
);

/**
 * Custom hook to manage the active navigation state.
 * 
 * @returns {UseActiveButtonReturn} return state and onChange function
 */
const useActiveNavigation = (): UseActiveButtonReturn => {
  const [activeNavigation, setActiveNavigation] = React.useState<number>(1)

  const onChangeActiveNavigation = React.useCallback((key: number): void => {
    setActiveNavigation(key);
  }, []);

  return {
    onChangeActiveNavigation, activeNavigation
  }
}

/**
 * A functional component that renders a list of headers.
 * 
 * @returns {JSX.Element} A JSX element containing the header list.
 */
const Header = (): JSX.Element => {
  const { onChangeActiveNavigation, activeNavigation } = useActiveNavigation()

  return (
   <div className="fixed top-1/2 left-5 transform -translate-y-1/2">
     {headersList.map((header: HeaderItem) => (
       <React.Fragment key={header.key}>
         {renderHeaderItem(header, onChangeActiveNavigation, activeNavigation === header.key)}
       </React.Fragment>
     ))}
   </div>
 )
};

export default Header;