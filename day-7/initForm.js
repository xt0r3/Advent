
function initForm(id){
    // ARRANGE
    let uname = document.getElementById(id + "-username");
    let pw = document.getElementById(id + "-password");
    let submit = document.getElementById(id + "-submit");
    let form = document.getElementById(id);

    uname.setAttribute('placeholder', 'Username');
    uname.setAttribute('type', 'text');
    uname.setAttribute('class', 'username');

    pw.setAttribute('placeholder', 'Password');
    pw.setAttribute('type', 'text');
    pw.setAttribute('class', 'password');

    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Enter');

    // ACT
    nonEmpty(uname);
    nonEmpty(pw);
    uname.addEventListener("input", () => {validateMin(uname, 6, 20); nonEmpty(uname);});
    pw.addEventListener("input", () => {validateMin(pw, 8); nonEmpty(pw);});
}