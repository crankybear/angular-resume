export class Soft {
  skill: string;
  logo: string;

  constructor(obj?: Partial<Soft>) {
    Object.assign(this, obj);
  }
}
