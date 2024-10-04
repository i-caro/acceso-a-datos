import { Injectable } from '@angular/core';
import { DataService } from '../interfaces/data-service';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends DataService<Person>{

  constructor(
    private dataSvc: DataService<Person>
  ){
    super();
    console.log('PeopleService created.')
    this.dataSvc.create({name: 'Iván', surname: 'Caro', age:19})
    next:(value: any)=>{
      console.log('Persona añadida correctamente.')
      console.log(value)
    }
  }

  public override create(value: Person): Observable<Person> {
    return this.dataSvc.create(value);
  }
  public override requestAll(): Observable<Person[]> {
    return this.dataSvc.requestAll();
  }
  public override requestById(id: string): Observable<Person | null> {
    return this.dataSvc.requestById(id);
  }
  public override update(id: string, value: Person): Observable<Person | null> {
    return this.dataSvc.update(id, value);
  }
  public override delete(id: string): Observable<Person | null> {
    return this.dataSvc.delete(id);
  }

}
