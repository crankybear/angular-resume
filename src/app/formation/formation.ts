export class Formation {

  ecole: string;
  titre: string;
  annee: string;
  competences: string;
  back: string;
  front: string;
  database: string;
  mobile: string;

  constructor(obj?: Partial<Formation>) {
    Object.assign(this, obj);
  }
}

