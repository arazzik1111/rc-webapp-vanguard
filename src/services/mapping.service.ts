// import { CachingService } from "./caching.service";
// import { EMPTY, Observable, zip } from "rxjs";
//
// export enum MappingServiceKeys {
//   Person = "Person",
// }
//
// export interface MappingConfig {
//   from: string;
//   to: MappingServiceKeys;
//   cachingService: CachingService;
//   subKey?: string;
//   mappingData?: string[] | string;
// }
//
// const getCachingServiceFn = (service: CachingService, key: MappingServiceKeys) => {
//   switch (key) {
//     default:
//       return () => EMPTY;
//   }
// };
//
// class MappingService {
//   getMapped(config: MappingConfig[], data: string | string[]): Observable<Record<string, string>> {
//     return new Observable<any>((observer) => {
//       // populate the mapping config
//       //get all requests
//
//       const requestsToDo: Observable<Record<'value', string>>[] = [];
//       const requestsToUnique = [];
//       const pushed: MappingServiceKeys[] = [];
//
//       for (const conf of config) {
//         if (!pushed.includes(conf.to)) {
//           requestsToUnique.push(getCachingServiceFn(conf.cachingService, conf.to)());
//           pushed.push(conf.to);
//         }
//       }
//
//       // first zip is to trigger all request that are http only once
//       // we do not care what the first request returns since caching service caches it
//       // than we can request again and we are sure they are in the cache
//       zip(...requestsToUnique).subscribe(() => {
//         for (const conf of config) {
//           requestsToDo.push(getCachingServiceFn(conf.cachingService, conf.to)());
//         }
//
//         zip(...requestsToDo).subscribe((responses) => {
//           config.map((conf, index) => {
//             return (conf.mappingData = responses[index].value);
//           });
//           observer.next(this.mapValues(config, data));
//           observer.complete();
//         });
//       });
//     });
//   }
//
//   private mapValues = (config: MappingConfig[], data: any) => {
//     for (const conf of config) {
//       let toMod = data;
//
//       if (!Array.isArray(toMod) && conf.subKey && toMod[conf.subKey]) {
//         toMod = data[conf.subKey];
//       }
//
//       if (Array.isArray(toMod)) {
//         for (let val of toMod) {
//           val = this.mapValues(config, val);
//         }
//       } else {
//         if (toMod) {
//           toMod[conf.from] = Array.isArray(conf.mappingData) && conf.mappingData.find((x: any) => {
//             return x.ID === toMod[`${conf.from}ID`];
//           });
//         }
//       }
//     }
//     return data;
//   };
// }
//
// export const mappingService = new MappingService();
// import { CachingService } from "./caching.service";
// import { EMPTY, Observable, zip } from "rxjs";
//
// export enum MappingServiceKeys {
//   Person = "Person",
// }
//
// export interface MappingConfig {
//   from: string;
//   to: MappingServiceKeys;
//   cachingService: CachingService;
//   subKey?: string;
//   mappingData?: string[] | string;
// }
//
// const getCachingServiceFn = (service: CachingService, key: MappingServiceKeys) => {
//   switch (key) {
//     default:
//       return () => EMPTY;
//   }
// };
//
// class MappingService {
//   getMapped(config: MappingConfig[], data: string | string[]): Observable<Record<string, string>> {
//     return new Observable<any>((observer) => {
//       // populate the mapping config
//       //get all requests
//
//       const requestsToDo: Observable<Record<'value', string>>[] = [];
//       const requestsToUnique = [];
//       const pushed: MappingServiceKeys[] = [];
//
//       for (const conf of config) {
//         if (!pushed.includes(conf.to)) {
//           requestsToUnique.push(getCachingServiceFn(conf.cachingService, conf.to)());
//           pushed.push(conf.to);
//         }
//       }
//
//       // first zip is to trigger all request that are http only once
//       // we do not care what the first request returns since caching service caches it
//       // than we can request again and we are sure they are in the cache
//       zip(...requestsToUnique).subscribe(() => {
//         for (const conf of config) {
//           requestsToDo.push(getCachingServiceFn(conf.cachingService, conf.to)());
//         }
//
//         zip(...requestsToDo).subscribe((responses) => {
//           config.map((conf, index) => {
//             return (conf.mappingData = responses[index].value);
//           });
//           observer.next(this.mapValues(config, data));
//           observer.complete();
//         });
//       });
//     });
//   }
//
//   private mapValues = (config: MappingConfig[], data: any) => {
//     for (const conf of config) {
//       let toMod = data;
//
//       if (!Array.isArray(toMod) && conf.subKey && toMod[conf.subKey]) {
//         toMod = data[conf.subKey];
//       }
//
//       if (Array.isArray(toMod)) {
//         for (let val of toMod) {
//           val = this.mapValues(config, val);
//         }
//       } else {
//         if (toMod) {
//           toMod[conf.from] = Array.isArray(conf.mappingData) && conf.mappingData.find((x: any) => {
//             return x.ID === toMod[`${conf.from}ID`];
//           });
//         }
//       }
//     }
//     return data;
//   };
// }
//
// export const mappingService = new MappingService();
