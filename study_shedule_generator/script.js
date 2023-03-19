const addSubjectsBtn = document.getElementById("add-subjects-btn");
const subjectFields = document.getElementById("subject-fields");

addSubjectsBtn.addEventListener("click", function() {
    const numSubjects = document.getElementById("subjects").value;
    const numDays = document.getElementById("days").value;

    subjectFields.innerHTML = "";

    for (let i = 0; i < numSubjects; i++) {

        
        const subjectLabel = document.createElement("label");
        subjectLabel.innerText = `Subject ${i + 1}:`;

        const subjectInput = document.createElement("input");
        subjectInput.setAttribute("type", "text");
        subjectInput.setAttribute("name", `subject_${i + 1}`);
        subjectInput.setAttribute("id",`sub_${i + 1}`)
        



        const priorityLabel = document.createElement("label");
        priorityLabel.innerText = "Priority:";

        const priorityInput = document.createElement("input");
        priorityInput.setAttribute("type", "number");
        priorityInput.setAttribute("name", `priority_${i + 1}`);
        priorityInput.setAttribute("min", "1");
        priorityInput.setAttribute("max", numDays);
        priorityInput.setAttribute("id",`s${i+1}`);



        

        const br = document.createElement("br");

        subjectFields.appendChild(subjectLabel);
        subjectFields.appendChild(subjectInput);
        subjectFields.appendChild(priorityLabel);
        subjectFields.appendChild(priorityInput);
        
        subjectFields.appendChild(br);

   

    
    }
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("onclick","getVars()");
    submitBtn.setAttribute("id","sub_button")
    submitBtn.innerText = "Submit";
    subjectFields.appendChild(submitBtn);

});




function getVars() {
    var subjects = []
    var s = []
    var nod = document.getElementById("days").value;
    var nos = document.getElementById("subjects").value;
    for(let i = 0;i<nos;i++){
        
        subjects[i] = document.getElementById(`sub_${i + 1}`).value;
        s[i] = document.getElementById(`s${i + 1}`).value;
        
    }
   



    // if(nod<5){
    //     alert("Sorry, a schedule cannot be prepared for 0" + nod + " day(s)! Please try again.");
    //     return(0);
    //     document.getElementById("btnb").disabled = false;
    //   }
    
    //   else {
    //     document.getElementById("btnb").disabled = true;
    //     document.getElementById("demo").innerHTML = '<h3><strong>Schedule Generated! Scroll down to see it or check your Downloads for the PDF. All the best!</strong></h3>';
    //   }
    
    
    
    algop1(nod,s,subjects);
}

function indexOfTT(chk,subj) {
  for(var cc = 0; cc<subj.length;cc++){
      if(chk == subj[cc])
          return cc;
  }
}

function algop1(days,as,subject) {
var slot = []
var rate = []
for(i=0;i<5;i++)
   slot[i] = 0;
for(i = 0;i<as.length;i++){
  rate.push(as[i])
}
   

var sum = 0;
var i,j,k=0;
var c = [];
var s = (days-5)*2;
while(s>4)
  {
      c[0] = s;
      for(i=0;i<5;i++)
          slot[i]+=(rate[i]*(s))/50;
      s=0;
      for(i=0;i<5;i++)
          s+=parseInt(slot[i]);
      s=((days-5)*2)-s;
      c[1] = s;
      if(c[1] - c[0] == 0)
           break;
  }
  for(i=0;i<5;i++)
      if(s>0)
      {
          slot[i] = parseInt(slot[i]) + 1;
          s--;
      }
  console.log('SUBJECT \t SLOTS');
  console.log(slot)
  for(i=0;i<5;i++) {
      slot[i] = slot[i].toFixed(0);
    console.log(subject[i], slot[i]);
  }

  //Enter the round function code here
  for(i=0; i<5; i++)
    sum += parseInt(slot[i]);
  var d = (days-5)*2;
  var diff = sum - d;
  if(diff<0){
    while(diff!=0){
      slot[0] = parseInt(slot[0]) + 1;
      diff += 1;
    }
  }

  else if(diff>0){
    while(diff!=0){
      slot[0] = parseInt(slot[0]) - 1;
      diff -= 1;
    }
  }

  console.log('SUBJECT \t SLOTS');
  for(i=0;i<5;i++)
    console.log(subject[i], slot[i]);
  
  
  
  s=(days-5)*2;
  var flag = [];
  var tt= [];
  for(i=0; i<5; i++)
    flag[i] = 0;

  for(i = 0; i<5;i++)
  {
  k = 0;
  while(slot[i]!=0)
  {
     if(flag[k%s]!=-1)
     {
        tt[k%s] = subject[i];
        flag[k%s]= -1;
        slot[i] -= 1;
        k+=5;
    }
    else
      k+=1;
  }
}

var iOS;
var unitorder = [1,2,3,4,5,3,5,1,3,2,4];
var units = [];
var counters = [0,0,0,0,0];
for(i = 0;i<tt.length; i++) {
    iOS = indexOfTT(tt[i],subject);
    units[i] = unitorder[counters[iOS]%11]
    counters[iOS] += 1;
}


for(i = 0;i<tt.length; i++) {
console.log(units[i],tt[i]);
}

var morn = [];
var even = [];
var munit = [];
var eveunit = [];
for(i = 0; i<s/2; i++)
 {
   morn[i] = tt[i];
   munit[i] = units[i];
   even[i] = tt[(s/2)+i];
   eveunit[i] = units[(s/2)+i];
}

console.log('\n DAY #\t MORNING \t EVENING\n');
for(i = 0; i<(s/2); i++){
  console.log(i);
  console.log(morn[i],"- unit: ",munit[i], "|\t|", even[i],"- unit: ",eveunit[i]); 
}



  function tableCreate() {
  var body = document.getElementById('tablepart');
  var tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '3');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < (days); i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 3; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('\u0020'))
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
  var tr = document.createElement('tr');
    for (var j = 0; j < 3; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('\u0020'))
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
    tbl.appendChild(tbdy);
    body.appendChild(tbl);




  tbl.rows[0].cells[0].innerHTML = "<b>Day</b>";
  tbl.rows[0].cells[1].innerHTML = "<b>Morning Slot</b>";
  tbl.rows[0].cells[2].innerHTML = "<b>Evening Slot</b>";
  var currentDate = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  for(var i = 1; i < tbl.rows.length; i++)
      {
        currentDate.setDate(currentDate.getDate() + 1);
        tbl.rows[i].cells[0].innerHTML = (currentDate.getDate() + '/' + (parseInt(currentDate.getMonth())+1) + '/' + currentDate.getFullYear() + " -- " + weekday[currentDate.getDay()]);
        tbl.rows[i].cells[1].innerHTML = (morn[i-1] + "- Unit: " + munit[i-1]);
        tbl.rows[i].cells[2].innerHTML = (even[i-1] + "- Unit: " + eveunit[i-1]);
      }
      
      tbl.rows[days-4].cells[1].innerHTML = (subject[4] + "- Unit: 1,2,3");
      tbl.rows[days-4].cells[2].innerHTML = (subject[4] + "- Unit: 3,4,5");
      tbl.rows[days-3].cells[1].innerHTML = (subject[3] + "- Unit: 1,2,3");
      tbl.rows[days-3].cells[2].innerHTML = (subject[3] + "- Unit: 3,4,5");
      tbl.rows[days-2].cells[1].innerHTML = (subject[2] + "- Unit: 1,2,3");
      tbl.rows[days-2].cells[2].innerHTML = (subject[2] + "- Unit: 3,4,5");
      tbl.rows[days-1].cells[1].innerHTML = (subject[1] + "- Unit: 1,2,3");
      tbl.rows[days-1].cells[2].innerHTML = (subject[1] + "- Unit: 3,4,5");
      tbl.rows[days].cells[1].innerHTML = (subject[0] + "- Unit: 1,2,3");
      tbl.rows[days].cells[2].innerHTML = (subject[0] + "- Unit: 3,4,5");

}

function Export() {
      html2canvas(document.getElementById('tablepart'), {
          onrendered: function (canvas) {
              var data = canvas.toDataURL();
              var docDefinition = {
                  content: [{
                      image: data,
                      width: 500
                  }]
              };
              pdfMake.createPdf(docDefinition).download("Schedule.pdf");
          }
      });
}


tableCreate();

Export();
}

function setColor(btn, color){
  var count=1;
  var property = document.getElementById(btn);
  if (count == 0){
      property.style.backgroundColor = "#FFFFFF"
      count=1;        
  }
  else{
      property.style.backgroundColor = "#d0d0d0"
      count=0;
  }

}

