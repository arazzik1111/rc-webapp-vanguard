/* global google */
/* eslint-disable filenames/match-regex */

function reduce(obj: any, fn: any, acc: any): any {
  return Object.keys(obj).reduce((newAcc, key) => {
    return fn(newAcc, obj[key], key);
  }, acc);
}

function forEach(obj: any, fn: any): any {
  Object.keys(obj).forEach((key) => {
    return fn(obj[key], key);
  });
}

export function applyUpdaterToNextProps(
  updaterMap: any,

  prevProps: any,

  nextProps: any,

  instance: any,
): any {
  const map: any = {};

  const iter = (fn: any, key: string): void => {
    const nextValue = nextProps[key];

    if (nextValue !== prevProps[key]) {
      map[key] = nextValue;
      fn(instance, nextValue);
    }
  };

  forEach(updaterMap, iter);

  return map;
}

export function registerEvents(
  props: any,

  instance: any,
  eventMap: Record<string, string>,
): google.maps.MapsEventListener[] {
  const registeredList = reduce(
    eventMap,
    (
      acc: google.maps.MapsEventListener[],
      googleEventName: string,

      onEventName: any,
    ): google.maps.MapsEventListener[] => {
      if (typeof props[onEventName] === 'function') {
        acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
      }

      return acc;
    },
    [],
  );

  return registeredList;
}

function unregisterEvent(registered: google.maps.MapsEventListener): void {
  google.maps.event.removeListener(registered);
}

export function unregisterEvents(events: google.maps.MapsEventListener[] = []): void {
  events.forEach(unregisterEvent);
}

export function applyUpdatersToPropsAndRegisterEvents({
  updaterMap,
  eventMap,
  prevProps,
  nextProps,
  instance,
}: {
  updaterMap: any;
  eventMap: Record<string, string>;

  prevProps: any;

  nextProps: any;

  instance: any;
}): google.maps.MapsEventListener[] {
  const registeredEvents = registerEvents(nextProps, instance, eventMap);

  applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance);

  return registeredEvents;
}
