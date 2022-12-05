// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { map, Observable, of } from "rxjs";

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


// OBSERVABLES --- EXAMPLE!!!--------------EXAMPLE!!!----------------EXAMPLE!!!
Promise.resolve(1000) // --- Promise Container - Only 1 value!!!
of(1000).pipe()       // --- Observable container - Many values!!!

const s$ = new Observable((observer) => {
  observer.next(100);
  observer.next(200);
  observer.next(300);
  observer.error(new Error('BAD ERROR!'))
});
console.log(s$);
// Every time subscribed a new instance will be created!
s$.pipe(map((a: any) => a + 1)).subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error)
});