import React from 'react';

import { Helmet } from 'react-helmet-async';

import { NavigationBar, ContactsList } from '../../components'

import ResumeCard from './components/ResumeCard/ResumeCard.component';

/**
 * Renders the navigation bar and contact list.
 *
 * @returns {JSX.Element} The JSX element containing the navigation bar and contact list.
 */
const headerAndContactList = (): JSX.Element => (
  <React.Fragment>
    <div className="fixed top-10 left-60">
      <NavigationBar activeBar={3} />
    </div>
    <div className="fixed bottom-0 left-60 pb-10">
      <ContactsList />
    </div>
  </React.Fragment>
);

const Resume = () => (
  <div className="bg-black h-screen">
    <Helmet>
      <meta name="description" content="Full Stack Engineer - Resume Page" />
      <meta name="keywords" content="React, JavaScript, Node.js, Full Stack Developer" />
      <title>Resume</title>
    </Helmet>
    {headerAndContactList()}
  </div>
);

export default Resume;