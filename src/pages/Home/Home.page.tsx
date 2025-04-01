import React from 'react';

import { Helmet } from 'react-helmet-async';

import { NavigationBar, ContactsList, GeneralText, TypeWriterEffect } from '../../components';

import { NavigationButton } from './components';
import { useHomeEffectReturn } from './Home.page.type';

/**
 * Renders and contacts list.
 *
 * @returns {JSX.Element} The JSX element containing contacts list.
 */
const renderContacts = (): JSX.Element => (
  <div className="mt-10 w-screen">
    <ContactsList />
  </div>
);

/**
 * Renders the navigation bar and contacts list.
 *
 * @returns {JSX.Element} The JSX element containing the navigation bar and contacts list.
 */
const renderNavigationBar = (): JSX.Element => (
  <div className="fixed top-10 left-5">
    <NavigationBar activeBar={1} />
  </div>
);

/**
 * Renders the navigation buttons.
 *
 * @returns {JSX.Element} The JSX element containing navigation buttons.
 */
const navigationButton = (): JSX.Element => (
  <div className="pt-5 md:pt-15 flex gap-5 justify-center ml-[-1rem]">
    <NavigationButton text="Resume" navigate="/resume" />
    <NavigationButton text="Project" navigate="/project" />
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
  <div className="justify-center pl-5 md:pl-20 pt-30 md:pt-70 flex-col w-fit">
    <TypeWriterEffect text='Raihan' customStyle='text-2xl md:text-5xl font-rigid-reguler' />
    <TypeWriterEffect text='Irvana' customStyle='text-6xl md:text-9xl font-rigid-medium' />
    {showRole && (
      <GeneralText text="Full Stack Engineer" customStyle="font-medium tracking-[.40rem] md:tracking-[.85rem] text-sm md:text-3xl" />
    )}
    {showButtonNavigation && navigationButton()}
  </div>
);

/**
 * Renders the hero section.
 *
 * @param {boolean} setShowRole - Determines whether the role should be displayed.
 * @param {boolean} setShowButtonNavigation: React.Dispatch<React.SetStateAction<boolean>>
 - Determines whether the navigation buttons should be displayed.
 * @returns {JSX.Element} The JSX element containing the hero section.
 */
  export const useCountdownDisplay = (
    setShowRole: React.Dispatch<React.SetStateAction<boolean>>,
    setShowButtonNavigation: React.Dispatch<React.SetStateAction<boolean>>
  ): void => {
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setShowRole(true);
        setTimeout(() => {
          setShowButtonNavigation(true);
        }, 800);
      }, 2500);

      return () => clearTimeout(timer);
    }, []);
  };

/**
 * Custom hook to manage the display state for role and navigation buttons.
 *
 * @returns {useHomeEffectReturn} An object containing the state of showRole and showButtonNavigation.
 */
const useHomeEffect = (): useHomeEffectReturn => {
  const [showRole, setShowRole] = React.useState(false);
  const [showButtonNavigation, setShowButtonNavigation] = React.useState(false);

  useCountdownDisplay(setShowRole, setShowButtonNavigation);

  return React.useMemo(
    () => ({ showRole, showButtonNavigation }),
    [showRole, showButtonNavigation]
  );
};

/**
 * Renders the Home page component.
 *
 * @returns {JSX.Element} The JSX element for the Home page.
 */
const Home = (): JSX.Element => {
  const { showRole, showButtonNavigation } = useHomeEffect();

  return (
    <div className="w-full bg-[url('/assets/home-background.jpg')] bg-cover bg-no-repeat bg-center h-full">
      <Helmet>
        <title>Home</title>
      </Helmet>
      {renderNavigationBar()}
      {heroSection(showRole, showButtonNavigation)}
      {renderContacts()}
    </div>
  );
};

export default Home;
