// sets current date 
function date() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(date, 1000);

// allow input of tasks on time block
const task9AM = document.createElement("input");
task9AM.placeholder = "";
task9AM.id = "input9AM";
div9AM.appendChild(task9AM);

const task10AM = document.createElement("input");
task10AM.placeholder = "";
task10AM.id = "input10AM";
div10AM.appendChild(task10AM);

const task11AM = document.createElement("input");
task11AM.placeholder = "";
task11AM.id = "input11AM";
div11AM.appendChild(task11AM);

const task12PM = document.createElement("input");
task12PM.placeholder = "";
task12PM.id = "input12PM";
div12PM.appendChild(task12PM);

const task1PM = document.createElement("input");
task1PM.placeholder = "";
task1PM.id = "input1PM";
div1PM.appendChild(task1PM);

const task2PM = document.createElement("input");
task2PM.placeholder = "";
task2PM.id = "input9AM";
div2PM.appendChild(task2PM);

const task3PM = document.createElement("input");
task3PM.placeholder = "";
task3PM.id = "input3PM";
div3PM.appendChild(task3PM);

const task4PM = document.createElement("input");
task4PM.placeholder = "";
task4PM.id = "input4PM";
div4PM.appendChild(task4PM);

const task5PM = document.createElement("input");
task5PM.placeholder = "";
task5PM.id = "input5PM";
div5PM.appendChild(task5PM);