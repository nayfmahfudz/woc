export const required = msg => x => !x && msg;
export const min = min => msg => x => x.length >= min || msg;
export const max = max => msg => x => x.length <= max || msg;
export const minMax = (min, max) => msg => x =>
  (min <= x.length && x.length <= max) || msg;
export const email = msg => x => /\S+@\S+\.\S+/.test(x) || msg;
export const equal = msg => (...xs) => xs.every(x => x === xs[0]) || msg;

// Copy and Paste example rules with type definition --->
//
// export const required = (msg: string) => (x: any) => !x && msg
// export const min = (min: number) => (msg: string) => (x: any) =>
//   x.length >= min || msg
// export const max = (max: number) => (msg: string) => (x: any) =>
//   x.length <= max || msg
// export const minMax = (min: number, max: number) => (msg: string) => (x: any) =>
//   (min <= x.length && x.length <= max) || msg
// export const email = (msg: string) => (x: any) => /\S+@\S+\.\S+/.test(x) || msg
// export const equal =
//   (msg: string) =>
//   (...xs: any[]) =>
//     xs.every(x => x === xs[0]) || msg
