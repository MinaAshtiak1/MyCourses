/*document.getElementById("add-course").onclick=function(){
  document.getElementById("right-sec").appendChild(document.getElementsByClassName('one-course')[0].cloneNode(true));
}*/
 var count=-1;
document.getElementById("add-course").onclick=function(){
    count+=1; 
  var rightSec = document.getElementById("right-sec");
  var oneCourse = document.createElement("div");
    rightSec.appendChild(oneCourse);
    oneCourse.setAttribute("class","one-course");
  var beforeProgress = document.createElement("div");
    oneCourse.appendChild(beforeProgress);
    beforeProgress.setAttribute("class","before-progress");
  var nameOfCourse = document.createElement("div");
    beforeProgress.appendChild(nameOfCourse);
    nameOfCourse.setAttribute("class","name-course");
    document.getElementsByClassName('name-course')[count].textContent=document.getElementById("name-course-input").value;
  var improveRadio = document.createElement("div");
    beforeProgress.appendChild(improveRadio);
    improveRadio.setAttribute("class","improve-radio");
    var currentVideo=document.getElementById("in-course-input").value;
    var totalNumberVideos=document.getElementById("total-course-input").value;
    document.getElementsByClassName('improve-radio')[count].textContent=Math.round(((currentVideo/totalNumberVideos)*100))+"%";
  var progressContainer = document.createElement("div");
    oneCourse.appendChild(progressContainer);
    progressContainer.setAttribute("class","progress-container");
  var progressValue = document.createElement("div");
    progressContainer.appendChild(progressValue);
    progressValue.setAttribute("class","progress-value");
   document.getElementsByClassName('progress-value')[count].style.width=((currentVideo/totalNumberVideos)*100)+"%";
    document.getElementsByClassName('one-course')[count].style.border="3px solid"+document.getElementById("color-progress").value;
      document.getElementsByClassName('progress-value')[count].style.backgroundColor=document.getElementById("color-progress").value;   document.getElementsByClassName('name-course')[count].style.backgroundColor=document.getElementById("color-progress").value;
    document.getElementsByClassName('improve-radio')[count].style.backgroundColor=document.getElementById("color-progress").value;
    
}
document.getElementById("add-course2").onclick=function(){
    count+=1; 
  var rightSec = document.getElementById("right-sec");
  var oneCourse = document.createElement("div");
    rightSec.appendChild(oneCourse);
    oneCourse.setAttribute("class","one-course");
  var beforeProgress = document.createElement("div");
    oneCourse.appendChild(beforeProgress);
    beforeProgress.setAttribute("class","before-progress");
  var nameOfCourse = document.createElement("div");
    beforeProgress.appendChild(nameOfCourse);
    nameOfCourse.setAttribute("class","name-course");
    document.getElementsByClassName('name-course')[count].textContent=document.getElementById("name-course-input2").value;
  var improveRadio = document.createElement("div");
    beforeProgress.appendChild(improveRadio);
    improveRadio.setAttribute("class","improve-radio");
    var currentVideo=document.getElementById("in-course-input2").value;
    var totalNumberVideos=document.getElementById("total-course-input2").value;
    document.getElementsByClassName('improve-radio')[count].textContent=Math.round(((currentVideo/totalNumberVideos)*100))+"%";
  var progressContainer = document.createElement("div");
    oneCourse.appendChild(progressContainer);
    progressContainer.setAttribute("class","progress-container");
  var progressValue = document.createElement("div");
    progressContainer.appendChild(progressValue);
    progressValue.setAttribute("class","progress-value");
   document.getElementsByClassName('progress-value')[count].style.width=((currentVideo/totalNumberVideos)*100)+"%";
    document.getElementsByClassName('one-course')[count].style.border="3px solid"+document.getElementById("color-progress2").value;
      document.getElementsByClassName('progress-value')[count].style.backgroundColor=document.getElementById("color-progress2").value;   document.getElementsByClassName('name-course')[count].style.backgroundColor=document.getElementById("color-progress2").value;
    document.getElementsByClassName('improve-radio')[count].style.backgroundColor=document.getElementById("color-progress2").value;
    
}
document.getElementById("menu").addEventListener("click",menuFunction);
function menuFunction(){
  document.getElementById("menu-bar").classList.toggle("hiddens");
}
document.getElementById("right-sec").addEventListener("click",menuFunctionx);
function menuFunctionx(){
  document.getElementById("menu-bar").classList.add("hiddens");
}
