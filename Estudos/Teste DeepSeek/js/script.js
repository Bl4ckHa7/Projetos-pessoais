/* script.js - Otimizado */
document.addEventListener('DOMContentLoaded',()=>{
let Q=(s,n=document)=>n.querySelector(s);
let A=(s,n=document)=>Array.from(n.querySelectorAll(s));
let b=document.body;
let h=Q('.hero');
let an=A('a[href^="#"]');
let ge=A('.hero-title, .section-title');
let ca=A('.pillar-card');
let se=A('section');
let bu=A('.cta-button, .cta-button-large');
let bt=A('.bio-text');
an.forEach(a=>a.addEventListener('click',e=>{let h=a.getAttribute('href');e.preventDefault();if(h=='#') window.scrollTo({top:0,behavior:'smooth'});else{let t=Q(h);if(t)t.scrollIntoView({behavior:'smooth',block:'start'})}}));
if(ge.length){let gi=setInterval(()=>{ge.forEach(el=>{if(Math.random()<.08){let r=Math.floor(Math.random()*6),l=Math.floor(Math.random()*-6);el.style.textShadow=`${r}px 0 #ff0000, ${l}px 0 #00ffff, 0 0 30px var(--azul-eletrico)`;requestAnimationFrame(()=>{setTimeout(()=>{el.style.textShadow='0 0 30px var(--azul-eletrico)'},120)})}})},1600);window.addEventListener('beforeunload',()=>clearInterval(gi))}
let tw=(e,t,s=30)=>{let i=0;e.textContent='';let w=()=>{if(i<t.length){e.textContent+=t.charAt(i++);setTimeout(w,s)}};w()};
bt.forEach((t,i)=>{let o=t.textContent||'';if(o)setTimeout(()=>tw(t,o,30),i*1400)});
if(ca.length){ca.forEach(c=>{c.style.opacity='0';c.style.transform='translateY(40px)';c.style.transition='all .6s ease';c.style.willChange='opacity,transform'});let ob=new IntersectionObserver(e=>{e.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>{e.target.style.opacity='1';e.target.style.transform='translateY(0)'},(i%6)*120)}})},{threshold:.12});ca.forEach(c=>ob.observe(c))}
if(h&&!Q('.particle',h)){let pc=40,f=document.createDocumentFragment();for(let i=0;i<pc;i++){let p=document.createElement('div');p.className='particle';p.style.left=Math.random()*100+'%';p.style.top=Math.random()*100+'%';p.style.animation=`float ${(Math.random()*8+5).toFixed(2)}s linear infinite`;f.appendChild(p)}h.appendChild(f);if(!document.getElementById('particles-style')){let s=document.createElement('style');s.id='particles-style';s.textContent='.particle{position:absolute;width:2px;height:2px;background:var(--azul-eletrico);border-radius:50%;opacity:.28}@keyframes float{0%{transform:translateY(100vh) rotate(0deg);opacity:0}10%{opacity:.28}90%{opacity:.28}100%{transform:translateY(-100vh) rotate(360deg);opacity:0}}';document.head.appendChild(s)}}
if(bu.length){if(!document.getElementById('ripple-style')){let s=document.createElement('style');s.id='ripple-style';s.textContent='@keyframes ripple{to{transform:scale(4);opacity:0}}.ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.6);transform:scale(0);pointer-events:none;animation:ripple .6s linear}';document.head.appendChild(s)}bu.forEach(btn=>{if(getComputedStyle(btn).position=='static')btn.style.position='relative';btn.style.overflow='hidden';btn.addEventListener('mouseenter',()=>btn.style.boxShadow='0 0 30px var(--azul-eletrico)');btn.addEventListener('mouseleave',()=>btn.style.boxShadow='none');btn.addEventListener('click',e=>{let r=btn.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,s=Math.max(r.width,r.height)*.6,ri=document.createElement('span');ri.className='ripple';ri.style.width=ri.style.height=s+'px';ri.style.left=x-s/2+'px';ri.style.top=y-s/2+'px';btn.appendChild(ri);setTimeout(()=>ri.remove(),600)})})}
let ns=se.filter(s=>!s.classList.contains('hero'));if(ns.length){ns.forEach(s=>{s.style.opacity='0';s.style.transform='translateY(30px)';s.style.transition='all .8s ease';s.style.willChange='opacity,transform'});let ro=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}})},{threshold:.1});ns.forEach(s=>ro.observe(s))}
let c=Q('.custom-cursor');if(!c){c=document.createElement('div');c.className='custom-cursor';c.style.cssText='position:fixed;width:20px;height:20px;border:2px solid var(--azul-eletrico);border-radius:50%;pointer-events:none;z-index:9999;mix-blend-mode:difference;transition:transform .12s ease,background-color .12s ease;will-change:transform,left,top';b.appendChild(c)}let mx=0,my=0,cx=0,cy=0,rid=null,sm=.05;function upd(){cx+=(mx-cx)*sm;cy+=(my-cy)*sm;c.style.left=cx+'px';c.style.top=cy+'px';rid=requestAnimationFrame(upd)}document.addEventListener('mousemove',e=>{mx=e.clientX-10;my=e.clientY-10;if(!rid)rid=requestAnimationFrame(upd)},{passive:!0});let ie=A('a, button, .pillar-card');ie.forEach(el=>{el.addEventListener('mouseenter',()=>{b.style.cursor='none';c.style.transform='scale(1.5)';c.style.backgroundColor='var(--azul-eletrico)'});el.addEventListener('mouseleave',()=>{b.style.cursor='';c.style.transform='scale(1)';c.style.backgroundColor='transparent'})});document.addEventListener('mouseleave',()=>{c.style.opacity='0';if(rid){cancelAnimationFrame(rid);rid=null}});document.addEventListener('mouseenter',()=>{c.style.opacity='1';if(!rid){cx=mx;cy=my;rid=requestAnimationFrame(upd)}});
let catBtns=A('.category-btn'), serviceCards=A('.service-card');
if(catBtns.length && serviceCards.length){
 catBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
   catBtns.forEach(b=>b.classList.remove('active'));
   btn.classList.add('active');
   let cat=btn.textContent.toLowerCase();
   if(cat==='todos') serviceCards.forEach(c=>c.style.display='block');
   else serviceCards.forEach(c=>{c.dataset.category.includes(cat)?c.style.display='block':c.style.display='none'});
  });
 });
}
});