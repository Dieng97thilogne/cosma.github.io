/* ====== À PERSONNALISER ====== */
var WA_NUMBER = "221704673047"; /* Numéro WhatsApp de la boutique, format international sans + */
var CURRENCY = "FCFA";
/* ============================= */

var SIZES = ["S","M","L","XL","XXL"];
var PRODUCTS = [
 {id:"c1",cat:"cosmetiques",name:"Beurre de karité pur",sub:"Pot de 200 ml",price:6500,shape:"jar",c:{bg:"#F2E4B8",a:"#C98A2B",b:"#4A2E12"},
  desc:"Karité brut non raffiné, à la texture riche qui fond au contact de la peau. Pour le corps, les mains, les talons et les cheveux secs.",tags:["Peau sèche","Sans parfum ajouté","100 % karité"]},
 {id:"c2",cat:"cosmetiques",name:"Huile de baobab",sub:"Flacon de 50 ml",price:8900,shape:"dropper",c:{bg:"#E9D9C4",a:"#8C5A2B",b:"#2F1D0E"},
  desc:"Une huile légère qui pénètre vite. Quelques gouttes sur le visage, le corps ou les pointes des cheveux.",tags:["Tous types de peau","Pressée à froid","Non grasse"]},
  {id:"c3",cat:"cosmetiques",name:"Savon noir au moringa",sub:"Pain de 150 g",price:3500,shape:"soap",c:{bg:"#D6DCC8",a:"#2C3524",b:"#9DB07A"},
  desc:"Un savon doux qui nettoie en profondeur. À utiliser avant le gommage ou au hammam.",tags:["Purifiant","Corps et visage","Végétal"]},
 {id:"c4",cat:"cosmetiques",name:"Sérum éclat à l'hibiscus",sub:"Flacon de 30 ml",price:12000,shape:"dropper",c:{bg:"#F3CBD3",a:"#B3204A",b:"#3B0A19"},
  desc:"Un sérum léger pour raviver le teint. Appliquez-le matin et soir sur peau propre avant votre crème.",tags:["Éclat","Antioxydant","Matin et soir"]},
 {id:"c5",cat:"cosmetiques",name:"Baume à lèvres miel et karité",sub:"Stick de 15 g",price:2500,shape:"stick",c:{bg:"#F6DDA0",a:"#E8A317",b:"#5A3A05"},
  desc:"Un baume nourrissant qui protège les lèvres du vent et de la chaleur. Se glisse dans une poche.",tags:["Nourrissant","Léger goût de miel"]},
 {id:"c6",cat:"cosmetiques",name:"Gommage sucre et café",sub:"Pot de 250 g",price:7500,shape:"tub",c:{bg:"#D9C7B5",a:"#4B2E22",b:"#E7D3BF"},
  desc:"Un gommage corps qui lisse la peau sans l'agresser. Massez sur peau humide, rincez, la peau reste douce.",tags:["Corps","Une fois par semaine","Odeur de café"]},
 {id:"t1",cat:"tshirts",name:"T-shirt Indigo",sub:"Coton 180 g, coupe droite",price:12000,shape:"tee",print:"sun",c:{bg:"#DCE1F5",a:"#26357A",b:"#F2B632"},
  desc:"Le bleu profond de l'indigo, un soleil brodé sur la poitrine. Coton épais qui tient bien après lavage.",tags:["100 % coton","Coupe droite","Lavage 30 °C"]},
 {id:"t2",cat:"tshirts",name:"T-shirt Ocre",sub:"Coton 180 g, coupe droite",price:12000,shape:"tee",print:"wave",c:{bg:"#F7E6C4",a:"#D9962B",b:"#3A2410"},
  desc:"La couleur du sable chaud avec un motif de vagues. Il se porte avec un jean comme avec un pantalon lin.",tags:["100 % coton","Coupe droite","Lavage 30 °C"]},
 {id:"t3",cat:"tshirts",name:"T-shirt Bissap",sub:"Coton 180 g, coupe droite",price:12500,shape:"tee",print:"text",c:{bg:"#F5D3DA",a:"#A3153F",b:"#FBE9EC"},
  desc:"Le rouge profond de l'hibiscus, avec notre nom imprimé sur le devant.",tags:["100 % coton","Coupe droite","Lavage 30 °C"]},
 {id:"t4",cat:"tshirts",name:"T-shirt Écru Baobab",sub:"Coton 180 g, coupe droite",price:11500,shape:"tee",print:"baobab",c:{bg:"#DAD6E8",a:"#EFE8D8",b:"#3A2B1F"},
  desc:"Un t-shirt écru orné d'un baobab dessiné à la main. Le plus clair de la collection.",tags:["100 % coton","Coupe droite","Lavage 30 °C"]},
 {id:"t5",cat:"tshirts",name:"T-shirt Noir",sub:"Coton 180 g, coupe droite",price:12000,shape:"tee",print:"stripe",c:{bg:"#E3DFE9",a:"#1E1A22",b:"#EFAE2A"},
  desc:"Un noir profond avec deux bandes ocre sur la poitrine. Sobre, facile à porter tous les jours.",tags:["100 % coton","Coupe droite","Lavage 30 °C"]},
 {id:"t6",cat:"tshirts",name:"T-shirt Sauge",sub:"Coton 180 g, coupe droite",price:12000,shape:"tee",print:"sun",c:{bg:"#DDE6DA",a:"#7E9A78",b:"#F4EFE0"},
  desc:"Un vert sauge doux, avec un petit soleil clair brodé. Le plus calme de la collection.",tags:["100 % coton","Coupe droite","Lavage 30 °C"]}
];

/* ---------- Illustrations des produits (SVG) ---------- */
function art(p){
  var c=p.c, s="", k="";
  var shadow=function(y,rx){return '<ellipse cx="200" cy="'+y+'" rx="'+rx+'" ry="10" fill="rgba(0,0,0,.14)"/>';};
  var label=function(x,y,w){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="52" rx="8" fill="rgba(255,255,255,.88)"/><rect x="'+(x+14)+'" y="'+(y+15)+'" width="'+(w-28)+'" height="7" rx="3.5" fill="'+c.b+'"/><rect x="'+(x+24)+'" y="'+(y+31)+'" width="'+(w-48)+'" height="5" rx="2.5" fill="'+c.b+'" opacity=".5"/>';};
  k='<circle cx="200" cy="235" r="140" fill="rgba(255,255,255,.38)"/>';
  if(p.shape==="jar"){
    s=shadow(392,105)+'<rect x="125" y="255" width="150" height="130" rx="18" fill="'+c.a+'"/><rect x="117" y="210" width="166" height="52" rx="12" fill="'+c.b+'"/>'+label(150,296,100);
  }else if(p.shape==="tub"){
    s=shadow(392,125)+'<rect x="100" y="285" width="200" height="100" rx="16" fill="'+c.a+'"/><rect x="92" y="240" width="216" height="52" rx="12" fill="'+c.b+'"/><g fill="'+c.a+'" opacity=".55"><circle cx="140" cy="266" r="3"/><circle cx="180" cy="258" r="3"/><circle cx="215" cy="270" r="3"/><circle cx="255" cy="262" r="3"/></g>'+label(140,308,120);
  }else if(p.shape==="dropper"){
    s=shadow(392,80)+'<rect x="150" y="235" width="100" height="152" rx="22" fill="'+c.a+'"/><rect x="180" y="200" width="40" height="40" fill="'+c.b+'"/><path d="M182 200V158Q182 132 200 132Q218 132 218 158V200Z" fill="'+c.b+'"/>'+label(160,285,80);
  }else if(p.shape==="soap"){
    s=shadow(395,120)+'<g transform="rotate(-7 200 320)"><rect x="98" y="262" width="204" height="118" rx="32" fill="'+c.a+'"/><rect x="122" y="286" width="156" height="70" rx="20" fill="'+c.b+'" opacity=".3"/><circle cx="160" cy="321" r="5" fill="'+c.b+'"/><circle cx="200" cy="311" r="4" fill="'+c.b+'"/><circle cx="238" cy="326" r="5" fill="'+c.b+'"/></g>';
  }else if(p.shape==="stick"){
    s=shadow(392,60)+'<rect x="172" y="150" width="56" height="95" rx="10" fill="'+c.b+'"/><rect x="165" y="240" width="70" height="148" rx="12" fill="'+c.a+'"/><rect x="178" y="285" width="44" height="56" rx="8" fill="rgba(255,255,255,.88)"/><rect x="186" y="300" width="28" height="6" rx="3" fill="'+c.b+'"/>';
  }else{
    var b=c.b, a=c.a, pr="";
    if(p.print==="sun"){
      pr='<circle cx="200" cy="245" r="24" fill="'+b+'"/>';
      for(var i=0;i<10;i++){var ang=i*36*Math.PI/180;pr+='<line x1="'+(200+Math.cos(ang)*34).toFixed(1)+'" y1="'+(245+Math.sin(ang)*34).toFixed(1)+'" x2="'+(200+Math.cos(ang)*46).toFixed(1)+'" y2="'+(245+Math.sin(ang)*46).toFixed(1)+'" stroke="'+b+'" stroke-width="5" stroke-linecap="round"/>';}
    }else if(p.print==="wave"){
      pr='<g fill="none" stroke="'+b+'" stroke-width="6" stroke-linecap="round"><path d="M150 232q12.5-16 25 0t25 0t25 0t25 0"/><path d="M150 256q12.5-16 25 0t25 0t25 0t25 0"/><path d="M150 280q12.5-16 25 0t25 0t25 0t25 0"/></g>';
    }else if(p.print==="text"){
      pr='<text x="200" y="262" text-anchor="middle" font-family="Bricolage Grotesque,Trebuchet MS,sans-serif" font-weight="800" font-size="34" letter-spacing="3" fill="'+b+'">AMINA</text>';
    }else if(p.print==="baobab"){
      pr='<path d="M192 300V262Q192 250 184 244M208 300V262Q208 250 216 244M192 262Q200 258 208 262" fill="none" stroke="'+b+'" stroke-width="7" stroke-linecap="round"/><path d="M164 238Q176 216 200 224Q224 216 236 238Q220 244 200 240Q180 244 164 238Z" fill="'+b+'"/>';
    }else{
      pr='<rect x="140" y="232" width="120" height="14" rx="3" fill="'+b+'"/><rect x="140" y="258" width="120" height="14" rx="3" fill="'+b+'"/>';
    }
    s='<g transform="translate(0 28)">'+shadow(418,120)+'<path d="M130 80L165 68Q200 100 235 68L270 80L345 145L312 190L282 172L282 415L118 415L118 172L88 190L55 145Z" fill="'+a+'"/><path d="M118 172L118 415L136 415L136 176Z" fill="rgba(0,0,0,.08)"/><path d="M165 68Q200 100 235 68" fill="none" stroke="'+b+'" stroke-width="8" stroke-linecap="round" opacity=".9"/>'+pr+'</g>';
    k='<circle cx="200" cy="250" r="150" fill="rgba(255,255,255,.4)"/>';
  }
  return '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+p.name+'"><rect width="400" height="500" fill="'+c.bg+'"/>'+k+s+'</svg>';
}
function byId(id){for(var i=0;i<PRODUCTS.length;i++){if(PRODUCTS[i].id===id)return PRODUCTS[i];}}
function fmt(n){return new Intl.NumberFormat("fr-FR").format(n)+" "+CURRENCY;}

/* ---------- Hero ---------- */
document.getElementById("arches").innerHTML=[byId("c4"),byId("t1"),byId("c1")].map(function(p){return '<div class="arch">'+art(p)+'</div>';}).join("");

/* ---------- Grille ---------- */
var filter="tout";
function renderGrid(){
  var list=PRODUCTS.filter(function(p){return filter==="tout"||p.cat===filter;});
  document.getElementById("grid").innerHTML=list.map(function(p){
    var isTee=p.cat==="tshirts";
    return '<article class="card"><button class="art" data-open="'+p.id+'" aria-label="Voir '+p.name+'">'+art(p)+'</button>'+
      '<h3>'+p.name+'</h3><div class="sub">'+p.sub+'</div>'+
      '<div class="row"><span class="price">'+fmt(p.price)+'</span>'+
      (isTee?'<button class="add" data-open="'+p.id+'">Choisir la taille</button>':'<button class="add" data-add="'+p.id+'">Ajouter</button>')+
      '</div></article>';
  }).join("");
}
function setFilter(f){
  filter=f;
  document.querySelectorAll(".chip").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.f===f?"true":"false");});
  renderGrid();
}
document.querySelectorAll(".chip").forEach(function(b){b.addEventListener("click",function(){setFilter(b.dataset.f);});});
document.querySelectorAll("[data-filter-link]").forEach(function(a){a.addEventListener("click",function(){setFilter(a.dataset.filterLink);});});

/* ---------- Panier ---------- */
var cart=[];
try{
  var saved=JSON.parse(localStorage.getItem("amina-cart")||"[]");
  if(Array.isArray(saved)){cart=saved.filter(function(i){return i&&byId(i.id)&&i.qty>0;});}
}catch(e){cart=[];}
function persist(){try{localStorage.setItem("amina-cart",JSON.stringify(cart));}catch(e){}}
function addToCart(id,size,qty){
  qty=qty||1;
  var found=cart.filter(function(i){return i.id===id&&(i.size||"")===(size||"");})[0];
  if(found){found.qty+=qty;}else{cart.push({id:id,size:size||"",qty:qty});}
  persist();renderCart();toast("Ajouté au panier");
}
function cartTotal(){return cart.reduce(function(t,i){return t+byId(i.id).price*i.qty;},0);}
function renderCart(){
  var n=cart.reduce(function(t,i){return t+i.qty;},0);
  document.getElementById("count").textContent=n;
  var lines=document.getElementById("lines"), checkout=document.getElementById("checkout");
  if(!cart.length){
    lines.innerHTML='<div class="empty"><p>Votre panier est vide. Ajoutez un produit depuis la boutique.</p><button class="btn primary" id="toShop">Voir la boutique</button></div>';
    checkout.style.display="none";
    return;
  }
  checkout.style.display="";
  lines.innerHTML=cart.map(function(i,idx){
    var p=byId(i.id);
    return '<div class="line"><div class="th">'+art(p)+'</div><div><b>'+p.name+'</b><small>'+(i.size?'Taille '+i.size+' · ':'')+fmt(p.price)+'</small>'+
      '<div class="qty"><button data-dec="'+idx+'" aria-label="Retirer un">−</button><span>'+i.qty+'</span><button data-inc="'+idx+'" aria-label="Ajouter un">+</button></div></div>'+
      '<div><b>'+fmt(p.price*i.qty)+'</b><button class="rm" data-rm="'+idx+'">Retirer</button></div></div>';
  }).join("");
  document.getElementById("total").textContent=fmt(cartTotal());
}
var lastFocus=null;
function openCart(){
  lastFocus=document.activeElement;
  document.getElementById("drawer").classList.add("on");
  document.getElementById("drawer").setAttribute("aria-hidden","false");
  document.getElementById("veil").classList.add("on");
  document.getElementById("closeCart").focus();
}
function closeCart(){
  document.getElementById("drawer").classList.remove("on");
  document.getElementById("drawer").setAttribute("aria-hidden","true");
  document.getElementById("veil").classList.remove("on");
  if(lastFocus&&lastFocus.focus){lastFocus.focus();}
}
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
document.getElementById("veil").addEventListener("click",closeCart);
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&document.getElementById("drawer").classList.contains("on")){closeCart();}});

document.getElementById("lines").addEventListener("click",function(e){
  var t=e.target;
  if(t.id==="toShop"){closeCart();document.getElementById("boutique").scrollIntoView();return;}
  var d=t.dataset;
  if(d.inc!==undefined){cart[+d.inc].qty++;}
  else if(d.dec!==undefined){cart[+d.dec].qty--;if(cart[+d.dec].qty<=0){cart.splice(+d.dec,1);}}
  else if(d.rm!==undefined){cart.splice(+d.rm,1);}
  else{return;}
  persist();renderCart();
});

/* ---------- Commande WhatsApp ---------- */
function waLink(text){return "https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(text);}
document.getElementById("waFoot").href=waLink("Bonjour, j'ai une question sur vos produits.");
document.getElementById("order").addEventListener("click",function(){
  var name=document.getElementById("fName").value.trim();
  var phone=document.getElementById("fPhone").value.trim();
  var addr=document.getElementById("fAddr").value.trim();
  var err=document.getElementById("err");
  if(!name||!phone||!addr){err.textContent="Renseignez votre nom, votre téléphone et votre adresse de livraison.";return;}
  err.textContent="";
  var msg="Bonjour, je souhaite commander :\n"+cart.map(function(i){
    var p=byId(i.id);
    return "- "+i.qty+" × "+p.name+(i.size?" (taille "+i.size+")":"")+" : "+fmt(p.price*i.qty);
  }).join("\n")+"\n\nTotal : "+fmt(cartTotal())+"\n\nNom : "+name+"\nTéléphone : "+phone+"\nLivraison : "+addr;
  var w=window.open(waLink(msg),"_blank","noopener");
  if(!w){err.textContent="Le lien WhatsApp n'a pas pu s'ouvrir. Autorisez les fenêtres pour ce site et réessayez.";}
});

/* ---------- Fiche produit ---------- */
var dlg=document.getElementById("dlg");
function openProduct(id){
  var p=byId(id), isTee=p.cat==="tshirts", size="", qty=1;
  dlg.innerHTML='<div class="pd"><div class="pic">'+art(p)+'</div><div class="info">'+
    '<button class="x" data-close aria-label="Fermer la fiche">×</button>'+
    '<div><h2>'+p.name+'</h2><div style="color:var(--muted);margin-top:4px">'+p.sub+'</div></div>'+
    '<div class="price" style="font-size:1.3rem">'+fmt(p.price)+'</div>'+
    '<p>'+p.desc+'</p>'+
    '<ul>'+p.tags.map(function(t){return '<li>'+t+'</li>';}).join("")+'</ul>'+
    (isTee?'<div><div class="lbl">Taille</div><div class="sizes" id="sizes" style="margin-top:8px">'+SIZES.map(function(s){return '<button data-size="'+s+'" aria-pressed="false">'+s+'</button>';}).join("")+'</div><div id="sizeErr" class="err" role="alert"></div></div>':'')+
    '<div class="buy"><div class="qty"><button data-q="-1" aria-label="Moins">−</button><span id="q">1</span><button data-q="1" aria-label="Plus">+</button></div><button class="btn primary" id="addBtn">Ajouter au panier</button></div>'+
    '</div></div>';
  dlg.onclick=function(e){
    var t=e.target;
    if(t===dlg||t.hasAttribute("data-close")){dlg.close();return;}
    if(t.dataset.size){
      size=t.dataset.size;
      dlg.querySelectorAll("[data-size]").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.size===size?"true":"false");});
      var se=document.getElementById("sizeErr");if(se){se.textContent="";}
    }
    if(t.dataset.q){qty=Math.max(1,qty+ +t.dataset.q);document.getElementById("q").textContent=qty;}
    if(t.id==="addBtn"){
      if(isTee&&!size){document.getElementById("sizeErr").textContent="Choisissez une taille.";return;}
      addToCart(p.id,size,qty);dlg.close();
    }
  };
  dlg.showModal();
}
document.addEventListener("click",function(e){
  var el=e.target.closest("[data-open],[data-add]");
  if(!el||el.closest("dialog")){return;}
  if(el.dataset.open){openProduct(el.dataset.open);}
  else if(el.dataset.add){addToCart(el.dataset.add,"",1);}
});

/* ---------- Notification ---------- */
var tt;
function toast(msg){
  var t=document.getElementById("toast");t.textContent=msg;t.classList.add("on");
  clearTimeout(tt);tt=setTimeout(function(){t.classList.remove("on");},1800);
}

renderGrid();renderCart();
