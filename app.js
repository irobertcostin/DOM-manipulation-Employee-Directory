
let container = document.querySelector(".container")
let paging = document.querySelector(".paging")
let input=document.querySelector(".search-input")

attachCards(data,1);

creazaButoane(data.length/(container.children.length-1));


paging.addEventListener("click", (e) =>{
    
    let obj = e.target;
    if(obj.id == obj.textContent && input.value==""){
        let pag=+obj.textContent;
        attachCards(data,pag);
        let modal = document.querySelector(".modal")
        container.classList.remove("container-margin");
        card.removeChild(modal)
    }

})

// if(obj.tagName == "BUTTON"){
//     let pag=+obj.textContent;
//     attachCards(data,pag);
// }


input.addEventListener("input", () => {
    card.innerHTML="";
    container.classList.remove("container-margin")
    container.innerHTML="";

    let text=input.value.toLowerCase();
    // console.log(text);
    let arr=search(data,text);
    
    
    console.log(arr);
    console.log(arr.length);

    let x = attachCards(data,1).length;
    let k = Math.ceil(arr.length/x);
    console.log(k);

    for(i=1;i<=k;i++){
        attachCards(arr,i);
    }

    creazaButoane(k);

    paging.addEventListener("click", (e) =>{
    
        let obj = e.target;
        if(obj.id == obj.textContent ){
            let pag=+obj.textContent;
            attachCards(arr,pag);
        }
    
    })
    
    

})


// functie sort 
let selector = document.querySelector(".sort-options");


selector.addEventListener("change", ()=>{
    card.innerHTML="";
    let x = selector.children;


    // for(i=0;i<x.length;i++){
    //     sort(data,)
    // }

    sort(data);
    attachCards(data,1)

})


let indivizi=document.querySelectorAll(".individ")
let body = document.querySelector(".body")
let card = document.querySelector(".card")

body.addEventListener("click", (e) =>{

    let obj = e.target;
    
    // console.log(obj)
    if(obj.classList.contains("individ")){
    card.innerHTML="";
    card.appendChild(createModal());
    container.classList.add("container-margin");

    let x = obj.children;
    
    

    let infoCard = populateCard(data,x[2].textContent);
    // console.log(infoCard)
    let image = document.getElementById("portrait")
    // console.log(image)
    image.src= infoCard.picture.large;
    
    let cardData = document.querySelector(".data")
    let infoArr = cardData.children;
    infoArr[0].textContent = infoCard.name.title + " " + infoCard.name.first +" "+infoCard.name.last;
    infoArr[1].textContent = infoCard.email;
    infoArr[2].textContent = "Reg Date "+ infoCard.registered.date;
    infoArr[3].textContent = "Age "+ infoCard.registered.age;
    

    }else if (obj.classList.contains("esc")){
        let modal = document.querySelector(".modal")
        card.removeChild(modal)
        container.classList.remove("container-margin")
    } else if (obj.id=="left") {
        console.log("stanga")

        // console.log(obj)
    }else if (obj.classList.contains("test")){
        console.log("right")

    }
    

    
})
