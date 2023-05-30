# Async :-
As we all know , JS is synchronous and a single threaded language means the second  line of code will execute only after the first line of code has been executed .
Single threaded means JS has only one main thread of execution which is called event loop which manage the queue of functions/ codes to send in this.

# Asynchronous programming 
In javascript means the JS engine will not wait for one set of programme  or one line to be finshed to start othe set of proggrame or line of code.we can do several tasks in parallel, which is also required in our day to day life.

# Q. But why do we need ASYNC nature if JS is synchrounous and single threaded langauage?
-> Best technical answer would be we don't want the main thread to be blocked.
in easy language :- 
=> fetching  data via API and suppose it takes 2 sec(hypothetical time) to give response  now we have 2 options
1.wait for the API to give response
2.Dont wait and do rest of work (means let the event loop handle the situation and clear our main thraed so that next set of work to be pushed inside the main thread)

---> OFCOURSE everyone will gonna choose the 2nd option and the fun fact is JS also technically allows the second option  to be executed which we known as asynchronous programming.
