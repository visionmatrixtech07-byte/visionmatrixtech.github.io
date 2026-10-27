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

(function(){var P='919966196013',rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function wa(t){return 'https://wa.me/'+P+'?text='+encodeURIComponent(t)}
var D={'appointment-care':{n:'clinic',w:'a clinic or salon',l:['Found','Booked','Reminded','Returns'],m:[['c','Hi, can I get an appointment tomorrow?'],['b','Hello! Happy to help. Morning or evening slot?'],['c','Evening please'],['b','Booked for 6:30 pm tomorrow. We will remind you.'],['t','Next day, 9:00 am'],['b','Reminder: your appointment is today at 6:30 pm.']]},
'sales-dealership':{n:'dealership',w:'a dealership or showroom',l:['Enquiry','Contacted','Followed up','Closed'],m:[['c','Interested in the 2019 SUV you listed.'],['b','Thanks! May we call you? Any budget range in mind?'],['c','Mid range. Call tomorrow.'],['b','Noted. Test drive on Saturday at 11 am?'],['t','Next day'],['b','Reminder: your test drive is Saturday at 11 am.']]},
'education-enrollment':{n:'school',w:'a school or institute',l:['Enquiry','Counselled','Visited','Admitted'],m:[['c','Are admissions open for Class 3?'],['b','Yes! May we have the child\u2019s name and your number?'],['c','Aarav. Number shared above.'],['b','Thank you. Campus visit on Saturday at 10 am?'],['t','Next day'],['b','Following up: shall we confirm Saturday\u2019s visit?']]},
'retail-commerce':{n:'shop',w:'a shop or boutique',l:['Discovers','Enquires','Buys','Returns'],m:[['c','Is the blue kurta available in M?'],['b','Yes, in stock! Visit us or order here?'],['c','I will visit tomorrow.'],['b','Great. We are holding it for you till 7 pm.'],['t','Next week'],['b','New arrivals are in. Want a preview?']]},
'local-service':{n:'service',w:'a repair or service business',l:['Calls','Job created','Completed','Rebooked'],m:[['c','Fridge not cooling. Can someone come today?'],['b','Sorry about that! Your area and a good time?'],['c','Kolar, after 4 pm.'],['b','Technician assigned. Arriving at 4:30 pm.'],['t','Two days later'],['b','Hope the repair went well. Share a quick review?']]},
'professional-b2b':{n:'professional',w:'a professional firm',l:['Finds you','Consultation','Proposal','Retained'],m:[['c','Need help with GST filing for my firm.'],['b','Happy to help. Your turnover range and deadline?'],['c','Small firm, due Friday.'],['b','Consultation booked tomorrow at 11 am.'],['t','Next day'],['b','Proposal sent. Any questions before we proceed?']]},
'hospitality-guest':{n:'hospitality',w:'a restaurant or hotel',l:['Discovers','Enquires','Books','Returns'],m:[['c','Banquet for 150 guests on 14 Dec?'],['b','Lovely! Is it a wedding or a corporate event?'],['c','A wedding.'],['b','Site visit booked Sunday at 4 pm. Quote to follow.'],['t','Two days later'],['b','Quote sent. Shall we hold the date for you?']]},
'personal-brand-pr':{n:'personal brand',w:'a public profile',l:['Searched','Trusted','Contacts','Handled'],m:[['c','Can we invite you as chief guest at our event?'],['b','Thank you! Date, venue and expected audience?'],['c','20 Jan, Kolar, about 400 guests.'],['b','Noted and shared with the team. We will confirm soon.'],['t','Next day'],['b','Update: request reviewed. Confirmation call today.']]}};
var chips=[].slice.call(document.querySelectorAll('.ch button')),hw=document.getElementById('hw'),ix=document.getElementById('ix'),wd=document.getElementById('wd'),chat=document.getElementById('chat'),tk=[].slice.call(document.querySelectorAll('#tk li')),pn=document.getElementById('pn'),rp=document.getElementById('rp');
if(!chat)return;var run=0,vis=true,cur='appointment-care',lane=document.getElementById('lane');
function sl(t){return new Promise(function(r){setTimeout(r,t)})}
function add(c,t){var d=document.createElement('div');d.className='bb '+c;d.textContent=t;chat.appendChild(d);return d}
var TK={0:0,1:1,3:2,5:3};
async function play(k){var my=++run,m=D[k].m;chat.innerHTML='';tk.forEach(function(x){x.classList.remove('on')});pn.textContent='Sample: '+D[k].n+' enquiry';
for(var i=0;i<m.length;i++){if(my!==run)return;var it=m[i];
if(rm){add(it[0],it[1]);if(TK[i]!==undefined)tk[TK[i]].classList.add('on');continue}
if(it[0]==='b'){var ty=add('b ty','');ty.innerHTML='<i></i><i></i><i></i>';await sl(900);ty.remove()}else await sl(i?800:400);
if(my!==run)return;add(it[0],it[1]);if(TK[i]!==undefined)tk[TK[i]].classList.add('on');await sl(it[0]==='t'?500:900)}
if(rm)return;await sl(5000);while(!vis&&my===run)await sl(500);if(my===run)play(k)}
function sel(k){cur=k;chips.forEach(function(b){b.classList.toggle('on',b.getAttribute('data-k')===k)});var d=D[k];
if(lane)[].slice.call(lane.querySelectorAll('.st b')).forEach(function(b,i){b.textContent=d.l[i]});
if(hw)hw.href=wa(k==='personal-brand-pr'?'Hello VisionMatrix Tech, I would like to talk about a personal brand and PR system.':'Hello VisionMatrix Tech, I run '+d.w+' and would like to talk about a system for it.');
if(ix){ix.hidden=false;ix.textContent='See the '+d.n+' system';ix.href=k+'.html'}if(wd)wd.hidden=false;play(k)}
chips.forEach(function(b){b.addEventListener('click',function(){sel(b.getAttribute('data-k'))})});
if(rp)rp.addEventListener('click',function(){play(cur)});
new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(chat);play(cur)})();
