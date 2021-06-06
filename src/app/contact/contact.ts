export class Contact {
  nom: string;
  prenom: string;
  avatar: string;
  ddn: string;
  tel: string;
  email: string;
  adresse: string;

  constructor(obj?: Partial<Contact>) {
    Object.assign(this, obj);
  }
}
