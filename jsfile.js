const menu = document.getElementById('show');
const m_icon = document.getElementById('menu-icon');
console.log(menu)
if(window.matchMedia("(max-width: 400px)")){
m_icon.addEventListener('click',(e)=>{
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
    }
    else{
        menu.style.display = 'none';
    }
})
}
else if(window.matchMedia('(min-width: 400px)')){
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
    }
    else{
        menu.style.display = 'none';
    }
}
else{
    m_icon.style.display = 'flex';
}