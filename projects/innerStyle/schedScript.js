var imgCount = 0;
var title;
var desc;
var imgContent = [
 ["imgOption1", "Requestee Panel View"],
 ["imgOption2", "Reservation Panel View"],
 ["imgOption3", "Upcomings Panel View"],
 ["imgOption4", "Past Events Panel View"],
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
