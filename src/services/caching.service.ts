import { Observable, race, ReplaySubject, tap } from 'rxjs';

import { cookieService } from './cookie.service';

export interface CacheOptions {
  ttl: number;
}

export function Cache(options: CacheOptions) {
  const { ttl } = options;
  return (target: any, propertyKey: string, descriptor: any) => {
    const originalFunction = descriptor.value;

    descriptor.value = function (...args: any) {
      // We have the args let us create a unique key for function_args
      let key = `${propertyKey}_cached`;
      for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        for (const argKey in arg) {
          if (arg.hasOwnProperty(argKey)) {
            key = `${key}_${argKey}_${JSON.stringify(arg[argKey])}`;
          }
        }
      }

      //Prepare the subject that will reply from localstorage
      console.log(key);
      let subject: ReplaySubject<any> | null = null;
      const cachedData = cookieService.get(key);
      if (cachedData) {
        subject = new ReplaySubject();
        subject.next(JSON.parse(cachedData));
      }

      if (subject) {
        // Returned the cached observable
        return race(subject);
      } else {
        // We do not have any cache so we return the original function just as called
        const req: Observable<any> = originalFunction.apply(this, args).pipe(
          tap((response) => {
            // We have a response store it in the localstorage
            cookieService.set(key, JSON.stringify(response), ttl);
          }),
        );

        return req;
      }
    };
  };
}
