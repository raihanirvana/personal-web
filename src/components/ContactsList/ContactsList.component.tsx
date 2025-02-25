import ContactsListItem from '../../data/ContactsList.data';

import { ContactList } from './ContactsList.component.type';

/**
 * function to make contact list
 *
 * @returns its return contacts list component
 */
const ContactsList = (): JSX.Element => (
  <div className="flex items-center gap-3">
    {ContactsListItem.map((contact: ContactList) => (
      <button
        aria-label={contact.label}
        onClick={() => window.open(contact.href)}
        key={contact.key}
        className="text-white text-3xl hover:cursor-pointer"
      >
        {contact.icon}
      </button>
    ))}
  </div>
);

export default ContactsList;
