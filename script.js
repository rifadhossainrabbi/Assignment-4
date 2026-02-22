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
  const interviewButton = document.getElementById("interview_btn_three");
  const rejectButton = document.getElementById("reject_btn_three");

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

  const allCardSection = document.querySelector(".all_card_section");
  if (id == 'interview_btn_three') {
    allCardSection.classList.add('hidden');
    // Click korar por
    const interviewSection = document.querySelector(".interview_section");
    interviewSection.classList.remove("hidden");
    const hideInitialCard = document.getElementById("initial_interview_card");
    hideInitialCard.classList.add('hidden');
   }
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
     

    // Click korar por 
    const hideInitialCard = document.getElementById("initial_interview_card");
    hideInitialCard.classList.add('hidden');
    const interviewSection = document.querySelector(".interview_section");
    interviewSection.classList.add("hidden");

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
     *2- interview button click hole reject button a jei design korsi ta remove korbo
     */
    const status = parentNode.querySelector(".clicked");
    status.innerText = "Interview";
    status.classList.add('text-green-600', 'border', 'border-green-600', 'bg-white');
    event.target.classList.add('bg-green-500', 'text-white');

    status.classList.remove('text-red-600', 'border-red-600');
    const rejectBtn = parentNode.querySelector(".reject_btn");
    rejectBtn.classList.remove('bg-red-500', 'text-white');

    // Ekhon duplicate bade info gulo empty Array te push korbo
    // const companyNameExist = interviewList.find(item => item.companyName == cardItems.companyName);
    const companyNameExist = interviewList.find(item => item.companyName == cardItems.companyName);
    if (!companyNameExist) {
      interviewList.push(cardItems);
      console.log(interviewList);
      document.getElementById("interview_count").innerText = interviewList.length;
    }
    adding();
  }
  else if (event.target.classList.contains("reject_btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const status = parentNode.querySelector(".clicked");
    status.innerText = "Rejected";

    /**
     *1- abar Reject button er design korbo
     *2- reject button click hole interview button a jei design korsi ta remove korbo
     */
    status.classList.add('text-red-600', 'border', 'border-red-600', 'bg-white');
    event.target.classList.add('bg-red-500', 'text-white');
    status.classList.remove('text-green-600', 'border-green-600');

    const interviewBtn = parentNode.querySelector(".interview_btn");
    interviewBtn.classList.remove('bg-green-500', 'text-white');
  }
}
)


function adding() {
  const interviewSection = document.querySelector(".interview_section");
  interviewSection.innerHTML = ``;

  for (const interview of interviewList) {
    let div = document.createElement('div');
    div.className = `jobs_section  flex justify-between items-start bg-white mt-4 p-5 rounded-xl shadow`;
    div.innerHTML = `
        <!-- left side -->
        <div class="left_side space-y-5">
          <!-- part-1 -->
          <div>
            <h4 id="mobile_first_corp" class="company_name text-xl font-semibold">${interview.companyName}</h4>
            <p id="react_native" class="skill text-gray-500">${interview.skillHave}</p>
          </div>
          <!-- part-2 -->
          <div>
            <p class="extra_info text-gray-500">${interview.extraInfo}</p>
          </div>
          <!-- part-3 -->
          <div>
            <p class="clicked bg-[#EEF4FF] inline-block py-2 px-3 rounded-lg mb-2">${interview.clickedButton}</p>
            <p  class="paragraphs text-gray-600">${interview.paragraphsHave}</p>
          </div>
          <!-- part-4 -->
          <div class="btn-select flex gap-3">
            <button
              class="interview_btn border border-green-500 py-2 px-3 rounded-md text-green-500 hover:cursor-pointer">Interview</button>
            <button
              class="reject_btn border border-red-500 py-2 px-3 rounded-md text-red-500 hover:cursor-pointer">Rejected</button>
            <button
              class="border border-red-500 py-2 px-3 rounded-md text-red-500 hover:cursor-pointer lg:hidden sm:block">Delete</button>
          </div>
        </div>
        <!-- right side -->
        <div class="right_side p-3 bg-white border border-[#F1F2F4] rounded-full hover:cursor-pointer hidden lg:block ">
          <button id="delete" class="hover:cursor-pointer lg:block sm:hidden"><i
              class="fa-regular fa-trash-can inline-block"></i></button>
        </div>
    `;
    interviewSection.appendChild(div);
  }
}
