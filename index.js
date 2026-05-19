let inp = document.querySelector("#task");

let body = document.querySelector("#body");

let add = document.querySelector("#add");


// let arr=[];
let ul = document.createElement("ul");
ul.classList.add("ul");

add.addEventListener("click", () => {
    // arr.push(inp.value)
    
    // let html = "<ul>"
    
    // for(let i=0;i<arr.length;i++){
    //     let li = document.createElement("li");
    //     html+=`task: ${arr[i]}\n`
    // }
    // html+= "</ul>"
    // body.innerHTML = html;



    // let main = document.createElement("main");
    // main.classList.add("main");
    
    
    let li = document.createElement("li");
    li.textContent = inp.value;   
    
    let done = document.createElement("button");
    done.textContent = "Done";

    let remove = document.createElement("button");
    remove.textContent = "Remove";
    
    
    li.appendChild(done);
    li.appendChild(remove);
    
    body.appendChild(ul);

    if(inp.value !== ""){
        ul.appendChild(li);
  
    }
    

    done.addEventListener("click", ()=>{
        li.style.textDecoration = "line-through";
    })

    remove.addEventListener("click", function(){
        // ul.remove(li);
        li.remove();
    })



    inp.value = "";
    console.log(li);

})




//made myself without watching any tutorial for this particular thing...