
const imageBox = document.querySelector(".imageBox");
const places = document.getElementById("places");


//*********************** Birinci Şehir */
document.getElementById("city1").addEventListener("click", () => {

    places.innerHTML = "";
    buttonCreate();
    const placeBtn = document.querySelectorAll(".placeBtn");

    for (let n = 0; n < placeBtn.length; n++) {
        placeBtn[n].innerHTML = `${Places[n].name}`;
        placeBtn[n].addEventListener("click", (e) => {
            imageBox.innerHTML = `<img src=${Places[n].image} />`;
            // placeBtn[n].innerHTML = `${Places[n].name}`;
            if(e.target.id === placeBtn[0].id){
                e.target.style.backgroundColor = "rgb(192, 164, 8)";
                placeBtn[1].style.backgroundColor =" gold";
                placeBtn[2].style.backgroundColor =" gold";
            } 
            else if(e.target.id === placeBtn[1].id){
                e.target.style.backgroundColor = "rgb(192, 164, 8)";
                placeBtn[0].style.backgroundColor =" gold";
                placeBtn[2].style.backgroundColor =" gold";
            }else{
                e.target.style.backgroundColor = "rgb(192, 164, 8)";
                placeBtn[1].style.backgroundColor =" gold";
                placeBtn[0].style.backgroundColor =" gold";
            }
            
        });
    }
    imageBox.innerHTML = `<img src=${Places[0].image} />`;
    cityButtonCss(120,80,80);

});



//*********************** İkinci Şehir */
document.getElementById("city2").addEventListener("click", () => {

    places.innerHTML = "";
    buttonCreate();
    const placeBtn = document.querySelectorAll(".placeBtn");

    for (let n = 0; n < placeBtn.length; n++) {
        placeBtn[n].innerHTML = `${Places2[n].name}`;
        placeBtn[n].addEventListener("click", (e) => {
            imageBox.innerHTML = `<img src=${Places2[n].image} />`;
            // placeBtn[n].innerHTML = `${Places2[n].name}`;
            if(e.target.id === placeBtn[0].id){
                e.target.style.backgroundColor = "rgb(192, 164, 8)";
                placeBtn[1].style.backgroundColor =" gold";
                placeBtn[2].style.backgroundColor =" gold";
            } 
            else if(e.target.id === placeBtn[1].id){
                e.target.style.backgroundColor = "rgb(192, 164, 8)";
                placeBtn[0].style.backgroundColor =" gold";
                placeBtn[2].style.backgroundColor =" gold";
            }else{
                e.target.style.backgroundColor = "rgb(192, 164, 8)";
                placeBtn[1].style.backgroundColor =" gold";
                placeBtn[0].style.backgroundColor =" gold";
            }
            
        });
    }
    imageBox.innerHTML = `<img src=${Places2[0].image} />`;
    cityButtonCss(80,120,80);
});



//*********************** Üçüncü Şehir */
document.getElementById("city3").addEventListener("click", () => {

    places.innerHTML = "";
    buttonCreate();
    const placeBtn = document.querySelectorAll(".placeBtn");

    for (let n = 0; n < placeBtn.length; n++) {
        placeBtn[n].innerHTML = `${Places3[n].name}`;
        placeBtn[n].addEventListener("click", (e) => {
            imageBox.innerHTML = `<img src=${Places3[n].image} />`;
            // placeBtn[n].innerHTML = `${Places3[n].name}`;
            if(e.target.id === placeBtn[0].id){
                e.target.style.backgroundColor = "rgb(192, 164, 8)";
                placeBtn[1].style.backgroundColor =" gold";
                placeBtn[2].style.backgroundColor =" gold";
            } 
            else if(e.target.id === placeBtn[1].id){
                e.target.style.backgroundColor = "rgb(192, 164, 8)";
                placeBtn[0].style.backgroundColor =" gold";
                placeBtn[2].style.backgroundColor =" gold";
            }else{
                e.target.style.backgroundColor = "rgb(192, 164, 8)";
                placeBtn[1].style.backgroundColor =" gold";
                placeBtn[0].style.backgroundColor =" gold";
            }
            
        });
    }
    imageBox.innerHTML = `<img src=${Places3[0].image} />`;
    cityButtonCss(80,80,120);
});

function buttonCreate(){
    
    const placeBtn0 = document.createElement("button");
    placeBtn0.className = "placeBtn";
    placeBtn0.id ="no1";
    places.appendChild(placeBtn0);
    const placeBtn1 = document.createElement("button");
    placeBtn1.className = "placeBtn";
    placeBtn1.id ="no2";
    places.appendChild(placeBtn1);
    const placeBtn2 = document.createElement("button");
    placeBtn2.className = "placeBtn";
    placeBtn2.id ="no3";
    places.appendChild(placeBtn2);
}

function cityButtonCss(birim1,birim2,birim3){
    document.getElementById("city1").style.backgroundColor = " rgb(197, 98, 206)";
    document.getElementById("city1").style.width =`${birim1}px`;//80px
    document.getElementById("city2").style.backgroundColor = " rgb(197, 98, 206)";
    document.getElementById("city2").style.width =`${birim2}px`;//80px
    document.getElementById("city3").style.backgroundColor = "rgb(197, 98, 206)";
    document.getElementById("city3").style.width =`${birim3}px`;//120px
}



