
export abstract class SmartTableData {
  abstract getData(): any[];
  abstract getOne(id:string | number) : any;
  abstract add(data:any) : any;
  abstract update(data:any) : any;
  abstract remove(id:any) : any;
}
