import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchContactsDefault() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function fetchAddContacts(name, number) {
  const { data } = await axios.post('/contacts', {
    id: uuidv4(),
    name: name,
    number: number,
  });

  return data;
}

export async function fetchDeleteContacts(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}
