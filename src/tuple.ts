// ! Compiling error
// let user: [number, string] = [1, 'Mosh', 0]

// With Tupling, you have to state what kind of values will be in the array.
// It can get hard to read, so try to keep it to key values.
let user: [number, string, number] = [1, 'Mosh', 0]

// However you can push objects into the array and cause an error.