function btnClick(){
    console.log("Hello world!");
}

const myBtn = document.getElementById("myButton");
// myBtn.addEventListener("click", btnClick);
myBtn.onclick = btnClick;

// btnClick();