import ContactsListItem from "../../data/ContactsList.data";

import { ContactList } from './ContactsList.component.type'

const ContactsList = (): JSX.Element => (
  <div className="flex items-center gap-3">
    {ContactsListItem.map((contact: ContactList) => (
      <button
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
