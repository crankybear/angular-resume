export class Soft {
  skill1: string;
  skill2: string;
  skill3: string;

  constructor(obj?: Partial<Soft>) {
    Object.assign(this, obj);
  }
}
