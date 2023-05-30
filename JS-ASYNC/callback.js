// what and Why call back?
   /* We got two work to perform work 1 and work 2 */ 
   /*To do this we can :- 
   1. do 1st work then do second work*/
   
   function work1(){}
   function work2(){}

   work1(); //work 1 done 
   work2(); //then second work done

   /*2. do the 1st work and inside that instruct work one to also do second work*/

   function work1(){/*after doing work 1 call someone who do the second work*/work2();}
   function work2(){}

   work1(); //work 1 done 

//  The problem with the first example above, is that you have to call two functions to do the work

// The problem with the second example, is that you cannot prevent the work1 function from doing the work 2.

// Now it is time to bring in a callback.

/*Technical definition of callBack => when one function is passed as an argument to another function*/


/*But the actual use would be  waiting for the 1st function to be executed then perform the second
function without calling two other function*/

function fetchData(callback) {
  setTimeout(function () {
    const data = "Sample data";
    callback(data);
  }, 2000);

  work1();
  work2();
  work3();
  work4();
  work4();
 //...
 //...
 work100();
}

function processFetchedData(data) {
  console.log("Processing data:", data);
}

fetchData(processFetchedData);

/*in the above line of code the SetimeOut will ensure that after 2 second 
the inside set of code should be pushed inside the event loop it doen't wait for all the synchronous work 
function to be executed*/

   