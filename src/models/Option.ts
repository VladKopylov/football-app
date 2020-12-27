export class Option {
  id: number;
  value: string;

  constructor(data: { id: number; value: string }) {
    this.id = data.id;
    this.value = data.value;
  }
}
