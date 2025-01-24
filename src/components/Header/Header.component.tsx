import React from 'react';

import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";

import { HeaderList } from "./Header.type";

const headers: HeaderList = [
  { key: 1, title: "Home", icon: <FaHome /> },
  { key: 2, title: "About", icon: <FaInfoCircle /> },
  { key: 3, title: "Resume", icon: <FaBriefcase /> },
  { key: 4, title: "Project", icon: <FaProjectDiagram /> },
];

/**
 * Renders a header element with optional styles for first or last headers.
 * 
 * @param {string} title - The title text for the header.
 * @param {JSX.Element} icon - The title text for the header.
 * @returns {JSX.Element} A JSX element representing the header with the specified title and styling.
 */
const renderHeader = (
  title: string,
  icon: JSX.Element,
): JSX.Element => (
  <div
    className={`w-10 text-white overflow-hidden text-center p-4 pl-2 hover:overflow-visible hover:w-26 transition-all duration-300 ease-in-out hover:cursor-pointer`}
  >
    <button className="flex items-center justify-center gap-4 hover:cursor-pointer">
      <span className="text-xl mb-1">{icon}</span>
      <span className="text-sm">{title}</span>
    </button>
  </div>
);
/**
 * A functional component that renders a list of headers.
 * 
 * @returns {JSX.Element} A JSX element containing the header list.
 */
const Header = (): JSX.Element => (
  <div className="fixed top-1/2 left-0 transform -translate-y-1/2 ml-10">
    {headers.map(({ title, icon, key }) => (
      <React.Fragment key={key}>
        {renderHeader(title, icon)}
      </React.Fragment>
    ))}
  </div>
);

export default Header;