import { Injectable } from '@angular/core';
import { dataFake } from '../../data/data';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  getAllIds(): string[] {
    return dataFake.map((item) => item.id);
  }

  getById(id: string) {
    return dataFake.find((item) => item.id === id);
  }
}
