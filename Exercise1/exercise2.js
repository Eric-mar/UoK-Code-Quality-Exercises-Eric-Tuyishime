function greet(name) {
//   if (name) {
//     return "Hello, " + name + "!";
//   } else {
//     return "Hello!";
//   }

// displaying the name using conditional rendering
return name ? `Hello ${name}!`: "Hello" 
}
greet("eric")