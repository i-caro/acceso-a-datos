import { Injectable } from '@angular/core';
import { DataService } from '../interfaces/data-service';
import { Person } from '../interfaces/person';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Model } from '../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService<T> extends DataService<Model> {

  records:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor(){
    super();
    console.log('FireBaseService created')
  }

  create(value: Person): Observable<Person> {

  }
  requestAll(): Observable<Person[]> {

  }
  requestById(id: string): Observable<Person | null> {
    
  }
  update(id: string, value: Person): Observable<Person | null> {
    
  }
  delete(id: string): Observable<Person | null> {
    
  }
}
