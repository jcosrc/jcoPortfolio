var imgCount = 0;
var title;
var desc;
var imgContent = [
 ["imgOption1", "User getting a number"],
 ["imgOption2", "Cashier List"],
 ["imgOption3", "Removing ques from the list"],
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
