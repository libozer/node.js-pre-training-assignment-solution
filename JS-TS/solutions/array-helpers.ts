/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(
  source: readonly T[],
  mapper: (item: T, index: number) => R,
): R[] {
  if (source === undefined || source === null) {
    throw new Error("source is null or undefind");
  }

  const result: R[] = [];

  let index = 0;

  for (let item of source) {
    const value = mapper(item, index);
    result.push(value);
    index++;
  }
  return result;
  //throw new Error("mapArray: not implemented");
}

export function filterArray<T>(
  source: readonly T[],
  predicate: (item: T, index: number) => boolean,
): T[] {
  if (source === null || source === undefined) {
    throw new Error("source is null or undefind");
  }

  const result: T[] = [];

  let index = 0;

  for (let item of source) {
    const value = predicate(item, index);
    if (value === true) {
      result.push(item);
    }
    index++;
  }
  return result;
}

export function reduceArray<T, R>(
  source: readonly T[],
  reducer: (acc: R, item: T, index: number) => R,
  initial: R,
): R {
  if (source === undefined || source === null) {
    throw new Error("source is null or undefind");
  }

  let index = 0;

  let accum: R = initial;

  for (let item of source) {
    let value = reducer(accum, item, index);
    accum = value;
    index++;
  }
  return accum;
}

export function partition<T>(
  source: readonly T[],
  predicate: (item: T) => boolean,
): [T[], T[]] {
  if (source === undefined || source === null) {
    throw new Error("source is null or undefind");
  }

  const result: [T[], T[]] = [[], []];

  for (let item of source) {
    if (predicate(item) === true) {
      result[0].push(item);
    } else {
      result[1].push(item);
    }
  }
  return result;
}

export function groupBy<T, K extends PropertyKey>(
  source: readonly T[],
  keySelector: (item: T) => K,
): Record<K, T[]> {
  if (source === undefined || source === null) {
    throw new Error("source is null or undefind");
  }

  const result = {} as Record<K, T[]>;

  for (let item of source) {
    let value = keySelector(item);
    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(item);
  }

  return result;
}
