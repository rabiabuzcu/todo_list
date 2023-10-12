const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
   
// Set kullanarak görevleri saklamak için bir Set oluştur
const tasksSet = new Set();

function addTask(){
     const taskText = inputBox.value.trim();
     
     

     if (taskText === '') {
        alert("Lütfen bir görev girin!");
        inputBox.value = "";
        return;
    }


        // Aynı görevi kontrol et
        if (tasksSet.has(taskText)) {
            alert("Bu görev zaten ekli!");
            inputBox.value = "";
            return;
        }
    
        // Set'e görevi ekleyin
        tasksSet.add(taskText);
    
     





      
    
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
      
       
    


      
    inputBox = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        if (confirm("Gerçekten bu görevi silmek istiyor musunuz?")) 
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        if (confirm("Gerçekten bu görevi silmek istiyor musunuz?"))
        e.target.parentElement.remove();
        saveData();
    }

   
 
},false);






function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
   // listContainer.innerHTML = localStronge.getItem("data");
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}
showTask()