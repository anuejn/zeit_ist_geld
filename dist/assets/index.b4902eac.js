var M=Object.defineProperty,S=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var k=(t,r,s)=>r in t?M(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,x=(t,r)=>{for(var s in r||(r={}))Z.call(r,s)&&k(t,s,r[s]);if(w)for(var s of w(r))y.call(r,s)&&k(t,s,r[s]);return t},f=(t,r)=>S(t,D(r));import{r as h,R as i,L as W,C as F,j as e,a as T,M as A}from"./vendor.fa1b2304.js";const B=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}};B();const G=Date.now();function b(){const[t,r]=h.exports.useState(0);return h.exports.useEffect(()=>{let s=!0;const n=()=>{r((Date.now()-G)/1e3),s&&requestAnimationFrame(n)};return n(),()=>{s=!1}},[]),t}let v=0;function d({children:t}){const r=h.exports.useMemo(()=>(v+=1,`sn-${v}`),[]);return h.exports.createElement(h.exports.Fragment,null,h.exports.createElement("label",{htmlFor:r,className:"margin-toggle sidenote-number"}),h.exports.createElement("input",{type:"checkbox",id:r,className:"margin-toggle"}),h.exports.createElement("span",{className:"sidenote"},t))}function j({children:t,style:r={}}){return h.exports.createElement("figure",{style:x({borderTop:"1px solid darkgray",borderBottom:"1px solid darkgray",padding:"10px 0"},r)},t)}const p={"N\xE4her:innen in Bangladesch":.29,"Mindestlohn in Deutschland":9.82,"Durchschnittsgehalt von Arbeitnehmer:innen in Deutschland":18.15,"Durchschnittsgehalt f\xFCr Professor:innen in Deutschland":38.69,"Elon Musk":16e5};function E(t,r=0){const s=Math.ceil(-Math.log10(t));return isFinite(s)?t.toFixed(Math.max(r,s)):0 .toFixed(r)}function P({wage:t,setWage:r}){const[s,n]=h.exports.useState(1),[a,l]=h.exports.useState(40);return i.createElement(j,null,i.createElement("p",null,i.createElement("label",{htmlFor:"wage"},"Dein Lohn: "),i.createElement("br",null),i.createElement("input",{style:{width:100},id:"wage",type:"number",value:(t*s).toFixed(2),onChange:o=>r((parseFloat(o.target.value)||0)/s)})," \u20AC",i.createElement("input",{type:"radio",id:"hour",name:"timeBase",onClick:()=>n(1),checked:s==1}),i.createElement("label",{htmlFor:"hour"},"Pro Stunde"),i.createElement("input",{type:"radio",id:"month",name:"timeBase",onClick:()=>n(a/5*21),checked:s==a/5*21}),i.createElement("label",{htmlFor:"month"},"Pro Monat"),i.createElement("input",{type:"radio",id:"year",name:"timeBase",onClick:()=>n(a/5*21*12),checked:s==a/5*21*12}),i.createElement("label",{htmlFor:"year"},"Pro Jahr"),i.createElement("br",null),i.createElement("br",null)),s!=1&&i.createElement(i.Fragment,null,i.createElement("p",null,i.createElement("label",{htmlFor:"perWeek"},"Stunden Pro Woche: "),i.createElement("br",null),i.createElement("input",{id:"perWeek",type:"number",value:a.toFixed(2),onChange:o=>{l(parseFloat(o.target.value)||0)}})),i.createElement("p",null,"Entspricht ",i.createElement("b",null,t.toFixed(2)," \u20AC/h"))))}function C({wage:t,target:r=1}){const[s,n]=h.exports.useState(null),a=b(),l=f(x({},p),{Du:t});return i.createElement(j,null,Object.entries(l).map(([o,u])=>{const c=s?a-s:0,m=u/60/60;let g=Math.min(m*c,r),z=g==r?r/m:c;return i.createElement("div",{key:o},o," (",E(g,2)," \u20AC in ",E(z),"s)",i.createElement(W,{percent:g/r*100}))}),i.createElement("button",{onClick:()=>n(a)},"Start"))}function N({wage:t}){const r=f(x({},p),{Du:t}),[s,n]=h.exports.useState(null),[a,l]=h.exports.useState(1),o=b();return i.createElement(j,{style:{display:"flex",flexWrap:"wrap"}},Object.entries(r).map(([u,c])=>{const m=s?o-s:0;return i.createElement("div",{key:u,onClick:()=>{n(o),l(c)},style:{padding:10,margin:20,textAlign:"center",background:a==c?"#0002":"transparent",borderRadius:10,flexBasis:0}},i.createElement(F,{value:new Date(m*a/c*1e3)}),i.createElement("span",{style:{paddingTop:3,display:"inline-block"}},u))}))}function O(t={}){const{wrapper:r}=t.components||{};return r?e.exports.jsx(r,Object.assign({},t,{children:e.exports.jsx(s,{})})):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",em:"em",a:"a",strong:"strong"},t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(n.h1,{children:"Zeit ist Geld"}),`
`,e.exports.jsx("p",{className:"subtitle",children:"Ein Essay \xFCber den (monet\xE4ren) Wert von Zeit"}),`
`,e.exports.jsxs("section",{children:[e.exports.jsxs(n.p,{children:['Dieses Essay zu lesen wird Zeit "kosten". Bisher ',t.time<60?e.exports.jsxs(e.exports.Fragment,{children:[" zwar nur ",t.time.toFixed(0)," Sekunden, das wird sich jedoch noch \xE4ndern."]}):e.exports.jsxs(e.exports.Fragment,{children:[" ",t.time.toFixed(0)," Sekunden."]})]}),e.exports.jsx(n.p,{children:`Doch was hei\xDFt kosten in diesem Kontext? Kann Mensch Zeit etwa ausgeben, kaufen,
verkaufen, handeln? Wenn ja, was ist der Wert von Zeit? Ist alle Zeit gleich viel Wert?
Was bedeutet Lohnungleichheit f\xFCr die Zeit?`}),e.exports.jsx(n.p,{children:"Genau um diese Fragen wird es in diesem Text gehen."})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Zeit verkaufen"}),e.exports.jsxs(n.p,{children:[`Viele Menschen in Deutschland verbringen circa die H\xE4lfte ihres wachen Tages damit, ihre
Zeit zu verkaufen. `,e.exports.jsx(n.em,{children:`Acht Stunden arbeiten, acht Stunden schlafen und acht Stunden Freizeit und
Erholung`}),`
`,e.exports.jsxs(d,{children:[`Robert Owen (1771\u20131858) als Forderung zur einf\xFChrung des Acht Stunden Arbeitstages
`,e.exports.jsx(n.a,{href:"https://de.wikipedia.org/w/index.php?title=Achtstundentag&oldid=218006239",children:"[Quelle abgerufen am 18.01.2022]"}),`
`]}),`.
Normalerweise nennen wir diese T\xE4tigkeit jedoch nicht \u201EZeit Verkaufen\u201C, sondern \u201ELohnarbeit\u201C.`]}),e.exports.jsxs(n.p,{children:[`Beim Handel mit Dienstleistungen ist es offensichtlich, dass wir Zeit Kaufen bzw. Verkaufen.
Sei es bei der Fris\xF6r:in oder bei Psychotherapie: Es findet ein direkter Tausch von einer bestimmten, klar
definierten Zeiteinheit f\xFCr einen bestimmten, klar definierten Geldbetrag statt. `,e.exports.jsx(n.em,{children:`Haare Schneiden 20\xA0\u20AC.
Therapiestunde 100\xA0\u20AC`}),`
`,e.exports.jsxs(d,{children:[`Verhaltenstherapie, Einzelbehandlung, Dauer mind. 50 Min.
`,e.exports.jsx(n.a,{href:"https://www.bptk.de/wp-content/uploads/2020/04/GOP-Infotabelle_Stand-2020.pdf",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),"."]}),e.exports.jsxs(n.p,{children:[`Bei anderen K\xE4ufen ist nicht auf den ersten Blick offensichtlich, das mit Zeit gehandelt
wird. `,e.exports.jsx(n.em,{children:"Pizza 8\xA0\u20AC."})]}),e.exports.jsx(n.p,{children:`Hier steht zwar auf der einen Seite ein Geldbetrag, auf der anderen Seite
jedoch ein greifbares, physisches (und in diesem Fall essbares) Produkt.
Die physisch existente Pizza k\xF6nnten wir jetzt jedoch gedanklich in die Ressourcen zerlegen, die es brauchte, um sie
Herzustellen:
Die Arbeitszeit, die die Pizzab\xE4cker*in gebraucht hat, und die Rohstoffe, z. B. das Mehl, die Hefe, die Tomaten, den
K\xE4se, etc.`}),e.exports.jsxs(n.p,{children:[`Diese Rohstoffe k\xF6nnen wir jetzt wieder zerlegen in die Arbeitszeit, die es gebraucht
hat, sie herzustellen und weitere Rohstoffe (z. B. Weizen f\xFCr die Mehlherstellung oder D\xFCnger und
Wasser f\xFCr das Ziehen von Tomaten). Auch f\xFCr die Herstellung dieser Rohstoffe musste Zeit aufgewendet
werden
`,e.exports.jsxs(d,{children:["An dieser Stelle muss angemerkt werden, dass nicht ",e.exports.jsx(n.em,{children:"alle"})," Wertsch\xF6pfung ",e.exports.jsx(n.em,{children:"allein"}),` auf das
aufwenden und Verkaufen von Zeit zur\xFCckgef\xFChrt werden kann. So wird z. B. f\xFCr das Z\xFCchten von
Tomaten zus\xE4tzlich die Fl\xE4che ben\xF6tigt, auf der die Pflanzen wachsen. Diese Fl\xE4che kann nicht sinnvoll in
Zeitaufwand
umgerechnet werden und soll deshalb f\xFCr den Zweck dieses Textes ignoriert werden.
`]}),"."]})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Der wert der Zeit"}),e.exports.jsxs(n.p,{children:[`Was an Preisen f\xFCr Dienstleistungen deutlich wird, jedoch auch f\xFCr andere Waren gilt, ist, dass nicht alle Zeit gleich
viel wert ist.
`,e.exports.jsx(n.em,{children:"Haare schneiden 20\xA0\u20AC. Therapiestunde 100\xA0\u20AC."})]}),e.exports.jsx(n.p,{children:`Oft ist uns die unterschiedliche Verg\xFCtung unterschiedlicher T\xE4tigkeiten zwar prinzipiell klar, jedoch trotzdem
schlecht greifbar. Dies hat verschiedene Gr\xFCnde.`}),e.exports.jsxs(n.p,{children:[`Gehalt wird oft in schlecht greifbaren Einheiten angegeben.
`,e.exports.jsx(n.em,{children:"36.588 Euro Pro Jahr"}),`
`,e.exports.jsxs(d,{children:[`Durchschnittliches Einkommen von Arbeitnehmer:innen in Deutschland
`,e.exports.jsx(n.a,{href:"https://www.dgb.de/themen/++co++6ca263de-fb0e-11e9-bdcf-52540088cada#wiehoch2021",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),"."]}),e.exports.jsx(n.p,{children:`Diese Zahl verwendet so unglaublich gro\xDFe Einheiten f\xFCr Zeit und Geld, dass es schwerf\xE4llt, sich darunter etwas
vorzustellen.`}),e.exports.jsxs(n.p,{children:[`Was k\xF6nnte man alles in einem Jahr machen? Ein Haus bauen, ein Buch schreiben, nach Spanien mit dem Fahrrad fahren,
etc.
Was k\xF6nnte man alles mit 36\xA0588\xA0\u20AC machen? \xFCber `,e.exports.jsx(n.em,{children:"Zw\xF6lftausend"}),` Laibe Brot kaufen
`,e.exports.jsx(d,{children:"bei einem Preis von 3\xA0\u20AC pro Laib"}),`,
mehr als 1200 Mal zum Fris\xF6r gehen
`,e.exports.jsx(d,{children:"Bei einem Preis von 20\xA0\u20AC pro Haarschnitt"}),", etc."]}),e.exports.jsxs(n.p,{children:[`Was die Sache noch schwieriger macht, ist die Tatsache, dass nicht gerne \xFCber Geh\xE4lter geredet wird.
`,e.exports.jsx(n.em,{children:"\xDCber Geld redet man nicht."})]}),e.exports.jsx(n.p,{children:`Durch diese Strukturen kann ungleiche Bezahlung aufrechterhalten werden, ohne das diese stark auff\xE4llt und
Ver\xE4nderungswille entsteht.`})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Vergleichswerte: Wer verdient wie viel?"}),e.exports.jsxs(n.p,{children:[`Um Licht in dieses Dunkel zu bringen, ist es hilfreich Vergleichswerte einzuholen und diese in greifbare
Einheiten umzurechnen
`,e.exports.jsx(d,{children:`Der Einfachheit halber werden wir nachfolgend Brutto-Einkommen (vor Steuerabgaben) betrachten.
Steuern sind nat\xFCrlich ein wichtiger Faktor beim Einkommen, allerdings oft schwer abzusch\xE4tzen und (international)
zu
vergleichen.
`}),"."]}),e.exports.jsx(n.p,{children:`Zuerst ist es nun hilfreich dein Einkommen zu Wissen. Du kannst der Einfachheit halber dein Gehalt entweder
als Stundenlohn, als Jahres- oder als Monatseinkommen eingeben.`}),e.exports.jsx(P,{wage:t.wage,setWage:t.setWage}),e.exports.jsxs(n.p,{children:["Der ",e.exports.jsx(n.strong,{children:"Mindestlohn in Deutschland betr\xE4gt 9,82\xA0\u20AC/h"}),` pro Stunde Brutto (vor abzug von Steuern)
`,e.exports.jsxs(d,{children:[`Stand 01.01.2022.
`,e.exports.jsx(n.a,{href:"https://www.dgb.de/themen/++co++6ca263de-fb0e-11e9-bdcf-52540088cada#wiehoch2021",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),"."]}),e.exports.jsxs(n.p,{children:["Das ",e.exports.jsx(n.strong,{children:"durchschnittliche Einkommen von Arbeitnehmer:innen"}),` in Deutschland liegt bei 3049\xA0\u20AC pro Monat Brutto
`,e.exports.jsxs(d,{children:[`Stand 2021.
`,e.exports.jsx(n.a,{href:"https://www.dgb.de/themen/++co++37f4eb9a-5bc3-11eb-ac48-001a4a160123",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),`,
was einem Stundenlohn von
`,e.exports.jsx("code",{children:"(3049\xA0\u20AC/Monat) / (21\xA0Arbeitstage/Monat"}),`
`,e.exports.jsx(d,{children:e.exports.jsx(n.a,{href:"https://www.arbeitsrechte.de/arbeitstage-pro-monat/",children:"[Quelle abgerufen am 20.01.2022]"})}),`
`,e.exports.jsxs("code",{children:[") / (8h\xA0Stunden/Tag) =\xA0",e.exports.jsx(n.strong,{children:"18,15\xA0\u20AC/h"})]})," entspricht"]}),e.exports.jsxs(n.p,{children:[`Das Durchschnittsgehalt f\xFCr Professoren betr\xE4gt in Deutschland 6500 \u20AC/Monat Brutto
`,e.exports.jsxs(d,{children:[`Stand 2022
`,e.exports.jsx(n.a,{href:"https://www.academics.de/ratgeber/gehalt-professor-was-verdient-ein-professor",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),`,
woraus sich ein Stundenlohn von
`,e.exports.jsxs("code",{children:["(3049\xA0\u20AC/Monat) / (21\xA0Arbeitstage/Monat) / (8\xA0h/Tag) =\xA0",e.exports.jsx(n.strong,{children:"38,69\xA0\u20AC/h"})]})," ergibt."]}),e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"Elon Musk, der momentan reichte Mensch der Welt"}),", besitzt 264\xA0",e.exports.jsx(n.em,{children:"Milliarden"}),`\xA0US-Dollar
`,e.exports.jsxs(d,{children:[`Stand 14.01.2022
`,e.exports.jsx(n.a,{href:"https://de.statista.com/statistik/daten/studie/181482/umfrage/liste-der-top-25-milliardaere-weltweit/",children:`[Quelle abgerufen am
20.01.2022]`}),`
`]})," (231.5\xA0",e.exports.jsx(n.em,{children:"Milliarden"}),`\xA0Euro).
Elon Musk ist 50 Jahre alt. Selbst wenn wir (unrealistischer weise) annehmen, dass Elon Musk seit seinem 16.
Geburtstag ohne Urlaub oder sonstigen Pausen 80 Stunden pro Woche gearbeitet hat, ergeben sich
`,e.exports.jsx("code",{children:"(50\xA0Jahre\xA0-\xA016\xA0Jahre) * 52\xA0Wochen/Jahr * 80\xA0Stunden/Woche = 141\xA0440\xA0Arbeitsstunden"}),`,
die Musk maximal in seinem leben geleistet haben kann. Hieraus ergibt sich ein Stundenlohn von
`,e.exports.jsxs("code",{children:["231.5\xA0",e.exports.jsx(n.em,{children:"Milliarden"}),"\xA0\u20AC\xA0/\xA0141\xA0440\xA0h =\xA0",e.exports.jsx(n.strong,{children:"1.6\xA0Millionen\xA0\u20AC/h"})]}),`
`,e.exports.jsx(d,{children:` Nat\xFCrlich ist dieser Stundenlohn komplett unrealistisch, dies soll allerdings f\xFCr die Zwecke
dieses Essays ignoriert werden. Oder wollte etwa jemand behaupten, dass Musk sich sein Geld nicht
im Schwei\xDFe seines Angesichts erarbeitet habe?
`}),"."]}),e.exports.jsxs(n.p,{children:["Der ",e.exports.jsx(n.strong,{children:"Mindestlohn f\xFCr N\xE4her:innen in Bangladesch"}),` betr\xE4gt umgerechnet ca. 95 USD/Monat
`,e.exports.jsxs(d,{children:[`Stand 2018
`,e.exports.jsx(n.a,{href:"https://fashionunited.ch/nachrichten/business/bangladesch-mindestlohn-fuer-bekleidungsarbeiter-wird-auf-95-us-dollar-erhoeht/2018091715842",children:"[Quelle abgerufen am 20.01.2022]"}),`
`]}),` (ca. 83,31 \u20AC/Monat).
Da zuverl\xE4ssige Informationen \xFCber die tats\xE4chlichen Arbeitszeiten schwierig zu bekommen sind, nehmen wir
optimistische 12-Stunden-Schichten bei einer 6-Tage-Woche an. Hieraus ergibt sich ein Stundenlohn von
`,e.exports.jsxs("code",{children:["(83,31\xA0\u20AC/Monat) / (4\xA0Wochen/Monat) / (6\xA0Tage/Woche) / (12\xA0h/Tag) = ",e.exports.jsx(n.strong,{children:"0,29\xA0\u20AC/h"})]}),`
`,e.exports.jsx(d,{children:"Ob dieser Mindestlohn eingehalten wird, steht auf einer anderen Seite."}),"."]})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Die Zeit eines Euros"}),e.exports.jsx(n.p,{children:`Greifbarer ist es, sich Gehalt auf kleineren Skalen zu verdeutlichen und zu vergleichen. Wie lange dauert es, 1\xA0\u20AC zu
verdienen?`}),e.exports.jsx(n.p,{children:"Machen wir hierzu ein Gedankenexperiment: Wie lange dauert es f\xFCr verschiedene Menschen, einen Euro zu verdienen?"}),e.exports.jsx(C,{wage:t.wage,target:1}),e.exports.jsx(n.p,{children:"Wir sehen also, das es je nach einkommen unterschiedlich lange dauert, einen Geldbetrag zu \u201Eerarbeiten\u201C."})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Schnelle und langsame Zeit"}),e.exports.jsx(n.p,{children:`Was passiert, wenn du das Geld, das du verdienst, wiederum nutzt, um die Zeit einer anderen Person zu kaufen?
Wenn du viel Geld pro Stunde verdient, und mit diesem Geld die Zeit einer anderen Person
zu einem g\xFCnstigeren Preis einkauft? Du hast mehr Zeit als vorher.
Hierdurch wird es reichen Menschen erm\xF6glicht, mehr Zeit zu \u201Everbrauchen\u201C, als sie lebenszeit haben.
Auf der anderen Seite haben die Personen, die ihre Zeit billing verkaufen m\xFCssen, weniger Zeit.`}),e.exports.jsxs(n.p,{children:[`Um dies zu Veranschaulichen k\xF6nnen wir folgendes Gedankenexperiment durchf\xFChren:
W\xFCrdest du mit einem Stundenlohn von `,t.wage.toFixed(2),`\u20AC die Zeit von Elon Musk kaufen wollen, (z.\xA0B. damit er
dir
die Haare
schneidet)
m\xFCsstest du pro Minute, die du von ihm einkaufst `,(p["Elon Musk"]/t.wage/60/8).toFixed(0)," ",e.exports.jsx(n.em,{children:"Tage"}),`
Arbeiten. Kaufst du jedoch Zeit in Form eines T-shirts, welches
in Bangladesh hergestellt wurde, musst du
nur `,(p["N\xE4her:innen in Bangladesch"]/t.wage*60*60).toFixed(1)," ",e.exports.jsx(n.em,{children:"Sekunden"}),` Arbeiten, um eine Stunde
Arbeitszeit der N\xE4her:innen zu kaufen
`,e.exports.jsx(d,{children:`An dieser Stelle werden alle Zwischenh\xE4ndler und Materialien,
auf die im Falle eines T-Shirts aufgrund des geringen Stundenlohnes der N\xE4her:innen das meiste Geld entf\xE4llt, ignoriert
`}),"."]}),e.exports.jsxs(n.p,{children:[`Veranschaulichen wir diesen Zusammenhang nun mithilfe der unten stehenden Uhren:
Die zur angeklickten Uhr zugeh\xF6rige Person verkauft ihre Zeit. Diese Uhr l\xE4uft
mit der normalen Geschwindigkeit `,e.exports.jsx("code",{children:"1s \u2259 1s"}),`. Die anderen Uhren bewegen
sich jetzt so Viel langsamer / schneller, das die angeklickte Person ihre Zeit mit kaufen k\xF6nnte,
wenn sie genau das Geld ausgibt, was sie durch das Verkaufen ihrer Zeit einnimmt.`]}),e.exports.jsx(N,{wage:t.wage})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Zeit von Vielen Menschen"}),e.exports.jsxs(n.p,{children:[`Wie wir gesehen haben, k\xF6nnen reiche Menschen mit dem Geld, was sie in einer Stunde verdienen viele Stunden
Arbeitszeit
von armen Menschen kaufen.
Jedoch kann ein armer Mensch nicht so viel arbeiten, als das er damit all das Geld, was ein reicher Mensch verdient
bekommen k\xF6nnte.
`,e.exports.jsx(n.em,{children:`In echt k\xF6nnen sich die Uhren armenr Menschen nicht schneller bewegen. Es ist unm\xF6glich mehr zu Arbeiten als Zeit
vorhanden ist`})]}),e.exports.jsx(n.p,{children:`Somit ist die einzige M\xF6glichkeit f\xFCr einen reichen Menschen sein Geld f\xFCr die Zeit armer Menschen auszugeben, diese
von mehreren Menschen zu kaufen. Ein einziger Mensch kann so \xFCber die Zeit vieler Menschen verf\xFCgen.`}),e.exports.jsx(n.p,{children:"// TODO: experiment mit anzahl von Personen Kaufen"})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Fazit"}),e.exports.jsxs(n.p,{children:[`Menschen verdienen in unserem kapitalistischen System sehr unterschiedlich viel Geld. Dies f\xFChrt nicht nur zu einer
ungleichen verteilung der materiellen G\xFCter, sondern auch zu einer ungleichen verteilung
der Zeit. Reiche menschen k\xF6nnen mit ihrem Geld die Zeit sehr vieler armer Menschen kaufen. Elon Musk ist `,e.exports.jsx(n.em,{children:"absurd"}),`
Reich.`]}),e.exports.jsxs(n.p,{children:[`H\xE4ttest du in der Zeit, in der du dich mit diesem Essay besch\xE4ftigt hast, gearbeitet, h\xE4ttest
du `,(t.time/60/60*t.wage).toFixed(2),"\xA0\u20AC verdient."]}),e.exports.jsx(n.p,{children:e.exports.jsx(n.em,{children:`Dieses Essay ist 2022 im Rahmen des zweiw\xF6chigen \u201ENew Media\u201C Basisklassen-Workshops an der Kunsthochschule Kassel
bei Rosa Menkman und Joel Baumann entstanden.`})})]})]})}}window.addEventListener("DOMContentLoaded",()=>{T.render(i.createElement(L,null),document.getElementById("root"))});function L(){const t=b(),[r,s]=h.exports.useState(9.82);return i.createElement(A,null,i.createElement(O,{time:t,wage:r,setWage:s}))}
