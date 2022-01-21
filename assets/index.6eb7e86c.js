var D=Object.defineProperty,W=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var M=(r,s,i)=>s in r?D(r,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[s]=i,x=(r,s)=>{for(var i in s||(s={}))E.call(s,i)&&M(r,i,s[i]);if(b)for(var i of b(s))v.call(s,i)&&M(r,i,s[i]);return r},g=(r,s)=>W(r,Z(s));var z=(r,s)=>{var i={};for(var e in r)E.call(r,e)&&s.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&b)for(var e of b(r))s.indexOf(e)<0&&v.call(r,e)&&(i[e]=r[e]);return i};import{r as c,R as t,L as A,C as B,j as n,a as G,M as T}from"./vendor.bd44da13.js";const P=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}};P();const N=Date.now();function j(){const[r,s]=c.exports.useState(0);return c.exports.useEffect(()=>{let i=!0;const e=()=>{s((Date.now()-N)/1e3),i&&requestAnimationFrame(e)};return e(),()=>{i=!1}},[]),r}let S=0;function o({children:r}){const s=c.exports.useMemo(()=>(S+=1,`sn-${S}`),[]);return c.exports.createElement(c.exports.Fragment,null,c.exports.createElement("label",{htmlFor:s,className:"margin-toggle sidenote-number"}),c.exports.createElement("input",{type:"checkbox",id:s,className:"margin-toggle"}),c.exports.createElement("span",{className:"sidenote"},r))}function w({children:r,style:s={}}){return c.exports.createElement("figure",{style:x({borderTop:"1px solid darkgray",borderBottom:"1px solid darkgray",padding:"10px 0"},s)},r)}const f={"N\xE4her:in in Bangladesch":.29,"Mensch mit Mindestlohn in Deutschland":9.8200001,"durchschnittliche Arbeitnehmer:in in Deutschland":18.15,"Professor:in in Deutschland":38.69,"Elon Musk":16e5},C={"N\xE4her:in in Bangladesch":"N\xE4her:innen in Bangladesch","Mensch mit Mindestlohn in Deutschland":"Menschen mit deutschem Mindestlohn","durchschnittliche Arbeitnehmer:in in Deutschland":"durchschnittliche deutsche Arbeitnehmer:innen","Professor:in in Deutschland":"deutsche Profesor:innen","Elon Musk":"Elon Musk",Du:"x Du"};function m(r,s=0){const i=Math.ceil(-Math.log10(r));return isFinite(i)?r.toFixed(Math.max(s,i)).replace(".",","):0 .toFixed(s).replace(".",",")}function y(e){var a=e,{value:r,onChange:s}=a,i=z(a,["value","onChange"]);const[l,d]=c.exports.useState(null),h=c.exports.useRef(null);return c.exports.useEffect(()=>{h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{d(null)},5e3)},[r]),t.createElement("input",g(x({},i),{type:"text",value:l!==null?l:r.toFixed(2).replace(".",","),onChange:u=>{const p=parseFloat(u.target.value.replace(",","."));console.log(u.target.value),p&&s(p),d(u.target.value)}}))}function O({wage:r,setWage:s}){const[i,e]=c.exports.useState(8),[a,l]=c.exports.useState(1/i),d={type:"radio",style:{display:"none"}},h={padding:"2px 8px",borderRadius:5,lineHeight:2};return t.createElement(w,null,t.createElement("p",null,t.createElement(y,{style:{width:80},id:"wage",value:r*a*i,onChange:u=>s(u/(a*i))})," \u20AC "," ",t.createElement("input",g(x({},d),{id:"hour",name:"timeBase",onClick:()=>l(1/i),checked:a==1/i})),t.createElement("label",{htmlFor:"hour",style:x({},h)},"Pro\xA0Stunde"),t.createElement("input",g(x({},d),{id:"month",name:"timeBase",onClick:()=>l(21),checked:a==21})),t.createElement("label",{htmlFor:"month",style:h},"Pro\xA0Monat"),t.createElement("input",g(x({},d),{id:"year",name:"timeBase",onClick:()=>l(21*12),checked:a==21*12})),t.createElement("label",{htmlFor:"year",style:h},"Pro\xA0Jahr"),t.createElement("br",null),t.createElement("br",null),a!=1/i&&t.createElement(t.Fragment,null,t.createElement(t.Fragment,null,t.createElement(y,{id:"perWeek",value:i*5,style:{width:80},onChange:u=>e(u/5)}),t.createElement("label",{htmlFor:"perWeek"}," Stunden Pro Woche")),t.createElement("p",null,"Entspricht ",t.createElement("b",null,r.toFixed(2)," \u20AC/h")))))}function R({wage:r,target:s=1}){const[i,e]=c.exports.useState(null),a=j(),l=g(x({},f),{Du:r});return t.createElement(w,{style:{display:"flex",flexDirection:"column",alignItems:"center"}},t.createElement("button",{onClick:()=>e(a),style:{padding:"3px 8px",margin:"0 0 20px",flexGrow:0,background:"transparent",border:"1px solid",borderRadius:10,width:100}},i?"neu starten":"starten"),Object.entries(l).map(([d,h])=>{const u=i?a-i:0,p=h/60/60;let k=Math.min(p*u,s),F=k==s?s/p:u;return t.createElement("div",{key:d,style:{width:"100%"}},d," (",m(k,2)," \u20AC in ",m(F),"s)",t.createElement(A,{percent:k/s*100}))}))}function L({wage:r}){const s=x({Du:r},f),[i,e]=c.exports.useState(null),[a,l]=c.exports.useState(1),d=j();return t.createElement(w,{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}},Object.entries(s).map(([h,u])=>{const p=i?d-i:0;return t.createElement("div",{key:h,onClick:()=>{e(d),l(u)},style:{padding:10,margin:20,textAlign:"center",background:a==u?"#0002":"transparent",borderRadius:10,flexBasis:0}},t.createElement(B,{value:new Date(p*a/u*1e3+new Date("2020-01-01T11:00:00Z").valueOf())}),t.createElement("span",{style:{paddingTop:3,display:"inline-block"}},h))}))}function H({value:r}){const s={125e-9:e=>t.createElement("b",null,"(Entspricht dem Gewichtsanteil von ",m(e,1)," Haaren)"),6e-4:e=>t.createElement(t.Fragment,null,"(Entspricht dem Gewichtsanteil von ",m(e,1)," Fingern)"),.0084:e=>t.createElement(t.Fragment,null,"(Entspricht dem Gewichtsanteil von ",m(e,1)," H\xE4nden)"),.0197:e=>t.createElement(t.Fragment,null,"(Entspricht dem Gewichtsanteil von ",m(e,1)," F\xFC\xDFen)"),.187:e=>t.createElement(t.Fragment,null,"(Entspricht dem Gewichtsanteil von ",m(e,1)," Beinen)"),.5:()=>t.createElement(t.Fragment,null),24:e=>t.createElement(t.Fragment,null,"(ca. ",m(e,1)," Schulklassen)"),1e4:e=>t.createElement(t.Fragment,null,"(ca. ",m(e,1)," Fu\xDFballstadien)"),45773:e=>t.createElement(t.Fragment,null,"(ca. ",m(e,1),"x die Einwohnerzahl Marburgs)"),83628:e=>t.createElement(t.Fragment,null,"(ca. ",m(e,1),"x die Einwohnerzahl Gie\xDFens)"),99e4:e=>t.createElement(t.Fragment,null,"(",m(e,1),"x die Einwohnerzahl des Saarlandes)"),5513130:e=>t.createElement("b",null,"(ca. die Einwohnerzahl Finnlands)")},i=Object.keys(s).sort((e,a)=>parseFloat(a)-parseFloat(e));for(const e of i)if(parseFloat(e)<=r)return s[e](r/parseFloat(e));return t.createElement(t.Fragment,null)}function K({wage:r}){const s=x({Du:r},f),[i,e]=c.exports.useState(r);return t.createElement(w,{style:{display:"flex",flexWrap:"wrap"}},Object.entries(s).map(([a,l],d)=>{const h=i/l;return t.createElement(t.Fragment,null,t.createElement("div",{key:a,onClick:()=>{e(l)},style:{padding:5,margin:20,textAlign:"center",background:i==l?"#0002":"transparent",borderRadius:10,flexBasis:"300px",height:100,display:"flex",justifyContent:"center",alignItems:"center",flexGrow:1}},t.createElement("span",{style:{paddingTop:3,display:"inline-block"}},m(h,0)," ",h==1?a:C[a]," ",t.createElement("br",null),t.createElement(H,{value:h}))),d!=Object.keys(s).length-1&&t.createElement("div",{key:d,style:{display:"flex",justifyContent:"center",alignItems:"center"}},"\u2259"))}))}function U(r={}){const{wrapper:s}=r.components||{};return s?n.exports.jsx(s,Object.assign({},r,{children:n.exports.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",em:"em",a:"a",strong:"strong"},r.components);return n.exports.jsxs(n.exports.Fragment,{children:[n.exports.jsx(e.h1,{children:"Zeit ist Geld"}),`
`,n.exports.jsx("p",{className:"subtitle",children:"Ein Essay \xFCber den (monet\xE4ren) Wert von Zeit"}),`
`,n.exports.jsxs("section",{children:[n.exports.jsxs(e.p,{children:["Dieses Essay zu lesen wird Zeit \u201Ekosten\u201C. Bisher ",r.time<60?n.exports.jsxs(n.exports.Fragment,{children:[" zwar nur ",r.time.toFixed(0)," Sekunden, das wird sich jedoch noch \xE4ndern."]}):n.exports.jsxs(n.exports.Fragment,{children:[" ",r.time.toFixed(0)," Sekunden."]})]}),n.exports.jsx(e.p,{children:`Doch was hei\xDFt \u201Ekosten\u201C in diesem Kontext? Kann man Zeit etwa ausgeben, kaufen,
verkaufen, handeln? Wenn ja, was ist der Wert von Zeit? Ist alle Zeit gleich viel wert?
Was bedeutet Lohnungleichheit f\xFCr die Verteilung von Zeit?`})]}),`
`,n.exports.jsxs("section",{children:[n.exports.jsx(e.h2,{children:"Zeit verkaufen"}),n.exports.jsxs(e.p,{children:[`Viele Menschen in Deutschland verbringen circa die H\xE4lfte ihres wachen Tages damit, ihre
Zeit zu verkaufen. `,n.exports.jsx(e.em,{children:`Acht Stunden arbeiten, acht Stunden schlafen und acht Stunden Freizeit und
Erholung`}),`
`,n.exports.jsxs(o,{children:[`Robert Owen (1771\u20131858) als Forderung zur Einf\xFChrung des Acht-Stunden-Arbeitstages
`,n.exports.jsx(e.a,{href:"https://de.wikipedia.org/w/index.php?title=Achtstundentag&oldid=218006239",children:"[Quelle abgerufen am 18.01.2022]"}),`
`]}),`.
Normalerweise nennen wir diese T\xE4tigkeit jedoch nicht \u201EZeit verkaufen\u201C, sondern \u201ELohnarbeit\u201C.`]}),n.exports.jsxs(e.p,{children:[`Beim Handel mit Dienstleistungen ist es offensichtlich, dass wir Zeit kaufen bzw. verkaufen.
Sei es, bei der Fris\xF6r:in oder in der Psychotherapie: Es findet ein direkter Tausch von einer bestimmten, klar
definierten Zeiteinheit f\xFCr einen bestimmten, klar definierten Geldbetrag statt. `,n.exports.jsx(e.em,{children:`Haare Schneiden 20\xA0\u20AC.
Therapiestunde 100\xA0\u20AC`}),`
`,n.exports.jsxs(o,{children:[`Verhaltenstherapie, Einzelbehandlung, Dauer mind. 50 Min.
`,n.exports.jsx(e.a,{href:"https://www.bptk.de/wp-content/uploads/2020/04/GOP-Infotabelle_Stand-2020.pdf",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),"."]}),n.exports.jsxs(e.p,{children:[`Bei anderen K\xE4ufen ist nicht auf den ersten Blick offensichtlich, dass mit Zeit gehandelt
wird. `,n.exports.jsx(e.em,{children:"Pizza 8\xA0\u20AC."})]}),n.exports.jsx(e.p,{children:`Hier steht zwar auf der einen Seite ein Geldbetrag, auf der anderen Seite steht
jedoch ein greifbares, physisches (und in diesem Fall essbares) Produkt.
Um die Pizza herzustellen, musste die Pizzab\xE4cker:in Arbeitszeit aufwenden.
Zus\xE4tzlich brauchte sie Rohstoffe, z.\xA0B. das Mehl, die Hefe, die Tomaten, den K\xE4se, etc.`}),n.exports.jsxs(e.p,{children:[`Um diese Rohstoffe herzustellen, brauchte es auch wieder Arbeitszeit, und eventuell
weitere Rohstoffe (z.\xA0B. Weizen f\xFCr die Mehlherstellung oder D\xFCnger und Wasser f\xFCr das Ziehen von Tomaten).
Auch f\xFCr die Herstellung dieser Rohstoffe musste Zeit aufgewendet werden
`,n.exports.jsxs(o,{children:["An dieser Stelle muss angemerkt werden, dass nicht ",n.exports.jsx(e.em,{children:"alle"}),` Wertsch\xF6pfung allein auf das
Aufwenden und Verkaufen von Zeit zur\xFCckgef\xFChrt werden kann. So wird z.\xA0B. f\xFCr das Z\xFCchten von
Tomaten zus\xE4tzlich die Fl\xE4che ben\xF6tigt, auf der die Pflanzen wachsen. Diese Fl\xE4che kann nicht sinnvoll in
Zeitaufwand umgerechnet werden und soll deshalb f\xFCr den Zweck dieses Textes ignoriert werden.
`]}),"."]}),n.exports.jsx(e.p,{children:"Wir sehen also, dass auch beim Handel mit physischen Waren ein Handel mit Zeit erfolgt."})]}),`
`,n.exports.jsxs("section",{children:[n.exports.jsx(e.h2,{children:"Der Wert der Zeit"}),n.exports.jsxs(e.p,{children:[`Was an Preisen f\xFCr Dienstleistungen deutlich wird, jedoch auch f\xFCr andere Waren gilt, ist, dass nicht alle Zeit gleich
viel wert ist.
`,n.exports.jsx(e.em,{children:"Haare schneiden 20\xA0\u20AC. Therapiestunde 100\xA0\u20AC."})]}),n.exports.jsx(e.p,{children:`Oft ist uns die unterschiedliche Verg\xFCtung unterschiedlicher T\xE4tigkeiten zwar prinzipiell klar, jedoch trotzdem
schlecht greifbar. Dies hat verschiedene Gr\xFCnde.`}),n.exports.jsxs(e.p,{children:["Gehalt wird oft in gro\xDFen Einheiten angegeben. ",n.exports.jsx(e.em,{children:"36.588 Euro pro Jahr"}),`
`,n.exports.jsxs(o,{children:[`durchschnittliches Einkommen von Arbeitnehmer:innen in Deutschland
`,n.exports.jsx(e.a,{href:"https://www.dgb.de/themen/++co++6ca263de-fb0e-11e9-bdcf-52540088cada#wiehoch2021",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),`.
Dadurch f\xE4llt es schwer, sich darunter etwas vorzustellen.
Was k\xF6nnte man alles in einem Jahr machen? Ein Haus bauen, ein Buch schreiben, mit dem Fahrrad nach Spanien fahren,
etc.
Was k\xF6nnte man alles mit 36\xA0588\xA0\u20AC machen? \xDCber zw\xF6lftausend Laibe Brot kaufen
`,n.exports.jsx(o,{children:"bei einem Preis von 3\xA0\u20AC pro Laib"}),`,
mehr als eintausendzweihundert Mal zum Fris\xF6r gehen
`,n.exports.jsx(o,{children:"Bei einem Preis von 20\xA0\u20AC pro Haarschnitt"}),", etc."]}),n.exports.jsxs(e.p,{children:[`Noch weniger Greifbar wird die Sache mit dem Lohn dadurch, dass nicht gerne \xFCber Geh\xE4lter geredet wird.
`,n.exports.jsx(e.em,{children:"\xDCber Geld redet man nicht."}),`
So kann ungleiche Bezahlung nicht auf und kein Ver\xE4nderungswille entsteht.`]})]}),`
`,n.exports.jsxs("section",{children:[n.exports.jsx(e.h2,{children:"Vergleichswerte: Wer verdient wie viel?"}),n.exports.jsxs(e.p,{children:[`Um Licht in dieses Dunkel zu bringen, ist es hilfreich, Vergleichswerte einzuholen und diese in greifbare
Einheiten umzurechnen
`,n.exports.jsx(o,{children:`Der Einfachheit halber werden nachfolgend Brutto-Einkommen (vor Steuerabgaben) betrachtet.
Steuern sind nat\xFCrlich ein wichtiger Faktor beim Einkommen, allerdings oft schwer abzusch\xE4tzen und (international)
zu
vergleichen.
`}),"."]}),n.exports.jsx(e.p,{children:`Wie viel verdienst du? Der Einfachheit halber kannst du dein Gehalt entweder
als Stundenlohn, oder als Jahres- oder als Monatseinkommen eingeben.`}),n.exports.jsx(O,{wage:r.wage,setWage:r.setWage}),n.exports.jsxs(e.p,{children:["Der ",n.exports.jsx(e.strong,{children:"Mindestlohn in Deutschland betr\xE4gt 9,82\xA0\u20AC/h"}),` brutto (vor Abzug von Steuern)
`,n.exports.jsxs(o,{children:[`Stand 01.01.2022.
`,n.exports.jsx(e.a,{href:"https://www.dgb.de/themen/++co++6ca263de-fb0e-11e9-bdcf-52540088cada#wiehoch2021",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),"."]}),n.exports.jsxs(e.p,{children:["Das durchschnittliche ",n.exports.jsx(e.strong,{children:"Einkommen von Arbeitnehmer:innen"}),` in Deutschland liegt bei 3049\xA0\u20AC/Monat brutto
`,n.exports.jsxs(o,{children:[`Stand 2021.
`,n.exports.jsx(e.a,{href:"https://www.dgb.de/themen/++co++37f4eb9a-5bc3-11eb-ac48-001a4a160123",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),`,
was einem Stundenlohn von
`,n.exports.jsxs("code",{children:["(3049\xA0\u20AC/Monat) / (21\xA0Arbeitstage/Monat) / (8h\xA0Stunden/Tag) =\xA0",n.exports.jsx(e.strong,{children:"18,15\xA0\u20AC/h"})]})," entspricht."]}),n.exports.jsxs(e.p,{children:["Das Durchschnittsgehalt f\xFCr ",n.exports.jsx(e.em,{children:"Professoren"}),` betr\xE4gt in Deutschland 6500 \u20AC/Monat brutto
`,n.exports.jsxs(o,{children:[`Stand 2022
`,n.exports.jsx(e.a,{href:"https://www.academics.de/ratgeber/gehalt-professor-was-verdient-ein-professor",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),`,
woraus sich ein Stundenlohn von
`,n.exports.jsxs("code",{children:["(3049\xA0\u20AC/Monat) / (21\xA0Arbeitstage/Monat) / (8\xA0h/Tag) =\xA0",n.exports.jsx(e.strong,{children:"38,69\xA0\u20AC/h"})]})," ergibt."]}),n.exports.jsxs(e.p,{children:[n.exports.jsx(e.strong,{children:"Elon Musk, der momentan reichste Mensch der Welt"}),", besitzt 264\xA0",n.exports.jsx(e.em,{children:"Milliarden"}),`\xA0US-Dollar
`,n.exports.jsxs(o,{children:[`Stand 14.01.2022
`,n.exports.jsx(e.a,{href:"https://de.statista.com/statistik/daten/studie/181482/umfrage/liste-der-top-25-milliardaere-weltweit/",children:`[Quelle abgerufen am
20.01.2022]`}),`
`]})," (231.5\xA0",n.exports.jsx(e.em,{children:"Milliarden"}),`\xA0Euro).
Elon Musk ist 50 Jahre alt. Selbst wenn wir (unrealistischerweise) annehmen, dass Elon Musk seit seinem 16.
Geburtstag ohne Urlaub oder sonstigen Pausen 80 Stunden pro Woche gearbeitet h\xE4tte, ergeben sich
`,n.exports.jsx("code",{children:"(50\xA0Jahre\xA0-\xA016\xA0Jahre) * 52\xA0Wochen/Jahr * 80\xA0Stunden/Woche = 141\xA0440\xA0Arbeitsstunden"}),`,
die Musk maximal in seinem Leben geleistet haben kann. Hieraus ergibt sich ein Stundenlohn von
`,n.exports.jsxs("code",{children:["231.5\xA0",n.exports.jsx(e.em,{children:"Milliarden"}),"\xA0\u20AC\xA0/\xA0141\xA0440\xA0h =\xA0",n.exports.jsx(e.strong,{children:"1.6\xA0Millionen\xA0\u20AC/h"})]}),`
`,n.exports.jsx(o,{children:` Nat\xFCrlich ist dieser Stundenlohn komplett unrealistisch, was f\xFCr die Zwecke
dieses Essays ignoriert werden soll. Oder wollte etwa jemand behaupten, dass Musk sich sein Geld nicht
im Schwei\xDFe seines Angesichts erarbeitet habe?
`}),"."]}),n.exports.jsxs(e.p,{children:["Der ",n.exports.jsx(e.strong,{children:"Mindestlohn f\xFCr N\xE4her:innen in Bangladesch"}),` betr\xE4gt umgerechnet ca. 95 US-Dollar/Monat
`,n.exports.jsxs(o,{children:[`Stand 2018
`,n.exports.jsx(e.a,{href:"https://fashionunited.ch/nachrichten/business/bangladesch-mindestlohn-fuer-bekleidungsarbeiter-wird-auf-95-us-dollar-erhoeht/2018091715842",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),` (ca. 83,31 \u20AC/Monat).
Da zuverl\xE4ssige Informationen \xFCber die tats\xE4chlichen Arbeitszeiten schwierig zu bekommen sind, nehmen wir
optimistische 12-Stunden-Schichten bei einer 6-Tage-Woche an. Hieraus ergibt sich ein Stundenlohn von
`,n.exports.jsxs("code",{children:["(83,31\xA0\u20AC/Monat) / (4\xA0Wochen/Monat) / (6\xA0Tage/Woche) / (12\xA0h/Tag) = ",n.exports.jsx(e.strong,{children:"0,29\xA0\u20AC/h"})]}),`
`,n.exports.jsx(o,{children:"Ob dieser Mindestlohn eingehalten wird, steht auf einer anderen Seite."}),"."]})]}),`
`,n.exports.jsxs("section",{children:[n.exports.jsx(e.h2,{children:"Die Zeit eines Euros"}),n.exports.jsx(e.p,{children:`Um ein Verst\xE4ndnis f\xFCr diese Zahlen zu entwickeln ergibt es Sinn, sich Gehalt auf kleineren Skalen zu verdeutlichen
und zu vergleichen. Wie lange dauert es, 1\xA0\u20AC zu verdienen?`}),n.exports.jsx(e.p,{children:"Machen wir hierzu ein Gedankenexperiment: Wie lange dauert es f\xFCr verschiedene Menschen, einen Euro zu verdienen?"}),n.exports.jsx(R,{wage:r.wage,target:1}),n.exports.jsx(e.p,{children:"Wir sehen also, dass es je nach Einkommen unterschiedlich lange dauert, einen Geldbetrag zu \u201Eerarbeiten\u201C."})]}),`
`,n.exports.jsxs("section",{children:[n.exports.jsx(e.h2,{children:"Schnelle und langsame Zeit"}),n.exports.jsx(e.p,{children:"Was passiert, wenn du das Geld, das du verdienst, wiederum nutzt, um die Zeit einer anderen Person zu kaufen?"}),n.exports.jsxs(e.p,{children:[`Um dies zu Veranschaulichen, k\xF6nnen wir folgendes Gedankenexperiment durchf\xFChren:
W\xFCrdest du mit einem Stundenlohn von `,r.wage.toFixed(2).replace(".",","),`\u20AC die Zeit von Elon Musk kaufen wollen, (z.\xA0B. damit er
dir die Haare schneidet),
m\xFCsstest du pro Minute, die du von ihm einkaufst `,(f["Elon Musk"]/r.wage/60/8).toFixed(0)," ",n.exports.jsx(e.em,{children:"Tage"}),`
Arbeiten. Kaufst du jedoch Zeit von einer N\xE4her:in in Bangladesch in Form eines T-Shirts, welches, musst du
nur `,(f["N\xE4her:in in Bangladesch"]/r.wage*60*60).toFixed(0)," ",n.exports.jsx(e.em,{children:"Sekunden"}),` arbeiten, um eine Stunde
Arbeitszeit der N\xE4her:innen zu kaufen
`,n.exports.jsx(o,{children:`In diesem Text werden alle Abgaben, Zwischenh\xE4ndler und Materialkosten ignoriert,
obwohl aufgrund des geringen Stundenlohnes der N\xE4her:innen das meiste Geld auf sie entf\xE4llt.
`}),"."]}),n.exports.jsxs(e.p,{children:[`Veranschaulichen wir diesen Zusammenhang nun mithilfe der unten stehenden Uhren:
Jede Uhr ist einer Person Zugeordnet, die ihre Zeit verkauft.
Klickst du auf deine Uhr, l\xE4uft diese mit der normalen Geschwindigkeit `,n.exports.jsx("code",{children:"1s \u2259 1s"}),`.
Alle anderen Uhren zeigen wie viel Zeit du dir von den Anderen Personen kaufen k\xF6nntest.
Klickst du auf die uhr der N\xE4her:in in Bangladesch, l\xE4uft diese mit der normalen Geschwindigkeit `,n.exports.jsx("code",{children:"1s \u2259 1s"}),`.
Alle anderen Uhren zeigen wie viel Zeit sich die N\xE4her:in von den Anderen Personen kaufen k\xF6nnte
`,n.exports.jsx(o,{children:"Praktisch keine."}),"."]}),n.exports.jsx(L,{wage:r.wage})]}),`
`,n.exports.jsxs("section",{children:[n.exports.jsx(e.h2,{children:"Zeit von vielen Menschen"}),n.exports.jsxs(e.p,{children:[`Wie wir gesehen haben, k\xF6nnen reiche Menschen mit dem Geld, das sie in einer Stunde verdienen, viele Stunden
Arbeitszeit von armen Menschen kaufen.
Jedoch kann ein armer Mensch nicht so viel arbeiten, als dass er damit all das Geld, was ein reicher Mensch verdient,
bekommen k\xF6nnte.
`,n.exports.jsx(e.em,{children:`Tats\xE4chlich k\xF6nnen sich die Uhren armer Menschen nicht schneller bewegen. Es ist unm\xF6glich, mehr zu Arbeiten als Zeit
vorhanden ist`}),"."]}),n.exports.jsx(e.p,{children:`Reiche Menschen dagegen k\xF6nnen mit ihrem Geld nicht nur die Arbeitszeit von einem Menschen kaufen, sie k\xF6nnen gleich mehrere
Menschen f\xFCr sich Arbeiten lassen. Ein einziger Mensch kann so \xFCber die Zeit vieler Menschen verf\xFCgen.`}),n.exports.jsxs(e.p,{children:[`Mithilfe der untenstehenden K\xE4sten soll dieser Zusammenhang verdeutlicht werden.
Klickst du auf deinen Kasten, kannst du sehen, wie viele N\xE4her:innen in Bangladesch, Menschen mit Mindestlohn,
oder Professoren du Besch\xE4ftigen k\xF6nntest
`,n.exports.jsx(o,{children:"Wieder unter Nicht-Ber\xFCcksichtigung von Steuern, Sozialabgaben, o.\xC4."}),`.
Klickst du auf das Feld von Elon Musk, kannst du z.\xA0B. sehen, von wie vielen Menschen deiner Gehaltsklasse er
die Zeit aufkaufen k\xF6nnte. Anders ausgedr\xFCckt: Wie viel mal mehr Geld er als du verdienst.`]}),n.exports.jsx(K,{wage:r.wage})]}),`
`,n.exports.jsxs("section",{children:[n.exports.jsx(e.h2,{children:"Fazit"}),n.exports.jsxs(e.p,{children:[`Menschen verdienen in unserem kapitalistischen System sehr unterschiedlich viel Geld. Dies f\xFChrt nicht nur zu einer
ungleichen Verteilung der materiellen G\xFCter, sondern auch zu einer ungleichen Verteilung
der Zeit. Reiche Menschen k\xF6nnen mit ihrem Geld die Zeit sehr vieler armer Menschen kaufen. Elon Musk ist `,n.exports.jsx(e.em,{children:"absurd"}),`
reich.`]}),n.exports.jsxs(e.p,{children:[`H\xE4ttest du in der Zeit, in der du dieses Essay gelesen hast gearbeitet, h\xE4ttest
du `,(r.time/60/60*r.wage).toFixed(2).replace(".",","),"\xA0\u20AC verdient."]}),n.exports.jsx(e.p,{children:n.exports.jsx(e.em,{children:`Dieses Essay wurde von Jaro Habiger 2022 im Rahmen des zweiw\xF6chigen \u201ENew Media\u201C Basisklassen-Workshops an der Kunsthochschule Kassel
bei Rosa Menkman und Joel Baumann geschrieben.`})})]})]})}}window.addEventListener("DOMContentLoaded",()=>{G.render(t.createElement(V,null),document.getElementById("root"))});function V(){const r=j(),[s,i]=c.exports.useState(9.82);return t.createElement(T,null,t.createElement(U,{time:r,wage:s,setWage:i}))}
