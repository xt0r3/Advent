const sidebar = document.getElementById('sidebar');
const menu = document.getElementById('menu');

function toggleSidebar(){
    if(sidebar.style.height === 'auto'){
        closeSidebar();
    }
    else{
        openSidebar();
    }
}

function closeSidebar(){
    sidebar.style.height = menu.scrollHeight.toString() + 'px';
    menu.style.backgroundColor = '#41a298';
}

function openSidebar(){
    sidebar.style.height = 'auto';
    menu.style.backgroundColor = '#2a6c63';
}

menu.addEventListener('click', toggleSidebar);