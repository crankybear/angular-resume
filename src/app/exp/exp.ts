export class Exp {
  entreprise: string;
  job: string;
  debut: string;
  fin: string;
  ville: string;

  constructor(obj?: Partial<Exp>) {
    Object.assign(this, obj);
  }
}
