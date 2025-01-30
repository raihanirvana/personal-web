import React from 'react';

import { NavigationBar, ContactsList } from '../../components';

import { NameDisplay, NavigationButton } from './components';
import { useHomeEffectReturn } from './Home.page.type'

/**
 * Renders the navigation bar and contacts list.
 * 
 * @returns {JSX.Element} The JSX element containing the navigation bar and contacts list.
 */
const navigationBarAndContacts = (): JSX.Element => (
  <React.Fragment>
    <div className="fixed top-0 right-5">
      <NavigationBar activeBar={1} />
   </div>
    <div className="fixed bottom-0 left-60 pb-10">
      <ContactsList />
    </div>
  </React.Fragment>
);

/**
 * Renders the navigation buttons.
 * 
 * @returns {JSX.Element} The JSX element containing navigation buttons.
 */
const navigationButton = (): JSX.Element => (
  <div className="pt-15 flex gap-5 justify-center ml-[-1rem]">
    <NavigationButton text="Resume" />
    <NavigationButton text="Portfolio" />
  </div>
);

/**
 * Renders the hero section.
 * 
 * @param {boolean} showRole - Determines whether the role should be displayed.
 * @param {boolean} showButtonNavigation - Determines whether the navigation buttons should be displayed.
 * @returns {JSX.Element} The JSX element containing the hero section.
 */
const heroSection = (
  showRole: boolean,
  showButtonNavigation: boolean
): JSX.Element => (
  <div className="justify-center pl-60 pt-70 flex-col w-fit">
    <NameDisplay firstName="RAIHAN" secondName="IRVANA" />
    {showRole && (
      <p className="text-white font-medium tracking-[.85rem] text-3xl">
        Full Stack Engineer
      </p>
    )}
    {showButtonNavigation && navigationButton()}
  </div>
);

/**
 * Renders the hero section.
 * 
 * @param {boolean} showRole - Determines whether the role should be displayed.
 * @param {boolean} showButtonNavigation - Determines whether the navigation buttons should be displayed.
 * @returns {JSX.Element} The JSX element containing the hero section.
 */
export const useCountdownDisplay = (
  setShowRole: React.Dispatch<React.SetStateAction<boolean>>, 
  setShowButtonNavigation: React.Dispatch<React.SetStateAction<boolean>>): void => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowRole(true);
      setTimeout(() => {
        setShowButtonNavigation(true);
      }, 700);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
}

/**
 * Custom hook to manage the display state for role and navigation buttons.
 * 
 * @returns {useHomeEffectReturn} An object containing the state of showRole and showButtonNavigation.
 */
const useHomeEffect = (): useHomeEffectReturn => {
  const [showRole, setShowRole] = React.useState(false);
  const [showButtonNavigation, setShowButtonNavigation] = React.useState(false);

  useCountdownDisplay(setShowRole, setShowButtonNavigation)


  return React.useMemo(() => ({ showRole, showButtonNavigation }), [showRole, showButtonNavigation]);
}

/**
 * Renders the Home page component.
 * 
 * @returns {JSX.Element} The JSX element for the Home page.
 */
const Home = (): JSX.Element => {
  const { showRole, showButtonNavigation } = useHomeEffect()

  return (
    <div className="w-full bg-[url('assets/home-background.jpg')] bg-cover bg-no-repeat bg-center h-screen">
      {navigationBarAndContacts()}
      {heroSection(showRole, showButtonNavigation)}
    </div>
  );
};

export default Home;
