import yargs from "yargs";
import * as contactsservice from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsservice.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const oneContact = await contactsservice.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsservice.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactsservice.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const { argv } = yargs(process.argv.splice(2));

invokeAction(argv);
