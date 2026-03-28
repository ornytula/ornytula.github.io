
document.addEventListener('DOMContentLoaded', ()=>{
  const body=document.body;
  const openMenu=()=>body.classList.add('menu-open');
  const closeMenu=()=>body.classList.remove('menu-open');
  const openOrder=()=>body.classList.add('order-open');
  const closeOrder=()=>body.classList.remove('order-open');

  document.querySelectorAll('[data-menu-open]').forEach(b=>b.addEventListener('click', openMenu));
  document.querySelectorAll('[data-menu-close]').forEach(b=>b.addEventListener('click', closeMenu));
  document.querySelectorAll('[data-order-open]').forEach(b=>b.addEventListener('click', openOrder));
  document.querySelectorAll('[data-order-close]').forEach(b=>b.addEventListener('click', closeOrder));
  document.addEventListener('keydown', e=>{
    if(e.key==='Escape'){closeMenu();closeOrder();}
  });

  const form=document.getElementById('waForm');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const fd=new FormData(form);
      const text=[
        'Новая заявка с сайта Честная Позиция',
        '',
        `Имя: ${fd.get('name')||'-'}`,
        `Телефон: ${fd.get('phone')||'-'}`,
        `Услуга: ${fd.get('service')||'-'}`,
        `Объект: ${fd.get('object')||'-'}`,
        `Адрес: ${fd.get('address')||'-'}`,
        `Комментарий: ${fd.get('message')||'-'}`
      ].join('\n');
      window.open(`https://wa.me/79290700005?text=${encodeURIComponent(text)}`,'_blank','noopener');
    });
  }

  if(window.gsap){
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.hero__visual img',{scale:1.04,yPercent:-6,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.2}});
    gsap.utils.toArray('.reveal').forEach((el,i)=>{
      gsap.to(el,{opacity:1,y:0,duration:.85,delay:i*0.02,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}});
    });
  }
});
