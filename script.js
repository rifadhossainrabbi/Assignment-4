// console.log("Clicked");

// Total Card Number Count
let totalCardNumber = document.getElementById("total_count");
let allChildNumber = document.querySelector(".all_card_section");
totalCardNumber.innerText = allChildNumber.children.length;

// Count Available Jobs
let jobNumber = document.getElementById("job_count");
jobNumber.innerText = allChildNumber.children.length;

// Click any button and design 
/**
 * 1-Get all Items
 * 2-bg white adding all button
 * 3-remove all bg blue
 * 4-design only selected button(add and remove)
 */
function designOnly(id) {
  // button effect after click
  // Get the buttons
  const allButton = document.getElementById("all_btn");
  const interviewButton = document.getElementById("interview_btn");
  const rejectButton = document.getElementById("reject_btn");

  // bg white adding all button
  allButton.classList.add('bg-white', 'text-gray-500');
  interviewButton.classList.add('bg-white', 'text-gray-500');
  rejectButton.classList.add('bg-white', 'text-gray-500');

  // Remove
  allButton.classList.remove('bg-blue-500', 'text-white');
  interviewButton.classList.remove('bg-blue-500', 'text-white');
  rejectButton.classList.remove('bg-blue-500', 'text-white');

  // design only selected button
  const selectButton = document.getElementById(id);
  selectButton.classList.add('bg-blue-500', 'text-white');
  selectButton.classList.remove("bg-white", "text-gray-500");
}


// Click button and hide other card and show only relative card
/**
 * 1- Get all Card
 * 2- Hide all Card
 * 3- Remove hide form selected Card 
 */
function showOnly(id2) {
  const allCardSection = document.getElementById("all_card_sections");
  const initialCardSection = document.getElementById("initial_interview_card");

  //1-All hide
  allCardSection.classList.add("hidden");
  initialCardSection.classList.add("hidden");

  // 2- hide remove selected id2
  const selectId2 = document.getElementById(id2);
  selectId2.classList.remove("hidden");
}

// Click Interview or Rejected button and change status from card
/**
 * Get All Card Sections 
 */

let interviewList = [];
let rejectList = [];

const allCardSection = document.getElementById("all_card_sections");
allCardSection.addEventListener("click", function (event) {
  // console.log(event.target.parentNode);
  if (event.target.classList.contains("interview_btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company_name').innerText;
    const skillHave = parentNode.querySelector('.skill').innerText;
    const extraInfo = parentNode.querySelector('.extra_info').innerText;
    const clickedButton = parentNode.querySelector('.clicked').innerText;
    const paragraphsHave = parentNode.querySelector('.paragraphs').innerText;

    const cardItems = {
      companyName,
      skillHave,
      extraInfo,
      clickedButton,
      paragraphsHave
    }
    console.log(cardItems);

    /** 
     *1- prothome Interview button er design korbo 
     *2- abar Reject button er design korbo
    *3- interview button click hole reject button a jei design korsi ta remove hobe
   *4- reject button click hole interview button a jei design korsi ta remove hobe
     */
    const status = parentNode.querySelector(".clicked");
    status.innerText = "Interview";
    status.classList.add('text-green-600', 'border', 'border-green-600', 'bg-white');
    event.target.classList.add('bg-green-500', 'text-white');

    status.classList.remove('text-red-600', 'border-red-600');
    const rejectBtn = parentNode.querySelector(".reject_btn");
    rejectBtn.classList.remove('bg-red-500', 'text-white');
  }
  else if (event.target.classList.contains("reject_btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const status = parentNode.querySelector(".clicked");
    status.innerText = "Rejected";
    status.classList.add('text-red-600', 'border', 'border-red-600', 'bg-white');
    event.target.classList.add('bg-red-500', 'text-white');
    status.classList.remove('text-green-600', 'border-green-600');

    const interviewBtn = parentNode.querySelector(".interview_btn");
    interviewBtn.classList.remove('bg-green-500', 'text-white');
  }
}
)
