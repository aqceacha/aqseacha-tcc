import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any = [];

  constructor() { }

  setData(index: string, data: any): boolean {
    if (index) {
      this.data[index] = data;
      return true;
    }
    return false;
  }

  getData(index: string): any {
    if (index) {
      return this.data[index];
    }
    return null;
  }

  removeData(index: string): boolean {
    return delete this.data[index];
  }
}
