import React from 'react';

import { Helmet } from 'react-helmet-async';

import { NavigationBar, ContactsList, GeneralText } from '../../components';

import TechStack from './components/TechStack/TechStack.component';

const aboutText = `Full Stack Engineer with deep expertise in the JavaScript ecosystem and over three years of experience in full-stack web and mobile development. Specializing in building scalable, high-performance applications using React, React Native, Next.js, and Node.js.`;

const aboutText2 =
  'Passionate about problem-solving and modern web architecture, with a strong background in Agile methodologies and collaborative team environments. Always eager to explore new technologies and push the boundaries of web and mobile development.';

/**
 * Renders the "About" section content.
 *
 * @returns {JSX.Element} The JSX element containing the about content.
 */
const aboutContent = (): JSX.Element => (
  <div className="flex-1 pl-60 pt-60">
    <GeneralText
      text="ABOUT"
      customStyle="border-b-2 border-blue-600 text-3xl font-bold text-center w-fit"
    />
    <GeneralText
      text="raihanirvana13@gmail.com"
      customStyle="font-light pt-2"
    />
    <GeneralText text={aboutText} customStyle="pt-10 text-xl overflow-hidden" />
    <GeneralText text={aboutText2} customStyle="text-xl overflow-hidden" />
  </div>
);

/**
 * Renders the "Technology Stack" section.
 *
 * @returns {JSX.Element} The JSX element containing the technology stack.
 */
const techStack = (): JSX.Element => (
  <div className="flex-1 flex-col flex items-center">
    <GeneralText
      text="Technology Stack"
      customStyle="text-3xl font-bold pb-30 pt-60"
    />
    <TechStack />
  </div>
);

/**
 * Renders the navigation bar and contact list.
 *
 * @returns {JSX.Element} The JSX element containing the navigation bar and contact list.
 */
const headerAndContactList = (): JSX.Element => (
  <React.Fragment>
    <div className="fixed top-10 left-60">
      <NavigationBar activeBar={2} />
    </div>
    <div className="fixed bottom-0 left-60 pb-10">
      <ContactsList />
    </div>
  </React.Fragment>
);

/**
 * Renders the "About" page.
 *
 * @returns {JSX.Element} The JSX element representing the About page.
 */
const About = (): JSX.Element => (
  <div className="bg-black h-screen">
    <Helmet>
      <meta name="description" content="Full Stack Engineer - About Page" />
      <meta name="keywords" content="React, JavaScript, Node.js, Full Stack Developer" />
      <title>About Me</title>
    </Helmet>
    <div className="flex h-full">
      {aboutContent()}
      {techStack()}
    </div>
    {headerAndContactList()}
  </div>
);

export default About;
