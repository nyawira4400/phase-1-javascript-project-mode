const addNewTask=document.querySelector(".inputField input");
const addBtn =document.querySelector(".inputField button");
const clearBtn = document.querySelector(".footer button");

addNewTask.onkeyup =() =>{
    let userData = addNewTask.value;
    if(userData.trim () !=0){
        addBtn.classList.add("Add new task");
    }
    else{
        addBtn.classList.remove("Add new task")
    }
}

function getAddBtn(){
    var addBtn=addNewTask;
    const addBtn=document.querySelector("inputField button");
    addBtn.addEventListener('submit',()=>{
        addBtn += addNewTask
        console.log(addBtn);
        document.getElementById("Add new task").innerHTML = data.addBtn;
    });
};

getAddBtn()

function getClearBtn(){
    var clearBtn=clearAll;
    const clearBtn=document.querySelector("footer button");
    clearBtn.addEventListener('click',()=>{
        clearBtn -=clearAll
        console.log(clearBtn);
        document.getElementById("clear all").innerHTML=data.clearAll
    });

};