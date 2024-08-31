let eventListener1=document.getElementById('Skills');
eventListener1.addEventListener('click',()=> {
    openTab('skills');
})

let eventListener2=document.getElementById('Experience');
eventListener2.addEventListener('click',()=> {
    openTab('experience');
})

let eventListener3=document.getElementById('Education');
eventListener3.addEventListener('click',()=> {
    openTab('education');
})
let tabLinks=document.querySelectorAll('.links');
let tabContent=document.querySelectorAll('.row4');
function openTab(tabName) {
    tabLinks.forEach((tablink) => {
        tablink.classList.remove('active-link');
    }) 
    tabContent.forEach((tabcontent)=> {
        tabcontent.classList.remove('active-tab')
    })
    event.currentTarget.classList.add("active-link");
    document.getElementById(`${tabName}`).classList.add("active-tab");
}
let sidemenu=document.getElementById('sidemenu');
let xtimesListener=document.getElementById('closemenu');
xtimesListener.addEventListener('click', () => {
    sidemenu.style.right="-200px";
});

let barListener=document.getElementById('openmenu');
barListener.addEventListener('click', () => {
    sidemenu.style.right="0";
});

let submit=document.getElementById('form');
submit.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('.nameform').value="";
    document.querySelector('.mailform').value="";
    document.querySelector('.textform').value="";
    Alert();

});
function Alert() {
    alert("Your form has been sumbitted/Registered");
}

    
