import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

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
];

export default ContactsListItem;
