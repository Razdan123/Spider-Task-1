var dt = new Date();
function renderDate() {
  dt.setDate(1);
  var day = dt.getDay();
  var today = new Date();
  var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
  ).getDate();

  var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("month").innerHTML = months[dt.getMonth()];
  document.getElementById("date_str").innerHTML = dt.toDateString();
  var cells = "";
  for (x = day; x > 0; x--) {
    cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
  }
  console.log(day);
  for (i = 1; i <= endDate; i++) {
    if (i == today.getDate() && dt.getMonth() == today.getMonth())
      cells += "<div class='today'>" + i + "</div>";
    else cells += "<div>" + i + "</div>";
    
  }
  document.getElementsByClassName("days")[0].innerHTML = cells;
}


function moveDate(para) {
  if (para == "prev") {
    dt.setMonth(dt.getMonth() - 1);
  } else if (para == "next") {
    dt.setMonth(dt.getMonth() + 1);
  }
  renderDate();
}

//setting Current itme on mobile
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("timerbox").innerHTML = t;
}

//code for to-do list---

const inputBox = document.querySelector(".todo input");
const plusbtn = document.querySelector(".todo button");
const currlist = document.querySelector('.mylist');

inputBox.onkeyup = ()=>{
    let theinput = inputBox.value;
    if(theinput.trim()!=0){
        plusbtn.classList.add("active");
    }
    else{
        plusbtn.classList.remove("active");
    }
}
displaytask();

plusbtn.onclick = () =>{
    let theinput = inputBox.value;
    let getstorage = localStorage.getItem("New task");
    if(getstorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getstorage);
    }
    listArr.push(theinput);
    localStorage.setItem("New task",JSON.stringify(listArr));
    displaytask();
    plusbtn.classList.remove("active");
}

function displaytask(){
    let getstorage = localStorage.getItem("New task");
    if(getstorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getstorage);
    }
    const pending = document.querySelector(".left");
    pending.textContent = listArr.length;
    
    let newbranch = '';
    listArr.forEach((element, index) => {
        newbranch += `<li>${element}  <p id="mydate" >24/04/3030</p> <span onclick = "deleteTask(${index})"><i class="fa fa-trash-o"></i></span></li>`;

    });
    currlist.innerHTML = newbranch;
    inputBox.value = "";
   // console.log(currlist.innerHTML)
    
}


//deleting my task
function deleteTask(index){
    let getstorage = localStorage.getItem("New task");
    console.log(getstorage);
    listArr = JSON.parse(getstorage);
    listArr.splice(index, 1);
    localStorage.setItem("New task",JSON.stringify(listArr));
    displaytask();
}

function myFunction() {
    var x = document.getElementById("myDate");
    var currentVal = x.value;
    document.getElementById("mydate").innerHTML = currentVal;
}  