document.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",e=>{
        console.log("Navigatie:",link.innerText);
    });
});

window.addEventListener("scroll",()=>{
    const cards=document.querySelectorAll(".card");
    cards.forEach(card=>{
        const top=card.getBoundingClientRect().top;
        if(top<window.innerHeight-100){
            card.style.opacity="1";
            card.style.transform="translateY(0)";
        }
    });
});

document.querySelectorAll(".card").forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s";
});
