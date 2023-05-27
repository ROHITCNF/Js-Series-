//in this module we talk about JS variables :-
/*let var and const*/

/*We decleare variables as */

var a;
let b;
const c = 10; //it needs to be assigned at a time after that it can't be reassigned

//Q. Since var and let can be reassigned after decleartion then what would be the diifference

//ans -> the significant difference is SCOPE , let's understand by example

/*1 . 'var'*/
{
  //suppose this block of code is a seperate JS file
  function varTesting() {
    var a;
    a = 5;
    console.log(a); //print as 5
  }
  varTesting();

  a = 6; //those coming from c/c++ field would be surprised here but yes u can do this with var
  console.log(a); //print as 6;

  /*This is called global scope of var */
}

/*2. 'let'*/
{
  //suppose this block of code is a seperate JS file
  function letTesting() {
    let x = 10;
    if (true) {
      let y = 20;
      console.log(x); // Output: 10
    }
    console.log(y); // Uncaught ReferenceError: y is not defined
  }

  letTesting();

  /*This is called  block level scope of let -> if a varaiale decleared inside a block
  then it can't be accessible outside of the block*/
}

/*3. 'const'*/
{
  //suppose this block of code is a seperate JS file
  function constTesting() {
    const x = 10;
    if (true) {
      const y = 20;
      console.log(x); // Output: 10
    }
    // x = 5; // Error: Assignment to constant variable
  }

  constTesting();

  /*This also called block level scope and read-only property of const 
once decleared the assignment required at the same time after that no reassignment*/
}
