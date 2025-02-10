import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

import { ContactListData } from '../components/ContactsList/ContactsList.component.type'

const ContactsListItem: ContactListData = [
  {
    key: 1,
    icon: <FaInstagram />,
    label: 'instagram',
    href: 'https://www.instagram.com/raihanirvana',
  },
  {
    key: 2,
    icon: <FaLinkedin />,
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/raihanirvana',
  },
  {
    key: 3,
    icon: <FaGithub />,
    label: 'github',
    href: 'https://www.github.com/raihanirvana',
  },
  {
    key: 4,
    icon: <SiUpwork />,
    label: 'upwork',
    href: 'https://www.upwork.com/freelancers/~018bb914b5fff8af20',
  },
];

export default ContactsListItem;
