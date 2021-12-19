
function openSideMenu() {
    document.querySelector('.sideNav').style.transform = "translateX(0px)";
    document.querySelector('#openNav').style.display = "none";
    document.querySelector('#closeNav').style.display = "inline-block";
}

function closeSideMenu() {
    document.querySelector('.sideNav').style.transform = "translateX(-500px)";
    document.querySelector('#openNav').style.display = "inline-block";
    document.querySelector('#closeNav').style.display = "none";
}

document.querySelector('.showcase').addEventListener('click', ()=>
closeSideMenu())

