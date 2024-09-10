////////////////////// NAVBAR HEIGHT
const navBar = document.querySelector("aside");
const navBarHeight = window.innerHeight;
if(window.innerWidth > 749){
    navBar.style.height = navBarHeight + "px";
}


////////////////////// CONVERT COPY TO COPIED TEXT FUNCITON
function copyToCopiedTextFun(copyToCopied){
     setTimeout(
        function() {
            copyToCopied.style.display='inherit';
        }, 10);

     setTimeout(
        function() {
            copyToCopied.style.display='none';
        }, 1000);
}

///////////////////////////////// CODE COPY FUNCTION
$(function(){
    var clipboard = new ClipboardJS('.copyCodeButton');
});
