import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}
  
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
  
  
// import { BehaviorSubject, map, Observable, of, ReplaySubject, Subject } from "rxjs";
  
// OBSERVABLES --- EXAMPLE!!!--------------EXAMPLE!!!----------------EXAMPLE!!!
// Promise.resolve(1000) // --- Promise Container - Only 1 value!!!
// of(1000).pipe()       // --- Observable Container - Many values!!!

// const s$ = new Observable((observer) => {
//   observer.next(100);
//   observer.next(200);
//   observer.next(300);
//   observer.error(new Error('BAD ERROR!'))
// });
// // Every time subscribed a new instance will be created!
// s$.pipe(map((a: any) => a + 1)).subscribe({
//   next: (value) => console.log(value),
//   error: (error) => console.log(error)
// });


// function interval(dealy: number, count: number | null = null) { //---------- Example for cold Observer with private instance
//   let counter = 0;
//   return new Observable(observer => {
//     const id = setInterval(() => {
//       if (count === counter) {
//         observer.complete()
//         return;
//       }
//       observer.next(counter++)
//     }, dealy)

//     return () => {
//       clearInterval(id)
//     }
//   })
// }
// const sub = interval(1000, 5).subscribe({
//   next: (value) => console.log(value),
//   error: (value) => console.log(value),
//   complete: () => {
//     console.log('Observable complete!')
//   }
// });
// const mub = interval(2000).subscribe(console.log);
// setInterval(() => {
//   mub.unsubscribe();
// }, 10000);


// SUBJECTS --- EXAMPLE!!!--------------EXAMPLE!!!----------------EXAMPLE!!!
// const subj$$ = new Subject(); // ---------- Example for hot Observer with shared instance
// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);
// subj$$.next(100);

// setTimeout(() => {
//   subj$$.next(200);
//   subj$$.subscribe(console.log);
//   setTimeout(() => {
//     subj$$.next(300);
//   }, 1000)
// }, 1000)

// -------------- Behavior Subject - Example --------------
// const bSubject$$ = new BehaviorSubject(1); // Subject with Innitial Value!
// bSubject$$.subscribe(console.log);
// setTimeout(() => {
//   bSubject$$.subscribe(console.log);
//   bSubject$$.next(100)
//   setTimeout(() => {
//     bSubject$$.subscribe(console.log);
//   }, 1000)
// }, 1000)


// -------------- Reply Subject - Example --------------
// const rSubject$$ = new ReplaySubject(5); // Take last Buffer values (5), if overflow will take last number values!
// rSubject$$.next(100);
// rSubject$$.subscribe(console.log);

// rSubject$$.next(200);
// rSubject$$.next(300);
// rSubject$$.next(400);
// console.log('========');
// rSubject$$.subscribe(console.log);


// -------------- Async Subject - Example --------------
// Its They take the last value that have beed andded and pass it to the subscribers!