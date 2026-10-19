'use strict';
// Edit these values to personalise the portfolio. No build step or API key needed.
const profile = { email: 's18326@sci.pdn.ac.lk', github: 'https://github.com/nisala1997' };
const phrases = ['data-driven solutions', 'intelligent systems', 'scalable software', 'fraud detection models'];
const projects = [
 { name:'Traffic Monitoring', repo:'Traffic-Monitoring-DL', category:'ai', description:'A deep learning project exploring traffic monitoring through visual data.', tags:'Deep Learning · Computer Vision', icon:'⌁' },
 { name:'Fabric Defects Detector', repo:'Fabric-Defects-Detector', category:'vision', description:'Image processing and computer vision experiments focused on detecting defects in fabric.', tags:'OpenCV · Image Processing', icon:'▧' },
 { name:'PackageMatch', repo:'PackageMatch', category:'web', description:'An application project focused on matching users with suitable packages.', tags:'Web Application · Recommendation', icon:'⤨' },
 { name:'License Plate Detection', repo:'License-Plate-Detection-OpenCV-and-Py-Tesseract', category:'vision', description:'License plate detection and text recognition using OpenCV and PyTesseract.', tags:'OpenCV · OCR · PyTesseract', icon:'▤' },
 { name:'GrowTradeNet', repo:'GrowTradeNet', category:'web', description:'A web application project with a companion backend repository.', tags:'Web Development · Full Stack', icon:'⌘' },
 { name:'Medical Data with GAN', repo:'Medical-Data-with-GAN', category:'ai', description:'An exploratory project applying generative adversarial networks to medical data.', tags:'GAN · Machine Learning · Research', icon:'◇' }
];
const toolkit=[['Py','Python'],['SQL','SQL'],['▥','Tableau'],['▤','Excel'],['JS','JavaScript'],['⚛','React'],['◉','OpenCV'],['⌁','Deep Learning'],['▦','Pandas'],['∑','NumPy'],['⎇','Git'],['⌘','GitHub']];
document.querySelector('#tools').innerHTML=toolkit.map(([icon,label])=>`<div class="tool"><span class="icon" aria-hidden="true">${icon}</span><span>${label}</span></div>`).join('');
const grid=document.querySelector('#projects');
function renderProjects(filter='all'){
 const selected=projects.filter(p=>filter==='all'||p.category===filter);
 grid.innerHTML=selected.map(p=>`<article class="project"><div class="project-top"><span aria-hidden="true">${p.icon}</span><a href="${profile.github}/${p.repo}" target="_blank" rel="noopener noreferrer" aria-label="View ${p.name} on GitHub">↗</a></div><h3><a href="${profile.github}/${p.repo}" target="_blank" rel="noopener noreferrer">${p.name}</a></h3><p>${p.description}</p><div class="tags">${p.tags}</div></article>`).join('');
 document.querySelector('#project-count').textContent=`Showing ${selected.length} of ${projects.length} selected projects · Source code on GitHub`;
}
renderProjects();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderProjects(button.dataset.filter);}));
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';});
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(profile.email);status.textContent='Email address copied.';}catch{status.textContent=profile.email;}});
const typed=document.querySelector('#typed');
const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
let timer,index=0,position=phrases[0].length,deleting=true;
function tick(){if(motion.matches){typed.textContent=phrases[0];return;}const phrase=phrases[index];position+=deleting?-1:1;typed.textContent=phrase.slice(0,position);let delay=deleting?38:75;if(!deleting&&position===phrase.length){deleting=true;delay=2000;}else if(deleting&&position===0){deleting=false;index=(index+1)%phrases.length;delay=350;}timer=setTimeout(tick,delay);}
if(!motion.matches)timer=setTimeout(tick,2200);
motion.addEventListener('change',()=>{clearTimeout(timer);index=0;position=phrases[0].length;deleting=true;typed.textContent=phrases[0];if(!motion.matches)timer=setTimeout(tick,2200);});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>a.classList.toggle('current',a.getAttribute('href')===`#${entry.target.id}`));}}),{rootMargin:'-20% 0px -55% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));}
