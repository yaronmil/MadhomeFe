import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
  loadCustomers() {
    return this.http.get('http://localhost:61666/CustomerList/CustNewAngular');
    // .pipe(
    //   map((res: Response) => { debugger; return res.json()})
    // );
  }
}
