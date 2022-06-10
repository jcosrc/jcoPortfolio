var imgCount = 0;
var title;
var desc;
var imgContent = [
 ["imgOption1", "User Loging"],
 ["imgOption2", "Payroll User Input"],
 ["imgOption3", "Compute Layout"],
 ["imgOption4", "Payroll Submit"],
 ["imgOption5", "Payroll in Grid View"],
 ["imgOption6", "Third Floor Layout"],
 ["imgOption7", "Fourth Floor Layout"],
 ["imgOption8", "Network Layout"],
];
function previewImg(imgSrc){
 document.getElementById("imgViewer").src = imgSrc.src;
    for(imgCount = 0; imgCount < imgContent.length; imgCount++) {
        if(imgContent[imgCount][0] == imgSrc.id) {
            title = imgContent[imgCount][1];
            document.getElementById("topicTtl").innerHTML = title;
        }
    } 
}
