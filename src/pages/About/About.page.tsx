import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBriefcase, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import OrganizationExperience from '../../data/Organization.data';
import WorkandEducationData from '../../data/WorkandEducationData';
import { NavigationBar, ContactsList, GeneralText } from '../../components';

import { ArrayInfoItem, SectionContainerType } from './AboutPage.type';
import { TechStack, ExperienceCard } from './components';

const aboutText = `Full Stack Engineer with 3+ years of experience in web and mobile development, skilled in JavaScript, React, React Native, Next.js, and Node.js.`;
const aboutText2 = `Passionate about problem-solving, modern web architecture, and always exploring new technologies.`;

const personalInfoItems: ArrayInfoItem = [
  { icon: <FaBriefcase />, text: 'Fullstack Engineer' },
  { icon: <FaHome />, text: 'Bekasi, Indonesia' },
  { icon: <MdEmail />, text: 'raihanirvana13@gmail.com' }
];

/**
 * Renders the fixed navigation bar and contact list.
 * @returns {JSX.Element}
 */
const renderFixedHeaderAndContacts = (): JSX.Element => (
  <React.Fragment>
    <div className="fixed top-10 pl-5 lg:pl-5 xl:pl-20">
      <NavigationBar activeBar={2} />
    </div>
    <div className="mt-10 xl:fixed xl:bottom-0 w-screen px-5 xl:pb-10 xl:px-20">
      <ContactsList />
    </div>
  </React.Fragment>
);

/**
 * Renders personal information (name, profession, location, email).
 * @returns {JSX.Element}
 */
const renderPersonalInformation = (): JSX.Element => (
  <div>
    <GeneralText text="Profile Overview" customStyle='text-center text-3xl font-bold' />
    <GeneralText text="Raihan Irvana" customStyle='text-center text-xl font-bold pt-10' />
    {personalInfoItems.map((item, idx) => (
      <div key={idx} className='flex items-center gap-2 pt-5 text-white'>
        {item.icon}
        <GeneralText text={item.text} />
      </div>
    ))}
  </div>
);


/**
 * Renders personal "About Me" section.
 * @returns {JSX.Element} The JSX element of the about section.
 */
const renderAboutSection = (): JSX.Element => (
  <div>
    <GeneralText text="ABOUT" customStyle="text-xl font-bold text-center" />
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
      customStyle="text-xl font-bold text-center pb-10"
    />
    <TechStack />
  </div>
);

/**
 * Renders job and education experience.
 * @returns {JSX.Element}
 */
const renderWorkAndEducationExperience = (): JSX.Element => (
  <div className='pt-10'>
    {WorkandEducationData.map((data, idx) => (
      <div key={idx}>
        <ExperienceCard
          title={data.title}
          date={data.date}
          role={data.role}
          description={data.description}
          border={data.border}
          isActive={data.isActive} />
      </div>
    ))}
  </div>
);

/**
 * Renders organization experience.
 * @returns {JSX.Element}
 */
const renderOrganizationExperience = (): JSX.Element => (
  <div className='pt-10'>
    {OrganizationExperience.map((data, idx) => (
      <div key={idx}>
        <ExperienceCard
          title={data.title}
          date={data.date}
          role={data.role}
          description={data.description}
          border={data.border} />
      </div>
    ))}
  </div>
);

/**
 * Renders card container.
 * @returns {JSX.Element}
 */
const SectionContainer = ({children}: SectionContainerType): JSX.Element => (
  <div className="bg-[#0f0f0f] rounded-2xl p-6 shadow-lg shadow-blue-600/40 h-full">
    {children}
  </div>
);

/**
 * Renders left card containing personal info, about, and tech stack.
 * @returns {JSX.Element}
 */
const renderProfileOverview = (): JSX.Element => (
  <div className='flex-[1] min-w-0'>
    <SectionContainer>
      {renderPersonalInformation()}
      <hr className="border-t border-gray-300 my-4" />
      {renderAboutSection()}
      <hr className="border-t border-gray-300 my-4" />
      {renderTechnologyStack()}
    </SectionContainer>
  </div>
);

/**
 * Renders all work experiences.
 * @returns {JSX.Element}
 */
const renderWorkExperienceAndEducationSection = (): JSX.Element => (
  <div className='flex-[2] min-w-0'>
    <SectionContainer>
      <GeneralText text='Work Experience and Education' customStyle='text-3xl font-bold text-center' />
      {renderWorkAndEducationExperience()}
    </SectionContainer>
  </div>
);

/**
 * Renders education and organization experiences.
 * @returns {JSX.Element}
 */
const renderOrganizationSection = (): JSX.Element => (
  <div className='flex-[1] min-w-0'>
    <SectionContainer>
      <GeneralText text='Organization' customStyle='text-3xl font-bold text-center' />
      {renderOrganizationExperience()}
    </SectionContainer>
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
  <div className="bg-black min-h-screen">
    {renderMetaData()}
    <div className='flex flex-col w-screen pt-40 gap-10 lg:gap-5 px-5 xl:px-0 xl:gap-5 lg:flex-row xl:pr-20 xl:pl-20'>
      {renderProfileOverview()}
      {renderWorkExperienceAndEducationSection()}
      {renderOrganizationSection()}
    </div>
    {renderFixedHeaderAndContacts()}
  </div>
);

export default About;
