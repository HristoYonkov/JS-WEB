import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  pure: true // Default Change detection, (only if refferences are changed!) "'false' is checking always"
})
export class ReducePipe<T, I> implements PipeTransform {

  transform(array: T[], reduceFn: (acc: any, curr: T) => any, initialValue: I): any {
    if (initialValue !== undefined) {
      return array?.reduce(reduceFn, initialValue);
    }
    return array?.reduce(reduceFn);
  }

}
