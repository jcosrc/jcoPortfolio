var imgCount = 0;
var title;
var desc;
var imgContent = [
 ["imgOption1", "Registration Form"],
 ["imgOption2", "Register Button"],
 ["imgOption3", "Notepad collecting Data from Forms"],
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
