// Sticky header effect
window.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    if(header){
        if(window.scrollY > 50){ header.classList.add('scrolled'); } 
        else { header.classList.remove('scrolled'); }
    }
});

// Shop filters
function filterProducts(category){
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    cards.forEach(card=>{
        if(category==='all'){ card.style.display='block'; }
        else{ card.style.display=card.classList.contains(category)?'block':'none'; }
    });
}
