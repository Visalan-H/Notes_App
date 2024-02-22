const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
const resetBtn=document.querySelector(".reset");
let notes=document.querySelectorAll(".input-box");

function shownotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
shownotes();

function updatestorage()
{
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="notesapp_images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updatestorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup=function()
            {
            updatestorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key==="Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

resetBtn.addEventListener("click",()=>{
    localStorage.clear();
    window.location.reload();
})

