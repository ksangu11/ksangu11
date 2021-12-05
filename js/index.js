//DOM loaded
document.addEventListener("DOMContentLoaded", function(event){
    //fetch JSON
    fetch("degrees.json")
    .then(response => response.json())
    .then(data => {
        console.log("My data", data);
        let dataDiv = document.getElementById("dataGoesHere");
        dataDiv.innerHTML = '<p>' + data.degrees[0].school, + ' '+ data.degrees[0].major, + ' '+data.degrees[0].type, + ' '+ data.degrees[0].yearConf, '</p>'}
    });
});