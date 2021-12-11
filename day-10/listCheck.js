let mobile = false;
const items = document.getElementsByClassName('sidebar-item');

function checkWidth(){
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('menu');
    if(window.innerWidth < 450 && !mobile){
        //open menu
        menu.style.height = 'auto';
        menu.style.width = '100%';
        menu.style.padding = '16px';
        //change sidebar item width
        for(let i = 0; i < items.length; i++){
            items[i].style.width = '100%';
        }
        //change sidebar direction
        sidebar.style.flexDirection = 'column';
        sidebar.style.overflowY = 'hidden';
        sidebar.style.height = menu.scrollHeight.toString() + 'px';
        //finished switching
        mobile = true;
    }
    else if(window.innerWidth >= 450 && mobile){
        //close sidebar
        closeSidebar();
        //change sidebar item width
        for(let i = 0; i < items.length; i++){
            items[i].style.width = 'auto';
        }
        //close menu
        menu.style.height = '0';
        menu.style.width = '0';
        menu.style.padding = '0';
        //change sidebar direction
        sidebar.style.flexDirection = 'row';
        sidebar.style.height = 'auto';
        //finished switching
        mobile = false;
    }
}

window.addEventListener('resize', checkWidth);