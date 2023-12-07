import { FAQs } from "./data.js";
let FAQs_HTML = "";
FAQs.forEach((data) => {
  let matchingFAQ;
  let faqId = data.id;
  if (data.id === faqId) {
    matchingFAQ = data;
  }

  FAQs_HTML += `<div class=" FAQ-container js-FAQ-container">
  <h4 class="ques">${matchingFAQ.ques}</h4>
 <div class="js-icon-${matchingFAQ.id} icon"> 
  <img
    src="${matchingFAQ.addIcon}"
    alt=""
    class=" js-plusIcon plusIcon"
    data-icon-id="${matchingFAQ.id}"/>
  <img
    src="${matchingFAQ.minusIcon}"
    alt=""
    class="js-minusIcon minusIcon"
        data-icon-id="${matchingFAQ.id}"/>
 </div>
 
 </div>
 <p class="ans js-ans-${matchingFAQ.id}">${matchingFAQ.ans}</p>

    `;
});

document.querySelector(".js-FAQs-div").innerHTML = FAQs_HTML;

document.querySelectorAll(".js-plusIcon").forEach((icon) => {
  icon.addEventListener("click", () => {
    let iconId = icon.dataset.iconId;
    let reveal_Ans = document.querySelector(`.js-ans-${iconId}`);
    reveal_Ans.classList.add("dropdown_ans");
    let changeIcon = document.querySelector(`.js-icon-${iconId}`);
    changeIcon.classList.add("changeIcon");
  });
});
document.querySelectorAll(".js-minusIcon").forEach((icon) => {
  icon.addEventListener("click", () => {
    let iconId = icon.dataset.iconId;
    let reveal_Ans = document.querySelector(`.js-ans-${iconId}`);
    reveal_Ans.classList.remove("dropdown_ans");
    let changeIcon = document.querySelector(`.js-icon-${iconId}`);
    changeIcon.classList.remove("changeIcon");
  });
});
