const btnReir = document.querySelector(".btn");
const txtDeslizar = document.querySelector(".broma");

var URL 

btnReir.addEventListener("click", getMethod);

async function getMethod(){
    txtDeslizar.classList.remove("deslizar");
    const data = await fetch(URL).then((e) => e.json());
    if(data){
        console.log(data);
        txtDeslizar.innerHTML = data.joke;
        txtDeslizar.classList.add("deslizar");
    }
}