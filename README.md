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