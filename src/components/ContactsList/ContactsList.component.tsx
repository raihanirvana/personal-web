import ContactsListItem from '../../data/ContactsList.data';
import { GeneralText } from '../';

import { ContactList } from './ContactsList.component.type';

/**
 * function to render icon
 *
 * @returns its return icon element
 */
const renderIcon = (): JSX.Element => (
  <div>
    {ContactsListItem.map((contact: ContactList) => (
      <button
        aria-label={contact.label}
        onClick={() => window.open(contact.href)}
        key={contact.key}
        className="text-white mr-2 sm:text-3xl hover:cursor-pointer"
      >
        {contact.icon}
      </button>
    ))}
  </div>
);

/**
 * function to make contact list
 *
 * @returns its return contacts list component
 */
const ContactsList = (): JSX.Element => (
  <div className="flex items-center justify-between">
    {renderIcon()}
    <div>
      <GeneralText
        text="*Showcasing my CSS and component-building skills — no third-party tools used."
        customStyle="text-[8px] sm:text-sm"
      />
    </div>
  </div>
);

export default ContactsList;
