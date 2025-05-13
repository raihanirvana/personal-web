import {
  FaHome,
  FaBriefcase,
  FaProjectDiagram,
} from 'react-icons/fa';

import { HeaderList } from '../components/NavigationBar/NavigationBar.component.type';

const headersList: HeaderList = [
  { key: 1, title: 'Home', icon: <FaHome />, navigation: '/' },
  { key: 2, title: 'Resume', icon: <FaBriefcase />, navigation: '/resume' },
  { key: 3, title: 'Project', icon: <FaProjectDiagram />, navigation: '/project' },
];

export default headersList;
