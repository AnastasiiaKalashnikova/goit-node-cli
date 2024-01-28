const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");
console.log(contactsPath);

async function listContacts() {
  const contacts = fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const allContacts = await listContacts();
  const contact = allContacts.find((item) => item.id === contactId);
  return contact || null;
}

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const deletedContact = allContacts.find((contact.id = contactId));

  const filteredContacts = allContacts.filter(contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(filteredContacts, null, 2));
  return deletedContact || null;
}

async function addContact(name, email, phone) {
  const allContacts = await listContacts();

  const newContact = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
