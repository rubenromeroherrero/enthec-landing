export class Employee {
  Species: string;
  Age: number;
  Planet: string;
  Profession: string;
  Status: string;
  FirstAppearence: string;
  PicUrl: string;
  Relatives: string;
  VoicedBy: string;
  Name: string;

  constructor(item?: any) {
    this.Species = item?.Species ?? '';
    this.Age = item?.Age ?? '';
    this.Planet = item?.Planet ?? '';
    this.Profession = item?.Profession ?? '';
    this.Status = item?.Status ?? '';
    this.FirstAppearence = item?.FirstAppearence ?? '';
    this.PicUrl = item?.PicUrl ?? '';
    this.Relatives = item?.Relatives ?? '';
    this.VoicedBy = item?.VoicedBy ?? '';
    this.Name = item?.Name ?? '';
  }
}
