// 1. 공부 입력하면 화면에 띄우기(Create, Read)
// 2. 버튼 클릭하면 복습페이지로 넘어가기
// 3. 복습페이지가 끝나면 다시 메인화면으로 넘어오기
// 4. 메인화면에 공부 제거하기(Delete)

'use strict';

var inputList = [];
document.querySelector("form").addEventListener("submit", Create);

function Create(event) {
  event.preventDefault();
  var input = document.querySelector(".input").value;
  if(input!=null) {
    inputList.push(input);
    document.querySelector(".input").value = "";
  }
  Read();
}

function Read() {
  var list = "";
  for(var i=0; i<inputList.length; i++) {
    list+="<li>"+inputList[i]+"<span class='ReviewBtn' id="+i+">"+"</span></li>";
  }
  document.querySelector(".output").innerHTML=list;

  var reviewBtn = document.querySelectorAll(".ReviewBtn");
  for(i=0; i<reviewBtn.length; i++) {
    reviewBtn[i].addEventListener("click", Delete);
  }
}

function Delete() {
  var i = this.getAttribute("id");
  inputList.splice(i, 1);
  Read()
}














// const form_study = document.querySelector(".study-input");
// const IStudy = form_study.querySelector("input");
// const output = document.querySelector(".study-output");
// var review = document.querySelector("button");

// function StudyList(text){
//   const div1 = document.createElement("div");
//   const div2 = document.createElement("div");
//   const div3 = document.createElement("div");
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const button = document.createElement("button");
//   button.classList.add("btn")
//   div2.classList.add("btnClass")
//   div3.classList.add("LiBtn");
//   span.innerText = text;
//   div1.appendChild(li);
//   li.appendChild(span);
//   div2.appendChild(button);
//   div3.appendChild(div1);
//   div3.appendChild(div2);
//   output.appendChild(div3);
//   // document.getElementsByTagName("button").onclick = function () {
//   //   alert('I\'m clicked!');
//   //};
// }

// function submit(event){
//   event.preventDefault();
//   const now = IStudy.value;
//   StudyList(now);

//   var ReviewBtn = document.querySelectorAll(".btn");
//   for (var i=0; i<ReviewBtn.length; i++) {
//     goReview[i].addEventListener("click", GoReview);
//   }
//   // if(StudyList(now)==true) {
//   //   document.querySelector(".btn").addEventListener("click", console.log("asdf"))
//   // }
//   IStudy.value="";
// }

// // function ReviewButton(){
// //   window.onload = function() {
// //   var review = document.querySelector("button");
// //   review.onclick=function(){
// //     console.log("asdf")
// //     alert("click!")
// //   }
// // }
// // }


// function init(){
//   form_study.addEventListener("submit",submit);
// }
// init();
// // review.addEventListener("click", console.log("asdf"))

// function GoReview() {
 
// }

// $(document).on("click", ".btn", function() {
//   document.styleSheets[0].addRule('body.blur::before',
//   "-webkit-filter: blur(5px); -moz-filter: blur(5px); -o-filter: blur(5px); -ms-filter: blur(5px); filter: blur(5px);");
//   alert("버튼을 클릭");
// });