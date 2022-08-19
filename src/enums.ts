// ? We don't have to make multiple of the same variables in TypeScript.
// const small = 1;
// const medium = 2;
// const large = 3;

// Enums have to be in PascalCase.
// Create a design system for values using enum.
// ! Use const in this case to create more readable and efficient code!
const enum Size { Small = 1, Medium, Large};


let mySize: Size = Size.Medium;
console.log(Size.Medium)


