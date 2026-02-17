import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function firstValueFromAxios<T, D>(source: Observable<T>): Promise<T | D> {
  return new Promise<T | D>((resolve, reject) => {
    source
      .pipe(
        catchError((err) => {
          console.log('ERRR in transformer1', err.response);

          const errToSend = JSON.stringify(err.response);
          reject(errToSend);
          return EMPTY;
        }),
      )
      .subscribe((resp) => {
        resolve(resp);
      });
  });
}
