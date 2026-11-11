// Меню на мобильных
const toggle=document.querySelector('.nav-toggle'),menu=document.getElementById('menu');
toggle.addEventListener('click',()=>{const o=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',o)});
menu.addEventListener('click',()=>menu.classList.remove('open'));

// Лайтбокс
const lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img'),lbCap=lb.querySelector('figcaption');
document.querySelectorAll('.tile').forEach(t=>t.addEventListener('click',()=>{
  lbImg.src=t.dataset.src;lbImg.alt=t.querySelector('img').alt;lbCap.textContent=t.dataset.cap;lb.hidden=false;lb.querySelector('.lb-close').focus();
}));
const closeLb=()=>{lb.hidden=true};
lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('lb-close'))closeLb()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});

// Карусель цитат
const qs=[...document.querySelectorAll('.quote')],count=document.getElementById('count');
let i=0,timer;
function show(n){qs[i].classList.remove('active');i=(n+qs.length)%qs.length;qs[i].classList.add('active');count.textContent=(i+1)+' / '+qs.length}
function auto(){clearInterval(timer);timer=setInterval(()=>show(i+1),6000)}
document.getElementById('next').onclick=()=>{show(i+1);auto()};
document.getElementById('prev').onclick=()=>{show(i-1);auto()};
auto();

// Форма обратной связи
const form=document.getElementById('form'),st=document.getElementById('status');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  if(!d.get('name').trim()||!/^\S+@\S+\.\S+$/.test(d.get('email'))||!d.get('message').trim()){
    st.className='status error';st.textContent='Заполните имя, укажите корректный email и напишите сообщение.';return;
  }
  st.className='status';st.textContent='Спасибо, '+d.get('name').trim()+'! Сообщение отправлено.';form.reset();
});

// Политика конфиденциальности
document.getElementById('pp').addEventListener('click',e=>{e.preventDefault();const p=document.getElementById('privacy');p.hidden=!p.hidden});
