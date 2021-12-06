const objects = document.getElementsByClassName("circle");

for(let i = 0; i < objects.length; i++){
    objects[i].style.borderRadius = (objects[i].scrollHeight / 2).toString() + "px";
}