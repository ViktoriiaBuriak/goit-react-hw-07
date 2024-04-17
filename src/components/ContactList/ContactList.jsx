import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <Contact contacts={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
