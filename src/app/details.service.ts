import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }
  getService()
  {
    return[
      {"id":1,"name":"Sangam","age":24},
      {"id":2,"name":"Raj","age":29},
      {"id":3,"name":"Manju","age":28},
      {"id":4,"name":"asav","age":25}
    ]

  }
}
