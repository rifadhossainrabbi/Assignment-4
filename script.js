let currentStatus = 'all';

// Total Card Number Count
let totalCardNumber = document.getElementById("total_count");
let allChildNumber = document.querySelector(".all_card_section");
totalCardNumber.innerText = allChildNumber.children.length;

// Count Available Jobs
let jobNumber = document.getElementById("job_count");
jobNumber.innerText = allChildNumber.children.length;

function designOnly(id) {
  currentStatus = id;
  const interviewSection = document.querySelector(".interview_section");
  const initialCard = document.getElementById("initial_interview_card");

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
  const rejectSection = document.querySelector(".reject_section");

  // Clicking hide and show event
  if (id === 'all_btn') {
    allCardSection.classList.remove("hidden");
    interviewSection.classList.add("hidden");
    rejectSection.classList.add("hidden");
    initialCard.classList.add("hidden");
  }
  else if (id === 'interview_btn_three') {
    allCardSection.classList.add("hidden");
    interviewSection.classList.remove("hidden");
    rejectSection.classList.add("hidden");

    toggleEmptyCard();
    addingInterview();
  }
  else if (id === 'reject_btn_three') {
    const rejectSection = document.querySelector(".reject_section");
    const interviewSection = document.querySelector(".interview_section");

    allCardSection.classList.add("hidden");
    interviewSection.classList.add("hidden");
    rejectSection.classList.remove("hidden");
    toggleEmptyCard();
    renderReject();
  }
}

// Creat a function for initial hide and show
function toggleEmptyCard() {
  const initialCard = document.getElementById("initial_interview_card");

  if (
    (currentStatus === 'interview_btn_three' && interviewList.length === 0) ||
    (currentStatus === 'reject_btn_three' && rejectList.length === 0)
  ) {
    initialCard.classList.remove("hidden");
  } else {
    initialCard.classList.add("hidden");
  }
}

// 2 empty arry for accesssing card element to creat new card
let interviewList = [];
let rejectList = [];

// Interview and Reject click event function
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview_btn")) {
    const parentNode = event.target.parentNode.parentNode;
    // Accessing all card element
    const companyName = parentNode.querySelector('.company_name').innerText;
    const skillHave = parentNode.querySelector('.skill').innerText;
    const extraInfo = parentNode.querySelector('.extra_info').innerText;
    const clickedButton = parentNode.querySelector('.clicked').innerText;
    const paragraphsHave = parentNode.querySelector('.paragraphs').innerText;

    const cardItems = {
      companyName,
      skillHave,
      extraInfo,
      clickedButton: "Interview",
      paragraphsHave
    }

    const status = parentNode.querySelector(".clicked");
    status.innerText = "Interview";
    status.classList.add('text-green-600', 'border', 'border-green-600', 'bg-white');
    event.target.classList.add('bg-green-500', 'text-white');

    status.classList.remove('text-red-600', 'border-red-600');
    const rejectBtn = parentNode.querySelector(".reject_btn");
    rejectBtn.classList.remove('bg-red-500', 'text-white');

    const companyNameExist = interviewList.find(item => item.companyName == cardItems.companyName);
    if (!companyNameExist) {
      interviewList.push(cardItems);
      console.log(interviewList);
    }

    // Reject list a jodi same companyName wala card thake ta remove hobe
    rejectList = rejectList.filter(item => item.companyName !== companyName);
    updateCounts();
    toggleEmptyCard();
    if (currentStatus == 'reject_btn_three') {
      renderReject();
    }
  }
  else if (event.target.classList.contains("reject_btn")) {
    // console.log(event.target.parentNode);
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
      clickedButton: "Rejected",
      paragraphsHave
    }

    const status = parentNode.querySelector(".clicked");
    status.innerText = "Rejected";

    status.classList.add('text-red-600', 'border', 'border-red-600', 'bg-white');
    event.target.classList.add('bg-red-500', 'text-white');
    status.classList.remove('text-green-600', 'border-green-600');

    const interviewBtn = parentNode.querySelector(".interview_btn");
    interviewBtn.classList.remove('bg-green-500', 'text-white');

    const companyNameExist = rejectList.find(item => item.companyName == cardItems.companyName);
    if (!companyNameExist) {
      rejectList.push(cardItems);
    }

    // Inteview list a jodi same companyName wala card thake ta remove hobe
    interviewList = interviewList.filter(item => item.companyName !== companyName);
    updateCounts();
    toggleEmptyCard();
    if (currentStatus == 'interview_btn_three') {
      addingInterview();
    }
  }
}
)

// For count Interview and Reject card number
function updateCounts() {
  document.getElementById("interview_count").innerText = interviewList.length;
  document.getElementById("reject_count").innerText = rejectList.length;
}


// Card emplement function for Interview
function addingInterview() {
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
            <p class="clicked bg-white text-green-500 border border-green-500 inline-block py-2 px-3 rounded-lg mb-2">${interview.clickedButton}</p>
            <p  class="paragraphs text-gray-600">${interview.paragraphsHave}</p>
          </div>
          <!-- part-4 -->
          <div class="btn-select flex gap-3">
            <button
              class="interview_btn border bg-green-500 text-white border-green-500 py-2 px-3 rounded-md  hover:cursor-pointer">Interview</button>
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

// Card emplement function for Rejected 
function renderReject() {

  const rejectSection = document.querySelector(".reject_section");
  const initialCard = document.getElementById("initial_interview_card");

  rejectSection.innerHTML = "";

  for (const reject of rejectList) {

    const div = document.createElement("div");

    div.className =
      "flex justify-between items-start bg-white mt-4 p-5 rounded-xl shadow";

    div.innerHTML = `
       <div class="left_side space-y-5">
          <!-- part-1 -->
          <div>
            <h4 id="mobile_first_corp" class="company_name text-xl font-semibold">${reject.companyName}</h4>
            <p id="react_native" class="skill text-gray-500">${reject.skillHave}</p>
          </div>
          <!-- part-2 -->
          <div>
            <p class="extra_info text-gray-500">${reject.extraInfo}</p>
          </div>
          <!-- part-3 -->
          <div>
            <p class="clicked bg-[#ffffff] text-red-500 border border-red-500 inline-block py-2 px-3 rounded-lg mb-2">${reject.clickedButton}</p>
            <p  class="paragraphs text-gray-600">${reject.paragraphsHave}</p>
          </div>
          <!-- part-4 -->
          <div class="btn-select flex gap-3">
            <button
              class="interview_btn border border-green-500 text-green-500 py-2 px-3 rounded-md hover:cursor-pointer">Interview</button>
            <button
              class="reject_btn border border-red-500 bg-red-500 text-white py-2 px-3 rounded-md hover:cursor-pointer">Rejected</button>
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

    rejectSection.appendChild(div);
  }
}