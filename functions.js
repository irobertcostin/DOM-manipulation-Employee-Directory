// functie ce primeste un obj si creaza un card 

function createCard(obj) {

    let div = document.createElement("div");
    div.classList.add("individ");

    let image = document.createElement("img");
    image.classList.add("poza");
    image.src=obj.picture.medium;

    let p = document.createElement("p");
    p.id = "name";
    p.textContent=obj.name.first + " " + obj.name.last;

    let pp = document.createElement("p");
    pp.id="email";
    pp.textContent=obj.email;

    let ppp=document.createElement("p");
    ppp.id="age"
    ppp.textContent= "Age: " + obj.registered.age;


    div.appendChild(image);
    div.appendChild(p);
    div.appendChild(pp);
    div.appendChild(ppp);

    return div;

}

// functie ce primeste ca parametru un obj si array, si 

function attachCards(arr,nrPagina) {

    arr=generate(arr,9,nrPagina);
    let main = document.querySelector(".container");
    main.innerHTML="";
    for(i=0;i<arr.length;i++){
        main.appendChild(createCard(arr[i]));
    }

    return arr;

}   

// functie ce primeste ca parametru un vector nr carduri si nr pagini 

function generate (arr,nrCarduri,nrPagini){
    let filter=[];
    for(let i=nrCarduri*(nrPagini-1);i<arr.length&&i<=nrCarduri*nrPagini-1;i++){
        filter.push(arr[i]);
    }
    return filter;
}




function search(arr,name) {
    
    let searched=[];
    for(i=0;i<arr.length;i++){

        if(arr[i].name.first.toLowerCase().includes(name) || arr[i].name.last.toLowerCase().includes(name)){
            searched.push(arr[i]);
        }
    }

    return searched;

}

// functie care genereaza butoane
function creazaButoane(numar) {
    let pagingA = document.querySelector(".paging");
    pagingA.innerHTML = "";

    for(i=1;i<=numar;i++){

        let buton = document.createElement("button");
        buton.textContent=i;
        buton.id=i;
        paging.appendChild(buton);

    }


}

// functie de sortare 

function sort (arr,parametru) {


if (parametru = "asc"){

    for (i=0;i<arr.length;i++){

        for(j=i+1;j<arr.length;j++){

        if(arr[j].name.first<arr[i].name.first){
            let x = arr[i];
            arr[i]= arr[j];
            arr[j] = x;

        }

    }
    
}


} else if(parametru = "des"){
    for (i=0;i<arr.length;i++){

        for(j=i+1;j<arr.length;j++){

        if(arr[j].name.first<arr[i].name.first){
            let x = arr[i];
            arr[i]= arr[j];
            arr[j] = x;

        }

    }
    
}
}

return arr;

}


//functie ce primeste ca parametru un obiect si creaza un card

function createModal(obj) {

    let asideModal = document.createElement("aside");
    asideModal.classList.add("modal");

    let escBtn = document.createElement("button");
    escBtn.classList.add("esc");
    escBtn.textContent="X";
    asideModal.appendChild(escBtn)
    


    let divImg = document.createElement("div");
    divImg.classList.add("img-abs")
    asideModal.appendChild(divImg)


    let pfpImg = document.createElement("img");
    pfpImg.id="portrait";
    divImg.appendChild(pfpImg);

    let divArrows = document.createElement("div");
    divArrows.classList.add("arrows");
    asideModal.appendChild(divArrows)

    let leftArrow = document.createElement("img");
    leftArrow.id="left"
    leftArrow.src ="./icons8-cross-mark-button-emoji/icons8-double-left-50.png";
    let rightArrow = document.createElement("img");
    rightArrow.classList.add("test")
    rightArrow.src="./icons8-cross-mark-button-emoji/icons8-double-right.png";
    divArrows.appendChild(leftArrow);
    divArrows.appendChild(rightArrow);
    
    let dataDiv = document.createElement("div");
    dataDiv.classList.add("data");
    asideModal.appendChild(dataDiv)

    let p1=document.createElement("p");
    p1.id="full-name";

    let p2=document.createElement("p");
    p2.id="email";
    

    let p3=document.createElement("p");
    p3.id="regdate";
    
    
    let p4=document.createElement("p");
    p4.id="age";
    

    dataDiv.appendChild(p1);
    dataDiv.appendChild(p2);
    dataDiv.appendChild(p3);
    dataDiv.appendChild(p4);

    return asideModal;
}


//primeste 2 parametri si returneaza un obiect
function populateCard(arr,obj) {

    let x = "";

    for(i=0;i<arr.length;i++){
        
        if (arr[i].email.toLowerCase() == obj.toLowerCase()){
            x = arr[i];
        }
        
        

    }
    return x;
    
}


// functie ce primeste un array si un obiect si returneaza obiectul din fata 

function previous(arr,obj) {

    let new = [];
    let y = 0;

    for (i=0;i<arr.length;i++){
        if(arr[i].name.last == obj.name.last) {
            
        }


    }

}


