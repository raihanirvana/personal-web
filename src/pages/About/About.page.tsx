import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBriefcase, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { NavigationBar, ContactsList, GeneralText } from '../../components';

import { ArrayInfoItem } from './AboutPage.type';
import { TechStack, ExperienceCard } from './components';

const aboutText = `Full Stack Engineer with 3+ years of experience in web and mobile development, skilled in JavaScript, React, React Native, Next.js, and Node.js.`;
const aboutText2 = `Passionate about problem-solving, modern web architecture, and always exploring new technologies.`;

const personalInfoItems: ArrayInfoItem = [
  { icon: <FaBriefcase className='text-white' />, text: 'Fullstack Engineer' },
  { icon: <FaHome className='text-white' />, text: 'Bekasi, Indonesia' },
  { icon: <MdEmail className='text-white' />, text: 'raihanirvana13@gmail.com' }
];

/**
 * Renders the fixed navigation bar and contact list.
 * @returns {JSX.Element}
 */
const renderFixedHeaderAndContacts = (): JSX.Element => (
  <React.Fragment>
    <div className="fixed top-10 left-20">
      <NavigationBar activeBar={2} />
    </div>
    <div className="fixed bottom-0 left-20 pb-10 w-full">
      <ContactsList />
    </div>
  </React.Fragment>
);

/**
 * Renders personal "About Me" section.
 * @returns {JSX.Element} The JSX element of the about section.
 */
const renderAboutSection = (): JSX.Element => (
  <div>
    <GeneralText text="ABOUT" customStyle="text-3xl font-bold text-center" />
    <GeneralText text={aboutText} customStyle="pt-5 text-justify" />
    <GeneralText text={aboutText2} customStyle="text-justify" />
  </div>
);

/**
 * Renders the list of technology stack.
 * @returns {JSX.Element}
 */
const renderTechnologyStack = (): JSX.Element => (
  <div>
    <GeneralText
      text="Technology Stack"
      customStyle="text-3xl font-bold text-center pb-10"
    />
    <div className="flex justify-center">
      <div className="w-full max-w-[200px]">
        <TechStack width={40} />
      </div>
    </div>
  </div>
);

/**
 * Renders personal information (name, profession, location, email).
 * @returns {JSX.Element}
 */
const renderPersonalInformation = (): JSX.Element => (
  <div>
    <GeneralText text="Raihan Irvana" customStyle='text-center text-3xl font-bold' />
    {personalInfoItems.map((item, idx) => (
      <div key={idx} className='flex items-center gap-2 pt-5'>
        {item.icon}
        <GeneralText text={item.text} />
      </div>
    ))}
  </div>
);

/**
 * Renders current job experience.
 * @returns {JSX.Element}
 */
const renderCurrentWorkExperience = (): JSX.Element => (
  <div className='pt-10'>
    <ExperienceCard 
      title="Fullstack Engineer / PT Bank SMBC Indonesia Tbk"
      date="Aug 2023 - Current"
      role="Full-time Employee"
      isActive
      border
      description={`I work as a Fullstack Engineer at PT Bank SMBC Indonesia Tbk. 
        I develop new features based on assigned tickets, provide suggestions for feature improvements, 
        and handle bug fixes and production issues.`}
    />
  </div>
);

/**
 * Renders previous job experience.
 * @returns {JSX.Element}
 */
const renderPreviousWorkExperience = (): JSX.Element => (
  <div>
    <ExperienceCard 
      title="Environmental Technician / PT Pramatek Andal Analitika"
      date="Nov 2022 - Jan 2023"
      role="Freelance"
      border
      description='Responsible for collecting air, water, humidity, and noise data samples in specific areas.'
    />
  </div>
);

/**
 * Renders internship experience.
 * @returns {JSX.Element}
 */
const renderInternshipExperience = (): JSX.Element => (
  <div>
    <ExperienceCard 
      title='Research Assistant / BRIN (Badan Riset dan Inovasi Nasional)'
      date="Sep 2021 - Nov 2021"
      role="Internship"
      border
      description='Part of the Electric Rickshaw Project, focusing on Battery Management System development and testing.'
    />
  </div>
);

/**
 * Renders most recent organization experience.
 * @returns {JSX.Element}
 */
const renderLatestOrganization = (): JSX.Element => (
  <div className='mt-10'>
    <ExperienceCard 
      title="ILMMIPA / University of Lampung"
      date="Apr 2021 - Feb 2022"
      role="Central Coordinator Social Community"
      border
      description='Organized social and community events as central coordinator in Region 1.'
    />
  </div>
);

/**
 * Renders second organization experience.
 * @returns {JSX.Element}
 */
const renderSecondOrganization = (): JSX.Element => (
  <div>
    <ExperienceCard 
      title="BEM FMIPA / University of Lampung"
      date="Feb 2021 - Feb 2022"
      role="Head of External Relations"
      border
      description='Managed collaborations and partnerships with internal and external organizations.'
    />
  </div>
);

/**
 * Renders earlier organization experience.
 * @returns {JSX.Element}
 */
const renderThirdOrganization = (): JSX.Element => (
  <div>
    <ExperienceCard 
      title="HIMAFI / University of Lampung"
      date="Nov 2018 - Dec 2020"
      role="Member of Cadre Division"
      description='Involved in recruitment, training, and development programs for new members.'
    />
  </div>
);

/**
 * Renders education history.
 * @returns {JSX.Element}
 */
const renderEducationHistory = (): JSX.Element => (
  <div>
    <ExperienceCard 
      title="Physics / University of Lampung"
      date="Aug 2018 - Nov 2022"
      role="Bachelor of Science"
      isActive
      description='Studied Instrumentation Physics and C++ for Arduino. Actively participated in student organizations.'
    />
  </div>
);

/**
 * Renders education and organization experiences.
 * @returns {JSX.Element}
 */
const renderOrganizationSection = (): JSX.Element => (
  <div className='flex flex-1'>
    <div className="bg-[#0f0f0f] rounded-2xl p-6 shadow-lg shadow-blue-600/40">
      <GeneralText text='Organization' customStyle='text-3xl font-bold text-center' />
      {renderLatestOrganization()}
      {renderSecondOrganization()}
      {renderThirdOrganization()}
    </div>
  </div>
);

/**
 * Renders all work experiences.
 * @returns {JSX.Element}
 */
const renderWorkExperienceAndEducationSection = (): JSX.Element => (
  <div className='flex flex-[2]'>
    <div className="bg-[#0f0f0f] rounded-2xl p-6 shadow-lg shadow-blue-600/40">
      <GeneralText text='Work Experience and Education' customStyle='text-3xl font-bold text-center' />
      {renderCurrentWorkExperience()}
      {renderPreviousWorkExperience()}
      {renderInternshipExperience()}
      {renderEducationHistory()}
    </div>
  </div>
);

/**
 * Renders left card containing personal info, about, and tech stack.
 * @returns {JSX.Element}
 */
const renderLeftSidebarContent = (): JSX.Element => (
  <div className='flex flex-1'>
    <div className="bg-[#0f0f0f] rounded-2xl p-6 shadow-lg shadow-blue-600/40">
      {renderPersonalInformation()}
      <hr className="border-t border-gray-300 my-4" />
      {renderAboutSection()}
      <hr className="border-t border-gray-300 my-4" />
      {renderTechnologyStack()}
    </div>
  </div>
);

/**
 * Metadata for the About page.
 * @returns {JSX.Element}
 */
const renderMetaData = (): JSX.Element => (
  <Helmet>
    <meta name="description" content="Full Stack Engineer - About Page" />
    <meta name="keywords" content="React, JavaScript, Node.js, Full Stack Developer" />
    <title>About Me</title>
  </Helmet>
);

/**
 * Main component for About Page.
 * @returns {JSX.Element}
 */
const About = (): JSX.Element => (
  <div className="bg-black h-screen">
    {renderMetaData()}
    <div className="flex">
      <div className='flex pt-40 mr-20 gap-5 ml-20'>
        {renderLeftSidebarContent()}
        {renderWorkExperienceAndEducationSection()}
        {renderOrganizationSection()}
      </div>
    </div>
    {renderFixedHeaderAndContacts()}
  </div>
);

export default About;
