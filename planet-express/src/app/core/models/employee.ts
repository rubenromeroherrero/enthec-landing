export class Employee {
  name: string;

  constructor(item?: any) {
    this.name = item?.name ?? '';
  }
}
