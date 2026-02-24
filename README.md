<-----------------------------Question:1----------------------------->

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

i:-- Using getElementById, we can access any element in the HTML document by its ID through JavaScript. (Since ID must be unique, only one element can be accessed using an ID.)

ii:-- Using getElementsByClassName, we can access multiple elements in the HTML document that share the same class.

iii:-- Using querySelector, we can access any element by ID, class, or tag.
If selecting a class, we need to use a dot (.), and if selecting an ID, we need to use a hash (#).
Note: It selects only the first matching element.

iv:-- Using querySelectorAll, we can also access any element by ID, class, or tag.
If selecting a class, use a dot (.), and if selecting an ID, use a hash (#).
But using this, we can select all matching elements.

Note:

querySelectorAll →

Returns a NodeList

Does not update automatically if the DOM changes

getElementsByClassName →

Returns an HTMLCollection

Automatically updates if the DOM changes



<-----------------------------Question:2----------------------------->

2. How do you create and insert a new element into the DOM?

Answer:

i:-- First, in HTML, create an empty container where the newly created element will be added.
Note: If you don’t create a separate container, you can also use the parent element where you want to add the new element.

ii:-- Access the empty element you created in HTML and store it in a variable.

iii:-- Use document.createElement() to create any tag you want and store it in a variable.

iv:-- Use variable.innerHTML on the variable created in step iii to add your desired content or code.

v:-- Finally, use appendChild(newVariable) on the variable from step ii to insert the new element.


<-----------------------------Question:3----------------------------->

3. What is Event Bubbling? And how does it work?

Answer:

Event bubbling allows an event on a child element to propagate up to its parent, then grandparent, and so on, all the way up to the document.
Meaning: event → parent → grandparent → document.

Why it is needed:
1: It allows us to easily add an event to a specific element; otherwise, we would have to add multiple events.
2: It allows a single parent element to handle events for multiple child elements.

How it works:
<!-- 
<div id="parent">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
  <button class="btn">Button 3</button>
</div> -->

If we want to use one event listener to handle all the buttons with the same class:

<!-- document.getElementById("parent").addEventListener("click", function(event){
  if(event.target.classList.contains("btn")){
    console.log(event.target.innerText + " clicked");
  }
}); -->

Explanation of what happens here:

document.getElementById("parent") accesses the main div or parent first.

addEventListener("click", function(){}) tells the parent what to do when any click happens inside it.

if(event.target.classList.contains("btn")) ensures the event only triggers when a button is clicked; otherwise, any click inside the parent would trigger it.

console.log(event.target.innerText + " clicked") shows the text of the button that was clicked in the console.

Final output: Clicking any of the buttons (Button 1, 2, or 3) will display its name followed by “clicked” in the console.


<-----------------------------Question:4----------------------------->

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event Delegation allows us to control multiple child elements by adding a single event listener to their parent instead of adding separate event listeners to each child.

Why it is needed:
Suppose I have a div container with many buttons inside, and I want to add event listeners to all of them.
Without event delegation, if I have 20 buttons, I would need 20 separate event listeners.
But if I add the event listener to their parent, the event works for all child elements inside it.
Inside the parent’s event listener, I can use event.target.classList.contains() or event.target.closest() to trigger actions on specific child elements.
This way, I don’t need to add multiple event listeners to each child individually.

Example:

<!-- <div id="parent">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
  <button class="btn">Button 3</button>
</div> -->

<!-- document.getElementById("parent").addEventListener("click", function(event){
  if(event.target.classList.contains("btn")){
    console.log(event.target.innerText + " clicked");
  }
}); -->

Explanation:
Here, we added an event listener to the parent, and now any child button inside it can trigger the event.
This is called event delegation.


<-----------------------------Question:5----------------------------->

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() →
What: The preventDefault() method is used to stop the default behavior of an element.

When needed: This means that the element (like a button, link, or form) will not perform its normal behavior, and only what we define in the event listener will happen.
For example, sometimes we want to prevent a link from redirecting, a form from submitting, or a checkbox from checking automatically.

stopPropagation() →
What: stopPropagation() is used to stop event bubbling. This means the event will not propagate to the parent or higher-level elements.

When needed: Normally, in event delegation, both child and parent listeners can run when a child is clicked. By using event.stopPropagation(), we can prevent the event from reaching the parent.

Example:

<!-- <div id="parent" style="padding:20px; background:lightblue;">
    Parent Div
    <button id="child">Click Me</button>
</div> -->

<!-- document.getElementById("parent").addEventListener("click", function(){
    console.log("Parent clicked!");
}); -->

<!-- document.getElementById("child").addEventListener("click", function(event){
    console.log("Child clicked!");
    event.stopPropagation(); 
}); -->

Explanation:
Here, clicking the child button will trigger the child’s event listener, but the event will not reach the parent, so the parent’s listener does not run.



<-----------------------------Question:1----------------------------->
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? er Answer

getElementById, getElementsByClassName, এবং querySelector / querySelectorAll এর মধ্যে পার্থক্য

i: getElementById দিয়ে আমরা HTML ডকুমেন্ট থেকে যেকোনো id এর নাম দিয়ে JavaScript এর মাধ্যমে তা access করতে পারি।

যেহেতু id ইউনিক হতে হয়, তাই getElementById দিয়ে শুধু একটি element access করা যায়।

ii: getElementsByClassName দিয়ে আমরা HTML ডকুমেন্ট থেকে একই class থাকা একাধিক element access করতে পারি।

iii: querySelector দিয়ে আমরা id, class, tag যেকোনো element access করতে পারি।

Class এর জন্য আগের দিকে একটি dot (.) দিতে হয়, এবং

Id এর জন্য আগের দিকে একটি hash (#) দিতে হয়।

লক্ষ্য করুন: querySelector শুধু প্রথম matching element কে select করে।

iv: querySelectorAll দিয়েও আমরা id, class, tag যেকোনো element access করতে পারি।

Class এর জন্য আগের দিকে dot (.), Id এর জন্য hash (#) দিতে হয়।

তবে querySelectorAll দিয়ে আমরা সব matching element select করতে পারি।

Note:

querySelectorAll

NodeList return করে

DOM পরিবর্তন হলেও এটি auto update হয় না

getElementsByClassName

HTMLCollection return করে

DOM পরিবর্তন হলে এটি auto update হয়



<-----------------------------Question:2---------------------------->

2. How do you create and insert a new element into the DOM?

DOM-এ নতুন element কিভাবে তৈরি ও insert করবেন

i: প্রথমে HTML-এ একটি ফাঁকা container বানাতে হবে, যার মধ্যে নতুন তৈরি করা elementটি add করা হবে।

Note: এটা না করেও যেই parent element-এ add করতে চাই, সেটাকেই parent ধরেও কাজ করা যায়।

ii: HTML-এ যে ফাঁকা elementটি নিয়েছি, তাকে একটি variable-এ access করব।

iii: document.createElement() এর মধ্যে আমরা ইচ্ছা মতো tag নাম দিতে পারি এবং এটি একটি variable-এ assign করব।

iv: iii-তে বানানো variable-এ variable.innerHTML ব্যবহার করে আমরা ইচ্ছা মতো content দিতে পারি।

v: ii-তে বানানো parent variable-এ iv-তে বানানো নতুন variable-টি appendChild(newVariable) করে add করব।

এভাবে নতুন element তৈরি ও DOM-এ insert করা হয়।


<-----------------------------Question:3----------------------------->

3. What is Event Bubbling? And how does it work?

Event Bubbling কী এবং এটি কিভাবে কাজ করে?

Event Bubbling:
Event bubbling-এর মাধ্যমে আমরা কোনো element-এর parent, তার parent, তার parent এভাবে উপরের দিকে (grandparent → parent → document) event প্রেরণ করতে পারি।
মানে, event প্রথম child element থেকে শুরু হয়ে উপরের দিকে parent-এ এবং তার পর grandparent-এ, শেষ পর্যন্ত document পর্যন্ত পৌঁছে।

কেন দরকার:

এর মাধ্যমে সহজেই নির্দিষ্ট element-এ event add করা যায়, না হলে আমাদের অনেকগুলো event add করতে হতো।

একটিমাত্র parent element দিয়ে multiple child element-এর events handle করা যায়।

কিভাবে কাজ করে:

ধরো আমাদের HTML এ আছে:

<!-- <div id="parent">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
  <button class="btn">Button 3</button>
</div> -->

আমরা চাই একটি parent-এর eventListener দিয়ে সব button handle করতে:

<!-- document.getElementById("parent").addEventListener("click", function(event){
  if(event.target.classList.contains("btn")){
    console.log(event.target.innerText + " clicked");
  }
}); -->

কী হচ্ছে এখানে:

document.getElementById("parent") দিয়ে প্রথমে main div বা parent access করা হলো।

addEventListener("click", function(){}) দিয়ে বলা হলো, parent-এর যেকোনো জায়গায় click হলে function execute হবে।

if(event.target.classList.contains("btn")) না দিলে parent-এর যেকোনো জায়গায় click করলে eventListener চলে। এই শর্ত দিয়ে আমরা নির্দিষ্ট child element select করেছি।

console.log(event.target.innerText + " clicked") দিয়ে সেই button-এর text console-এ দেখানো হলো।

Final output: button 1, 2, 3-এর যেকোনো একটিতে click করলে console-এ "Button X clicked" দেখাবে।


<-----------------------------Question:4----------------------------->

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation কী এবং এটি কেন দরকার?

Event Delegation:
Event Delegation দিয়ে আমরা একাধিক child element-এ আলাদা আলাদা করে eventListener add না করে, তাদের parent element-এ একটি মাত্র eventListener দিয়ে সব child element handle করতে পারি।

কেন দরকার:
ধরো আমার HTML-এ একটি div container আছে, যার মধ্যে অনেকগুলো button আছে। যদি Event Delegation না ব্যবহার করি, তাহলে প্রতিটি button-এর জন্য আলাদা আলাদা eventListener add করতে হবে।
যেমন ধরো, ২০টি button আছে, তাহলে ২০টি eventListener লাগবে।

কিন্তু Event Delegation ব্যবহার করলে parent element-এ একটি eventListener দিয়ে সব child element handle করা সম্ভব।
এর ভিতরে আমরা event.target.classList.contains() বা event.target.closest() দিয়ে নির্দিষ্ট child element-এ event ঘটাতে পারি।
ফলত, একাধিকবার আলাদা আলাদা জায়গায় eventListener add করার প্রয়োজন হয় না।

Example:

<!-- <div id="parent">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
  <button class="btn">Button 3</button>
</div> -->

<!-- document.getElementById("parent").addEventListener("click", function(event){
  if(event.target.classList.contains("btn")){
    console.log(event.target.innerText + " clicked");
  }
}); -->

এখানে কী হচ্ছে:

Parent div-এ একটি eventListener add করা হয়েছে।

Parent-এর ভিতরে যেকোনো button-এ click হলে eventListener কাজ করবে।

event.target.classList.contains("btn") দিয়ে নিশ্চিত করা হচ্ছে যে শুধুমাত্র button-এ click হলে কাজ হবে, parent-এর অন্য জায়গায় নয়।

ফলাফল:
Parent div-এর ভিতরে যেকোনো button-এ click করলে console-এ button-এর নাম এবং "clicked" দেখাবে।

এটাই হলো Event Delegation।


<-----------------------------Question:5----------------------------->

preventDefault() এবং stopPropagation() methods

preventDefault() →
কি: preventDefault() method ব্যবহার করে আমরা element-এর default behavior আটকাতে পারি।

কখন দরকার: মানে এই button/element গুলো তাদের default behavior করতে পারবে না। আমরা eventListener-এ যা বলবো তাই হবে। অনেক সময় বিভিন্ন link, submit button, checkbox ইত্যাদিতে event আটকাতে হয়।

stopPropagation() →
কি: Event bubbling আটকানো যায়। মানে event parent বা উপরের দিকে ছড়াবে না।

কখন দরকার: সাধারণত event delegation-এর সময় child এবং parent দু’টিতেই listener থাকে। তখন আমরা event.stopPropagation() দিয়ে parent-এ event পৌঁছানো বন্ধ করতে পারি।

উদাহরণ:

<!-- <div id="parent" style="padding:20px; background:lightblue;">
    Parent Div
    <button id="child">Click Me</button>
</div> -->

<!-- document.getElementById("parent").addEventListener("click", function(){
    console.log("Parent clicked!");
}); -->

<!-- document.getElementById("child").addEventListener("click", function(event){
    console.log("Child clicked!");
    event.stopPropagation(); 
}); -->

এখানে parent-এ event যাবে না।


<-----------------------------Question:1----------------------------->

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? er Answer

Ans:---->
i:-- getElementById diya amra html document theke jekono id er nam diya javascript er maddhome ta access korte pari (id jehetu unique hote hoy tai id diay ekta matro element access kora jay)

ii:-- getEkementsByClassName diya amare htmal document theke ekoi class wala ekadhik element access korte pari

iii:-- querySelector diya amra Id,Class,Tag jekono tai access korte pari 
class likhle tar age ekta dot dite hoy r Id likhle tar age ekta hash dite hoy
Note: er maddhome sudhu ekta o prothom element select hoy 

iv:--- querySelectorAll diya amra Id,Class,Tag jekono tai access korte pari 
class likhle tar age ekta dot dite hoy r Id likhle tar age ekta hash dite hoy tobe er maddhome amra sokol Id,Class,Tag k select korte pari

Note: 
 <--querySelectorAll-->                                                     
1- NodeList 
2- DOM change hole update hoy na 

abar <--getElementsByClassName-->     
1- HTML Collection
2- DOM Change hole auto Update hoy


<-----------------------------Question:2----------------------------->

2. How do you create and insert a new element into the DOM?

Ans:--->
i:-- Prothome amar html a ekta faka container banabo jar moddhe notun toiri howa element add korbo 
Note: eta na kore jeikhane add korbo mane parent element k amra banay o nite pari

ii:-- html a jei faka element nisilam ta ekta variable er moddhe access korbo

iii:-- document.createElement er moddhe amra icche moto tag nite pari ebong eita ekta variable a add korbo

iv:-- iii a jei variable banaysilam ta ebar variable.innerHTML kore icche moto code korbo 

v:-- ii a banano variable a iv k appendChild(newVariable) korbo taholei hobe



<-----------------------------Question:3----------------------------->

3. What is Event Bubbling? And how does it work?

Ans: --->
Event bubbling er maddhome amar kono element er parent tar parent tar parent eivabe event uporer dike jaite pari
mane event parent-->grandparent-->document projonto

kneo dorkar:--->
1:--er maddhome sohojei nirdisto element a event add kora jay noyto amader onekgulo event kora lagto
2:-- er maddhome ekta parent element diya multiple child handle kora jay
How its work---->

<!-- <div id="parent">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
  <button class="btn">Button 3</button>
</div> -->
amra jodi ekta te eventListener diya sob gulo class pete cai tobe

<!-- document.getElementById("parent").addEventListener("click", function(event){
  if(event.target.classList.contains("btn")){
    console.log(event.target.innerText + " clicked");
  }
}) -->

eikhane ki holo---->
1. ---> document.getElementById("parent") diya prothome main div ba parent access holo

2. --->addEventListener("click", function(){}) diya eta bujhay j oi parent a knoo jaygay click hole ki hobe ta function er maddhome output ashbe

3. ---> if(event.target.classList.contains("btn")) eta na dile parent er moddhe jkono jaygay click korle eventListener colbe.To eta daway fixed jayga bole dawa hoise

4. ---> console kore targt mane jeitay click hobe tar innerText k console a clicked show hocche 

5. ---> final output button1,2,3 er jkono ektay click hole ta change hoya clicked likha show hobe


<-----------------------------Question:4----------------------------->

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:--->
Event Delegation diya amra ekadhik child k alada alada kore eventListener add na kore oder parent a eventListener dile child gulo k control kora jay

Eta keno dorkar --->
dhorlam amar jodi ekta div container ase er moddhe  amar onek button thakay amay onek gulo jaygay evntListener add korte hoy.
mane Event delegation na hole  jodi amar 20 ta button thake tar jonno 20 eventListener bosate hobe.
Kintu ami jodi eder parent a eventListener dei tahole er vitore prottekta jaygay event colbe.Abar er vitore ami event.target.classList.contains()/event.target.closest() diya nirdisto jaygay event ghotate pari.
Jar jonno amar ekadhik bar Ekadhk jaygay eventListener kora lage nai

Example:
<!-- <div id="parent">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
  <button class="btn">Button 3</button>
</div> -->

<!-- document.getElementById("parent").addEventListener("click", function(event){
  if(event.target.classList.contains("btn")){
    console.log(event.target.innerText + " clicked");
  }
}) -->

eikhane ami parnet a eventListener add kore er vitor jkono child a event ghotate parsi.
Etai holo event delegation


<-----------------------------Question:5----------------------------->

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:--->
preventDefult()--->
Ki: preventDefult() method use kore amra element er defult behavior atkate pari.

Kokhon dorkar: Mane ei button gulo nijeder defult behavior korte parbe na amra eventListener a ja bolbo tokhon tai hobe amara bivinno link,submit,checkbox ettdi button a onek somoy event atkate pari

stopPropagation()--->

ki: event bublling atkano jay.Mane event parent uporer dike soriya jaite parbe na

kokhon dorkar: Normaly event delegation obosthay child o parent duitai listener kaj kore ekhon amra event.stopPropagation() diya parent a event jawa bondho korte pari

<!-- <div id="parent" style="padding:20px; background:lightblue;">
    Parent Div
    <button id="child">Click Me</button>
</div> -->

<!-- document.getElementById("parent").addEventListener("click", function(){
    console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", function(event){
    console.log("Child clicked!");
    event.stopPropagation(); 
}); -->

eikhane parnet a event jaite parbe na