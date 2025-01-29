import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaProjectDiagram,
} from 'react-icons/fa';

import { HeaderList } from '../components/NavigationBar/NavigationBar.component.type';

const headersList: HeaderList = [
  { key: 1, title: 'Home', icon: <FaHome /> },
  { key: 2, title: 'About', icon: <FaInfoCircle /> },
  { key: 3, title: 'Resume', icon: <FaBriefcase /> },
  { key: 4, title: 'Project', icon: <FaProjectDiagram /> },
];

export default headersList;
