import { Injectable } from '@angular/core';
import { DataService } from '../interfaces/data-service';
import { Person } from '../interfaces/person';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Model } from '../interfaces/model';

@Injectable({
  providedIn: 'root'
})

export class DataInMemoryService<T extends Model> extends DataService<T> {
  
  
  private override _records:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  public override records$:Observable<T[]> = this._records.asObservable();

  private generateAlphanumericCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 10;
    let code = '';

    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        code += chars[randomIndex];
    }

    return code;
}

  constructor(){
    super();
    console.log('DataInMemoryService created')
  }

  public override create(value: T): Observable<T> {
    return new Observable((observer => {
      const _records = this._records.value
      this._records.next([..._records, value])
      observer.next(value)
    }))
  }

  public override requestAll(): Observable<T[]> {
    return new Observable((observer =>{
      observer.next(this._records.value)
      observer.complete
    }))
  }
  public override requestById(id: string): Observable<Model | null> {
    throw new Error('Method not implemented.');
  }
  public override update(id: string, value: Model): Observable<Model | null> {
    throw new Error('Method not implemented.');
  }
  public override delete(id: string): Observable<Model | null> {
    throw new Error('Method not implemented.');
  }
}
