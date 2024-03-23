function sayHello(name, lastName) {
    console.log("Hello "+ name + " "+ lastName); 
}

function sum(num1,num2){
    const result= num1 + num2;
    return result;
}

/**
 * ! = not
 * && = and 
 * || = or
 */

function init() {
  console.log("hello world!");
  const x = "Adrian";
  sayHello(x, "Aguiñaga");  
  const result = sum(21,21);
  console.log(result);
    //retrive data
    //hook events
}



window.onload = init;
//try to specify the order of the arguments excecution