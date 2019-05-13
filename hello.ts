function double(id: number): number;
function double(name: string): string;
function double(arg: number | string): string | number {
  if (typeof arg === 'string') {
    return arg + arg;
  } else {
    return arg * 2;
  }
}

console.log('hello');
console.log(3);

