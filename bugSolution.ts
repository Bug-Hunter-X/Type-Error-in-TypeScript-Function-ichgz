function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if (isNaN(numB)) {
      return a; // or throw an error: throw new Error('Invalid input');
    }
    return a + numB;
  } else {
    return a + b;
  }
}

let result = add(1, 2); // Correct
let result2 = addSafe(1, '2'); // Correct, handles string input
let result3 = addSafe(1, 'abc'); // Correct, handles invalid string input