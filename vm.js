(function(){var P='919966196013';function wa(t){return 'https://wa.me/'+P+'?text='+encodeURIComponent(t)}
var b=document.getElementById('send');if(b){b.addEventListener('click',function(e){e.preventDefault();var a=[].slice.call(document.querySelectorAll('.chk input:checked')).map(function(i){return '- '+i.value});
var t='Hello VisionMatrix Tech, I took the leak check on your website.'+(a.length?' This sounds like my business:\n'+a.join('\n'):' I would like to talk about my business.');location.href=wa(t)})}
document.querySelectorAll('[data-wa]').forEach(function(a){a.href=wa(a.getAttribute('data-wa'))})})();
(function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;var pg=document.getElementById('pg');if(pg)addEventListener('scroll',function(){var h=document.documentElement;pg.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
if(!rm&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1});
document.querySelectorAll('.sec .w:not(.two) > *:not(.rows):not(.steps), .sec .w.two > div, .rows a, .steps li').forEach(function(el){var i=[].indexOf.call(el.parentNode.children,el);el.classList.add('rv');el.style.transitionDelay=(i%6)*70+'ms';io.observe(el)})}
var ck=document.querySelectorAll('.chk input'),tc=document.getElementById('tc');ck.forEach(function(c){c.addEventListener('change',function(){tc.textContent=document.querySelectorAll('.chk input:checked').length+' of '+ck.length+' ticked'})});
var lane=document.getElementById('lane');if(!lane||rm)return;
var st=[].slice.call(lane.querySelectorAll('.st')),mode='off',S={a:0,l:0,k:0},vis=true,ca=document.getElementById('ca'),cl=document.getElementById('cl'),ckp=document.getElementById('ck');
function upd(){ca.textContent=S.a;cl.textContent=S.l;ckp.textContent=S.k}
function X(){return st.map(function(s){return s.offsetLeft+s.offsetWidth/2-9})}
function spawn(){if(document.hidden||!vis)return;var x=X(),d=document.createElement('div'),drop=-1;d.className='d';lane.appendChild(d);S.a++;upd();
if(mode==='off'){if(Math.random()<.45)drop=1;else if(Math.random()<.5)drop=2}
var tx=drop>-1?x[drop]:x[3],a=d.animate([{transform:'translateX('+x[0]+'px)'},{transform:'translateX('+tx+'px)'}],{duration:Math.max(500,5000*(tx-x[0])/(x[3]-x[0])),easing:'linear',fill:'forwards'});
a.onfinish=function(){if(drop>-1){d.classList.add('lost');st[drop].classList.add('hit');setTimeout(function(){st[drop].classList.remove('hit')},500);S.l++;
var f=d.animate([{transform:'translateX('+tx+'px) translateY(0)',opacity:1},{transform:'translateX('+tx+'px) translateY(120px)',opacity:0}],{duration:900,easing:'ease-in',fill:'forwards'});f.onfinish=function(){d.remove();upd()}}
else{S.k++;st[3].classList.remove('pop');void st[3].offsetWidth;st[3].classList.add('pop');d.remove();upd()}}}
setInterval(spawn,700);
new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(lane);
document.querySelectorAll('.tg button').forEach(function(b){b.addEventListener('click',function(){mode=b.getAttribute('data-m');S={a:0,l:0,k:0};upd();document.querySelectorAll('.tg button').forEach(function(o){o.classList.toggle('on',o===b)})})})})();
