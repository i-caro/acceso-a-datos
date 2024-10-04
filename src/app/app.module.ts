import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataInMemoryService } from './core/services/data-in-memory.service';
import  { FireBaseService } from './core/services/Firebase-service';


export function DataServiceFactory(backend:string){
  switch(backend){
    case 'InMemory':
      return new DataInMemoryService();
    case 'Firebase':
      return new FireBaseService();
    default:
      throw new Error('Not implemented.');
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: 'backend', useValue: 'InMemory'},
    {provide: DataInMemoryService, deps: ['backend'], useFactory: DataServiceFactory,}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
