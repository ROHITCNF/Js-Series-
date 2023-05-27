//What JS can do :- 


/*1 -> Js can change HTML content*/
document.getElementById("demo").innerHTML = "Js checnged the innerHtml";

// fun fact :- it can accept both single and double quotes
document.getElementById('demo').innerHTML = 'Js checnged the innerHtml';


/*2. Js Can Change HTML Attribute Values*/
document.getElementById('demo').src = 'newImagePath.png'; //changed the image path of a html 

/*3. Js can change CSS*/
document.getElementById('demo').style.fontSize = '36px'; //changed the fontsize of any html


//Since Browser only renders the HTML pages hence Js is essential to create a dynamic website which
//user can interact.

/*How to insert JS codes in our index files*/

//1.  Code
<script>
  document.getElementById("demo").innerHTML = "My First JavaScript";
</script>;

//2. file to load 
<script src='path of your JS file'></script>

/*As of now don't solely focus on document keyword we will deep dive it into later*/
