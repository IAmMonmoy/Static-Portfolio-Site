document.addEventListener('DOMContentLoaded',function(event){
    //navigation bar will be closed at start
   
});


//for opening and closing navigation start
var openSidebarButton = document.getElementById("openSidebarButton");
var closeButton = document.getElementById("closeButton");
openSidebarButton.addEventListener('click',openSidebarButtonClicked);
closeButton.addEventListener('click',closeButtonClicked);



function openSidebarButtonClicked()
{
    document.getElementsByClassName('navbar')[0].style.width = '250px';
    //document.getElementsByClassName('bodyContent')[0].style.marginLeft = '250px';
}

function closeButtonClicked()
{
    var x = document.getElementsByClassName('navbar')[0].style.width = '0px';
    document.getElementsByClassName('bodyContent')[0].style.marginLeft = '0px';
}

//for opening and closing navigation end