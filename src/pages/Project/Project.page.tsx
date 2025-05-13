/* eslint-disable max-lines-per-function */
import React from 'react';

import { Helmet } from 'react-helmet-async';

import { NavigationBar, ContactsList } from '../../components';
import { ProjectCard } from './Components';

/**
 * Renders the navigation bar and contacts list.
 *
 * @returns {JSX.Element} The JSX element containing the navigation bar and contacts list.
 */
const navigationBarAndContacts = (): JSX.Element => (
  <React.Fragment>
    <div className="fixed top-10 pl-5 xl:pl-20">
      <NavigationBar activeBar={3} />
    </div>
    <div className="fixed bottom-0 pl-5 pb-0 md:pb-10 xl:pl-20 w-screen">
      <ContactsList />
    </div>
  </React.Fragment>
);

/**
 * Metadata for the About page.
 * @returns {JSX.Element}
 */
const renderMetaData = (): JSX.Element => (
  <Helmet>
    <meta name="description" content="Full Stack Engineer - Project Page" />
    <meta name="keywords" content="React, JavaScript, Node.js, Full Stack Developer" />
    <title>Project</title>
  </Helmet>
);

/**
 * Renders the Home page component.
 *
 * @returns {JSX.Element} The JSX element for the Home page.
 */
const Project = (): JSX.Element => {
  const ProjectCardList = [
    {
      imageSource: '/assets/raihan.jpg',
      title: 'Online Coffee Hub',
      desc: 'Aug 2023 - Current',
      github: {
        be: '',
        fe: ''
      },
      status: {
        fe: true,
        be: false,
        overall: false
      }
    },
  ];;
  return (
    <div className="bg-black min-h-screen">
      {renderMetaData()}
      {navigationBarAndContacts()}
      <div className='pt-40 pl-20'>
      {ProjectCard(ProjectCardList[0])}
      </div>
    </div>
  );
};

export default Project;
