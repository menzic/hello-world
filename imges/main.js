const menuIcon = document.getElementById("menu-icon");
const slideMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("menu-icon");
const searchIcon = document.getElementById("search-icon");
const searchbox = document.getElementById("searchbox");

searchIcon.addEventListener('click',function(){
    if(searchbox.style.top == '72px') {
        searchbox.style.top = '24px';
        searchbox.style.pointerEvents ='none';
    }else{
        searchbox.style.top ='72px';
        searchbox.style.pointerEvents = 'auto';
    }

    
});
