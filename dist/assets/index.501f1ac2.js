var z=Object.defineProperty,S=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var v=(t,r,s)=>r in t?z(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,u=(t,r)=>{for(var s in r||(r={}))D.call(r,s)&&v(t,s,r[s]);if(j)for(var s of j(r))Z.call(r,s)&&v(t,s,r[s]);return t},p=(t,r)=>S(t,y(r));import{r as h,R as i,L as W,C as F,j as e,a as A,M as B}from"./vendor.fa1b2304.js";const T=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}};T();const G=Date.now();function w(){const[t,r]=h.exports.useState(0);return h.exports.useEffect(()=>{let s=!0;const n=()=>{r((Date.now()-G)/1e3),s&&requestAnimationFrame(n)};return n(),()=>{s=!1}},[]),t}let E=0;function d({children:t}){const r=h.exports.useMemo(()=>(E+=1,`sn-${E}`),[]);return h.exports.createElement(h.exports.Fragment,null,h.exports.createElement("label",{htmlFor:r,className:"margin-toggle sidenote-number"}),h.exports.createElement("input",{type:"checkbox",id:r,className:"margin-toggle"}),h.exports.createElement("span",{className:"sidenote"},t))}function f({children:t,style:r={}}){return h.exports.createElement("figure",{style:u({borderTop:"1px solid darkgray",borderBottom:"1px solid darkgray",padding:"10px 0"},r)},t)}const g={"N\xE4her:in in Bangladesch":.29,"Mensch mit Mindestlohn in Deutschland":9.82,"Arbeitnehmer:in in Deutschland":18.15,"Professor:in in Deutschland":38.69,"Elon Musk":16e5};function k(t,r=0){const s=Math.ceil(-Math.log10(t));return isFinite(s)?t.toFixed(Math.max(r,s)):0 .toFixed(r)}function P({wage:t,setWage:r}){const[s,n]=h.exports.useState(8),[a,l]=h.exports.useState(1/s),o={type:"radio",style:{display:"none"}},m={padding:"2px 8px",margin:5,borderRadius:5};return i.createElement(f,null,i.createElement("p",null,i.createElement("input",{style:{width:100},id:"wage",type:"number",value:(t*a*s).toFixed(2),onChange:c=>r((parseFloat(c.target.value)||0)/(a*s))})," \u20AC",i.createElement("input",p(u({},o),{id:"hour",name:"timeBase",onClick:()=>l(1/s),checked:a==1/s})),i.createElement("label",{htmlFor:"hour",style:p(u({},m),{marginLeft:30})},"Pro Stunde"),i.createElement("input",p(u({},o),{id:"month",name:"timeBase",onClick:()=>l(21),checked:a==21})),i.createElement("label",{htmlFor:"month",style:m},"Pro Monat"),i.createElement("input",p(u({},o),{id:"year",name:"timeBase",onClick:()=>l(21*12),checked:a==21*12})),i.createElement("label",{htmlFor:"year",style:m},"Pro Jahr"),i.createElement("br",null),i.createElement("br",null)),a!=1/s&&i.createElement(i.Fragment,null,i.createElement("p",null,i.createElement("label",{htmlFor:"perWeek"},"Stunden Pro Woche: "),i.createElement("br",null),i.createElement("input",{id:"perWeek",type:"number",value:(s*5).toFixed(2),onChange:c=>{const x=parseFloat(c.target.value)||0;n(x/5)}})),i.createElement("p",null,"Entspricht ",i.createElement("b",null,t.toFixed(2)," \u20AC/h"))))}function N({wage:t,target:r=1}){const[s,n]=h.exports.useState(null),a=w(),l=p(u({},g),{Du:t});return i.createElement(f,null,Object.entries(l).map(([o,m])=>{const c=s?a-s:0,x=m/60/60;let b=Math.min(x*c,r),M=b==r?r/x:c;return i.createElement("div",{key:o},o," (",k(b,2)," \u20AC in ",k(M),"s)",i.createElement(W,{percent:b/r*100}))}),i.createElement("button",{onClick:()=>n(a)},"Start"))}function C({wage:t}){const r=u({Du:t},g),[s,n]=h.exports.useState(null),[a,l]=h.exports.useState(1),o=w();return i.createElement(f,{style:{display:"flex",flexWrap:"wrap"}},Object.entries(r).map(([m,c])=>{const x=s?o-s:0;return i.createElement("div",{key:m,onClick:()=>{n(o),l(c)},style:{padding:10,margin:20,textAlign:"center",background:a==c?"#0002":"transparent",borderRadius:10,flexBasis:0}},i.createElement(F,{value:new Date(x*a/c*1e3+new Date("2020-01-01T11:00:00Z").valueOf())}),i.createElement("span",{style:{paddingTop:3,display:"inline-block"}},m))}))}function L({wage:t}){const r=u({Du:t},g),[s,n]=h.exports.useState(t);return i.createElement(f,{style:{display:"flex",flexWrap:"wrap"}},Object.entries(r).map(([a,l])=>i.createElement(i.Fragment,null,i.createElement("div",{key:a,onClick:()=>{n(l)},style:{padding:10,margin:20,textAlign:"center",background:s==l?"#0002":"transparent",borderRadius:10,flexBasis:150}},i.createElement("span",{style:{paddingTop:3,display:"inline-block"}},k(s/l,1),"x",i.createElement("br",null)," ",a)))))}function O(t={}){const{wrapper:r}=t.components||{};return r?e.exports.jsx(r,Object.assign({},t,{children:e.exports.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",em:"em",a:"a",strong:"strong"},t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(n.h1,{children:"Zeit ist Geld"}),`
`,e.exports.jsx("p",{className:"subtitle",children:"Ein Essay \xFCber den (monet\xE4ren) Wert von Zeit"}),`
`,e.exports.jsxs("section",{children:[e.exports.jsxs(n.p,{children:["Dieses Essay zu lesen wird Zeit \u201Ekosten\u201C. Bisher ",t.time<60?e.exports.jsxs(e.exports.Fragment,{children:[" zwar nur ",t.time.toFixed(0)," Sekunden, das wird sich jedoch noch \xE4ndern."]}):e.exports.jsxs(e.exports.Fragment,{children:[" ",t.time.toFixed(0)," Sekunden."]})]}),e.exports.jsx(n.p,{children:`Doch was hei\xDFt \u201Ekosten\u201C in diesem Kontext? Kann man Zeit etwa ausgeben, kaufen,
verkaufen, handeln? Wenn ja, was ist der Wert von Zeit? Ist alle Zeit gleich viel wert?
Was bedeutet Lohnungleichheit f\xFCr die Verteilung von Zeit?`})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Zeit verkaufen"}),e.exports.jsxs(n.p,{children:[`Viele Menschen in Deutschland verbringen circa die H\xE4lfte ihres wachen Tages damit, ihre
Zeit zu verkaufen. `,e.exports.jsx(n.em,{children:`Acht Stunden arbeiten, acht Stunden schlafen und acht Stunden Freizeit und
Erholung`}),`
`,e.exports.jsxs(d,{children:[`Robert Owen (1771\u20131858) als Forderung zur Einf\xFChrung des Acht-Stunden-Arbeitstages
`,e.exports.jsx(n.a,{href:"https://de.wikipedia.org/w/index.php?title=Achtstundentag&oldid=218006239",children:"[Quelle abgerufen am 18.01.2022]"}),`
`]}),`.
Normalerweise nennen wir diese T\xE4tigkeit jedoch nicht \u201EZeit verkaufen\u201C, sondern \u201ELohnarbeit\u201C.`]}),e.exports.jsxs(n.p,{children:[`Beim Handel mit Dienstleistungen ist es offensichtlich, dass wir Zeit kaufen bzw. verkaufen.
Sei es, bei der Fris\xF6r:in oder in der Psychotherapie: Es findet ein direkter Tausch von einer bestimmten, klar
definierten Zeiteinheit f\xFCr einen bestimmten, klar definierten Geldbetrag statt. `,e.exports.jsx(n.em,{children:`Haare Schneiden 20\xA0\u20AC.
Therapiestunde 100\xA0\u20AC`}),`
`,e.exports.jsxs(d,{children:[`Verhaltenstherapie, Einzelbehandlung, Dauer mind. 50 Min.
`,e.exports.jsx(n.a,{href:"https://www.bptk.de/wp-content/uploads/2020/04/GOP-Infotabelle_Stand-2020.pdf",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),"."]}),e.exports.jsxs(n.p,{children:[`Bei anderen K\xE4ufen ist nicht auf den ersten Blick offensichtlich, dass mit Zeit gehandelt
wird. `,e.exports.jsx(n.em,{children:"Pizza 8\xA0\u20AC."})]}),e.exports.jsx(n.p,{children:`Hier steht zwar auf der einen Seite ein Geldbetrag, auf der anderen Seite steht
jedoch ein greifbares, physisches (und in diesem Fall essbares) Produkt.
Um die Pizza herzustellen, musste die Pizzab\xE4cker:in Arbeitszeit aufwenden.
Zus\xE4tzlich brauchte sie Rohstoffe, z.\xA0B. das Mehl, die Hefe, die Tomaten, den K\xE4se, etc.`}),e.exports.jsxs(n.p,{children:[`Um diese Rohstoffe herzustellen, brauchte es auch wieder Arbeitszeit, und eventuell
weitere Rohstoffe (z.\xA0B. Weizen f\xFCr die Mehlherstellung oder D\xFCnger und Wasser f\xFCr das Ziehen von Tomaten).
Auch f\xFCr die Herstellung dieser Rohstoffe musste Zeit aufgewendet werden
`,e.exports.jsxs(d,{children:["An dieser Stelle muss angemerkt werden, dass nicht ",e.exports.jsx(n.em,{children:"alle"}),` Wertsch\xF6pfung allein auf das
Aufwenden und Verkaufen von Zeit zur\xFCckgef\xFChrt werden kann. So wird z.\xA0B. f\xFCr das Z\xFCchten von
Tomaten zus\xE4tzlich die Fl\xE4che ben\xF6tigt, auf der die Pflanzen wachsen. Diese Fl\xE4che kann nicht sinnvoll in
Zeitaufwand umgerechnet werden und soll deshalb f\xFCr den Zweck dieses Textes ignoriert werden.
`]}),"."]}),e.exports.jsx(n.p,{children:"Wir sehen also, dass auch beim Handel mit physischen Waren ein Handel mit Zeit erfolgt."})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Der Wert der Zeit"}),e.exports.jsxs(n.p,{children:[`Was an Preisen f\xFCr Dienstleistungen deutlich wird, jedoch auch f\xFCr andere Waren gilt, ist, dass nicht alle Zeit gleich
viel wert ist.
`,e.exports.jsx(n.em,{children:"Haare schneiden 20\xA0\u20AC. Therapiestunde 100\xA0\u20AC."})]}),e.exports.jsx(n.p,{children:`Oft ist uns die unterschiedliche Verg\xFCtung unterschiedlicher T\xE4tigkeiten zwar prinzipiell klar, jedoch trotzdem
schlecht greifbar. Dies hat verschiedene Gr\xFCnde.`}),e.exports.jsxs(n.p,{children:["Gehalt wird oft in gro\xDFen Einheiten angegeben. ",e.exports.jsx(n.em,{children:"36.588 Euro pro Jahr"}),`
`,e.exports.jsxs(d,{children:[`durchschnittliches Einkommen von Arbeitnehmer:innen in Deutschland
`,e.exports.jsx(n.a,{href:"https://www.dgb.de/themen/++co++6ca263de-fb0e-11e9-bdcf-52540088cada#wiehoch2021",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),`.
Dadurch f\xE4llt es schwer, sich darunter etwas vorzustellen.
Was k\xF6nnte man alles in einem Jahr machen? Ein Haus bauen, ein Buch schreiben, mit dem Fahrrad nach Spanien fahren,
etc.
Was k\xF6nnte man alles mit 36\xA0588\xA0\u20AC machen? \xDCber zw\xF6lftausend Laibe Brot kaufen
`,e.exports.jsx(d,{children:"bei einem Preis von 3\xA0\u20AC pro Laib"}),`,
mehr als eintausendzweihundert Mal zum Fris\xF6r gehen
`,e.exports.jsx(d,{children:"Bei einem Preis von 20\xA0\u20AC pro Haarschnitt"}),", etc."]}),e.exports.jsxs(n.p,{children:[`Noch weniger Greifbar wird die Sache mit dem Lohn dadurch, dass nicht gerne \xFCber Geh\xE4lter geredet wird.
`,e.exports.jsx(n.em,{children:"\xDCber Geld redet man nicht."}),`
So kann ungleiche Bezahlung nicht auf und kein Ver\xE4nderungswille entsteht.`]})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Vergleichswerte: Wer verdient wie viel?"}),e.exports.jsxs(n.p,{children:[`Um Licht in dieses Dunkel zu bringen, ist es hilfreich, Vergleichswerte einzuholen und diese in greifbare
Einheiten umzurechnen
`,e.exports.jsx(d,{children:`Der Einfachheit halber werden nachfolgend Brutto-Einkommen (vor Steuerabgaben) betrachtet.
Steuern sind nat\xFCrlich ein wichtiger Faktor beim Einkommen, allerdings oft schwer abzusch\xE4tzen und (international)
zu
vergleichen.
`}),"."]}),e.exports.jsx(n.p,{children:`Wie viel verdienst du? Der Einfachheit halber kannst du dein Gehalt entweder
als Stundenlohn, oder als Jahres- oder als Monatseinkommen eingeben.`}),e.exports.jsx(P,{wage:t.wage,setWage:t.setWage}),e.exports.jsxs(n.p,{children:["Der ",e.exports.jsx(n.strong,{children:"Mindestlohn in Deutschland betr\xE4gt 9,82\xA0\u20AC/h"}),` brutto (vor Abzug von Steuern)
`,e.exports.jsxs(d,{children:[`Stand 01.01.2022.
`,e.exports.jsx(n.a,{href:"https://www.dgb.de/themen/++co++6ca263de-fb0e-11e9-bdcf-52540088cada#wiehoch2021",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),"."]}),e.exports.jsxs(n.p,{children:["Das durchschnittliche ",e.exports.jsx(n.strong,{children:"Einkommen von Arbeitnehmer:innen"}),` in Deutschland liegt bei 3049\xA0\u20AC/Monat brutto
`,e.exports.jsxs(d,{children:[`Stand 2021.
`,e.exports.jsx(n.a,{href:"https://www.dgb.de/themen/++co++37f4eb9a-5bc3-11eb-ac48-001a4a160123",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),`,
was einem Stundenlohn von
`,e.exports.jsxs("code",{children:["(3049\xA0\u20AC/Monat) / (21\xA0Arbeitstage/Monat) / (8h\xA0Stunden/Tag) =\xA0",e.exports.jsx(n.strong,{children:"18,15\xA0\u20AC/h"})]})," entspricht."]}),e.exports.jsxs(n.p,{children:["Das Durchschnittsgehalt f\xFCr ",e.exports.jsx(n.em,{children:"Professoren"}),` betr\xE4gt in Deutschland 6500 \u20AC/Monat brutto
`,e.exports.jsxs(d,{children:[`Stand 2022
`,e.exports.jsx(n.a,{href:"https://www.academics.de/ratgeber/gehalt-professor-was-verdient-ein-professor",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),`,
woraus sich ein Stundenlohn von
`,e.exports.jsxs("code",{children:["(3049\xA0\u20AC/Monat) / (21\xA0Arbeitstage/Monat) / (8\xA0h/Tag) =\xA0",e.exports.jsx(n.strong,{children:"38,69\xA0\u20AC/h"})]})," ergibt."]}),e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"Elon Musk, der momentan reichste Mensch der Welt"}),", besitzt 264\xA0",e.exports.jsx(n.em,{children:"Milliarden"}),`\xA0US-Dollar
`,e.exports.jsxs(d,{children:[`Stand 14.01.2022
`,e.exports.jsx(n.a,{href:"https://de.statista.com/statistik/daten/studie/181482/umfrage/liste-der-top-25-milliardaere-weltweit/",children:`[Quelle abgerufen am
20.01.2022]`}),`
`]})," (231.5\xA0",e.exports.jsx(n.em,{children:"Milliarden"}),`\xA0Euro).
Elon Musk ist 50 Jahre alt. Selbst wenn wir (unrealistischerweise) annehmen, dass Elon Musk seit seinem 16.
Geburtstag ohne Urlaub oder sonstigen Pausen 80 Stunden pro Woche gearbeitet h\xE4tte, ergeben sich
`,e.exports.jsx("code",{children:"(50\xA0Jahre\xA0-\xA016\xA0Jahre) * 52\xA0Wochen/Jahr * 80\xA0Stunden/Woche = 141\xA0440\xA0Arbeitsstunden"}),`,
die Musk maximal in seinem Leben geleistet haben kann. Hieraus ergibt sich ein Stundenlohn von
`,e.exports.jsxs("code",{children:["231.5\xA0",e.exports.jsx(n.em,{children:"Milliarden"}),"\xA0\u20AC\xA0/\xA0141\xA0440\xA0h =\xA0",e.exports.jsx(n.strong,{children:"1.6\xA0Millionen\xA0\u20AC/h"})]}),`
`,e.exports.jsx(d,{children:` Nat\xFCrlich ist dieser Stundenlohn komplett unrealistisch, was f\xFCr die Zwecke
dieses Essays ignoriert werden soll. Oder wollte etwa jemand behaupten, dass Musk sich sein Geld nicht
im Schwei\xDFe seines Angesichts erarbeitet habe?
`}),"."]}),e.exports.jsxs(n.p,{children:["Der ",e.exports.jsx(n.strong,{children:"Mindestlohn f\xFCr N\xE4her:innen in Bangladesch"}),` betr\xE4gt umgerechnet ca. 95 US-Dollar/Monat
`,e.exports.jsxs(d,{children:[`Stand 2018
`,e.exports.jsx(n.a,{href:"https://fashionunited.ch/nachrichten/business/bangladesch-mindestlohn-fuer-bekleidungsarbeiter-wird-auf-95-us-dollar-erhoeht/2018091715842",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),` (ca. 83,31 \u20AC/Monat).
Da zuverl\xE4ssige Informationen \xFCber die tats\xE4chlichen Arbeitszeiten schwierig zu bekommen sind, nehmen wir
optimistische 12-Stunden-Schichten bei einer 6-Tage-Woche an. Hieraus ergibt sich ein Stundenlohn von
`,e.exports.jsxs("code",{children:["(83,31\xA0\u20AC/Monat) / (4\xA0Wochen/Monat) / (6\xA0Tage/Woche) / (12\xA0h/Tag) = ",e.exports.jsx(n.strong,{children:"0,29\xA0\u20AC/h"})]}),`
`,e.exports.jsx(d,{children:"Ob dieser Mindestlohn eingehalten wird, steht auf einer anderen Seite."}),"."]})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Die Zeit eines Euros"}),e.exports.jsx(n.p,{children:`Um ein Verst\xE4ndnis f\xFCr diese Zahlen zu entwickeln ergibt es Sinn, sich Gehalt auf kleineren Skalen zu verdeutlichen
und zu vergleichen. Wie lange dauert es, 1\xA0\u20AC zu verdienen?`}),e.exports.jsx(n.p,{children:"Machen wir hierzu ein Gedankenexperiment: Wie lange dauert es f\xFCr verschiedene Menschen, einen Euro zu verdienen?"}),e.exports.jsx(N,{wage:t.wage,target:1}),e.exports.jsx(n.p,{children:"Wir sehen also, dass es je nach Einkommen unterschiedlich lange dauert, einen Geldbetrag zu \u201Eerarbeiten\u201C."})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Schnelle und langsame Zeit"}),e.exports.jsx(n.p,{children:"Was passiert, wenn du das Geld, das du verdienst, wiederum nutzt, um die Zeit einer anderen Person zu kaufen?"}),e.exports.jsxs(n.p,{children:[`Um dies zu Veranschaulichen, k\xF6nnen wir folgendes Gedankenexperiment durchf\xFChren:
W\xFCrdest du mit einem Stundenlohn von `,t.wage.toFixed(2),`\u20AC die Zeit von Elon Musk kaufen wollen, (z.\xA0B. damit er
dir die Haare schneidet),
m\xFCsstest du pro Minute, die du von ihm einkaufst `,(g["Elon Musk"]/t.wage/60/8).toFixed(0)," ",e.exports.jsx(n.em,{children:"Tage"}),`
Arbeiten. Kaufst du jedoch Zeit von einer N\xE4her:in in Bangladesch in Form eines T-Shirts, welches, musst du
nur `,(g["N\xE4her:in in Bangladesch"]/t.wage*60*60).toFixed(0)," ",e.exports.jsx(n.em,{children:"Sekunden"}),` arbeiten, um eine Stunde
Arbeitszeit der N\xE4her:innen zu kaufen
`,e.exports.jsx(d,{children:`In diesem Text werden alle Abgaben, Zwischenh\xE4ndler und Materialkosten ignoriert,
obwohl aufgrund des geringen Stundenlohnes der N\xE4her:innen das meiste Geld auf sie entf\xE4llt.
`}),"."]}),e.exports.jsxs(n.p,{children:[`Veranschaulichen wir diesen Zusammenhang nun mithilfe der unten stehenden Uhren:
Jede Uhr ist einer Person Zugeordnet, die ihre Zeit verkauft.
Klickst du auf deine Uhr, l\xE4uft diese mit der normalen Geschwindigkeit `,e.exports.jsx("code",{children:"1s \u2259 1s"}),`.
Alle anderen Uhren zeigen wie viel Zeit du dir von den Anderen Personen kaufen k\xF6nntest.
Klickst du auf die uhr der N\xE4her:in in Bangladesch, l\xE4uft diese mit der normalen Geschwindigkeit `,e.exports.jsx("code",{children:"1s \u2259 1s"}),`.
Alle anderen Uhren zeigen wie viel Zeit sich die N\xE4her:in von den Anderen Personen kaufen k\xF6nnte
`,e.exports.jsx(d,{children:"Praktisch keine."}),"."]}),e.exports.jsx(C,{wage:t.wage})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Zeit von vielen Menschen"}),e.exports.jsxs(n.p,{children:[`Wie wir gesehen haben, k\xF6nnen reiche Menschen mit dem Geld, das sie in einer Stunde verdienen, viele Stunden
Arbeitszeit von armen Menschen kaufen.
Jedoch kann ein armer Mensch nicht so viel arbeiten, als dass er damit all das Geld, was ein reicher Mensch verdient,
bekommen k\xF6nnte.
`,e.exports.jsx(n.em,{children:`Tats\xE4chlich k\xF6nnen sich die Uhren armer Menschen nicht schneller bewegen. Es ist unm\xF6glich, mehr zu Arbeiten als Zeit
vorhanden ist`}),"."]}),e.exports.jsx(n.p,{children:`Reiche Menschen dagegen k\xF6nnen mit ihrem Geld nicht nur die Arbeitszeit von einem Menschen kaufen, sie k\xF6nnen gleich mehrere
Menschen f\xFCr sich Arbeiten lassen. Ein einziger Mensch kann so \xFCber die Zeit vieler Menschen verf\xFCgen.`}),e.exports.jsxs(n.p,{children:[`Mithilfe der untenstehenden K\xE4sten soll dieser Zusammenhang verdeutlicht werden.
Klickst du auf deinen Kasten, kannst du sehen, wie viele N\xE4her:innen in Bangladesch, Menschen mit Mindestlohn,
oder Professoren du Besch\xE4ftigen k\xF6nntest
`,e.exports.jsx(d,{children:"Wieder unter Nicht-Ber\xFCcksichtigung von Steuern, Sozialabgaben, o.\xC4."}),`.
Klickst du auf das Feld von Elon Musk, kannst du z.\xA0B. sehen, von wie vielen Menschen deiner Gehaltsklasse er
die Zeit aufkaufen k\xF6nnte.`]}),e.exports.jsx(L,{wage:t.wage})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Fazit"}),e.exports.jsxs(n.p,{children:[`Menschen verdienen in unserem kapitalistischen System sehr unterschiedlich viel Geld. Dies f\xFChrt nicht nur zu einer
ungleichen Verteilung der materiellen G\xFCter, sondern auch zu einer ungleichen Verteilung
der Zeit. Reiche Menschen k\xF6nnen mit ihrem Geld die Zeit sehr vieler armer Menschen kaufen. Elon Musk ist `,e.exports.jsx(n.em,{children:"absurd"}),`
reich.`]}),e.exports.jsxs(n.p,{children:[`H\xE4ttest du in der Zeit, in der du dieses Essay gelesen hast gearbeitet, h\xE4ttest
du `,(t.time/60/60*t.wage).toFixed(2),"\xA0\u20AC verdient."]}),e.exports.jsx(n.p,{children:e.exports.jsx(n.em,{children:`Dieses Essay wurde von Jaro Habiger 2022 im Rahmen des zweiw\xF6chigen \u201ENew Media\u201C Basisklassen-Workshops an der Kunsthochschule Kassel
bei Rosa Menkman und Joel Baumann geschrieben.`})})]})]})}}window.addEventListener("DOMContentLoaded",()=>{A.render(i.createElement(R,null),document.getElementById("root"))});function R(){const t=w(),[r,s]=h.exports.useState(9.82);return i.createElement(B,null,i.createElement(O,{time:t,wage:r,setWage:s}))}
