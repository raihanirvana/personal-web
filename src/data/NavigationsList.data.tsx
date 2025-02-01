import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaProjectDiagram,
} from 'react-icons/fa';

import { HeaderList } from '../components/NavigationBar/NavigationBar.component.type';

const headersList: HeaderList = [
  { key: 1, title: 'Home', icon: <FaHome />, navigation: '/' },
  { key: 2, title: 'About', icon: <FaInfoCircle />, navigation: '/about' },
  { key: 3, title: 'Resume', icon: <FaBriefcase />, navigation: '/resume'},
  { key: 4, title: 'Project', icon: <FaProjectDiagram />, navigation: '/project' },
];

export default headersList;
