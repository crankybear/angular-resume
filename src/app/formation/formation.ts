export class Formation {

  ecole: string;
  titre: string;
  niveau: string;
  annee: string;
  competences: string;
  back: string;
  front: string;
  database: string;
  mobile: string;
  logo: string;

  constructor(obj?: Partial<Formation>) {
    Object.assign(this, obj);
  }
}

