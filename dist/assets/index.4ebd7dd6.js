var E=Object.defineProperty,M=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var g=(t,r,i)=>r in t?E(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,f=(t,r)=>{for(var i in r||(r={}))D.call(r,i)&&g(t,i,r[i]);if(p)for(var i of p(r))Z.call(r,i)&&g(t,i,r[i]);return t},b=(t,r)=>M(t,S(r));import{r as h,R as s,L as F,j as e,a as W,M as y}from"./vendor.77b76a63.js";const P=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}};P();const G=Date.now();function j(){const[t,r]=h.exports.useState(0);return h.exports.useEffect(()=>{let i=!0;const n=()=>{r((Date.now()-G)/1e3),i&&setTimeout(n,100)};return n(),()=>{i=!1}},[]),t}let w=0;function d({children:t}){const r=h.exports.useMemo(()=>(w+=1,`sn-${w}`),[]);return h.exports.createElement(h.exports.Fragment,null,h.exports.createElement("label",{htmlFor:r,className:"margin-toggle sidenote-number"}),h.exports.createElement("input",{type:"checkbox",id:r,className:"margin-toggle"}),h.exports.createElement("span",{className:"sidenote"},t))}function k({children:t}){return h.exports.createElement("figure",{style:{borderTop:"1px solid darkgray",borderBottom:"1px solid darkgray",padding:"10px 0"}},t)}const u={"N\xE4her:innen in Bangladesch":.29,"Mindestlohn in Deutschland":9.82,"durchschnittliche Einkommen von Arbeitnehmer*innen** in Deutschland":18.15,"Durchschnittsgehalt f\xFCr Professoren in Deutschland":38.69,"Elon Musk":16e5};function z(t,r=0){const i=Math.ceil(-Math.log10(t));return isFinite(i)?t.toFixed(Math.max(r,i)):0 .toFixed(r)}function T({wage:t,target:r=1}){const[i,n]=h.exports.useState(null),a=j();return s.createElement(k,null,Object.entries(b(f({},u),{Du:t})).map(([l,o])=>{const m=i?a-i:0,x=o/60/60;let c=Math.min(x*m,r),v=c==r?r/x:m;return s.createElement("div",{key:l},l," (",z(c,2)," \u20AC in ",z(v),"s)",s.createElement(F,{percent:c/r*100}))}),s.createElement("button",{onClick:()=>n(a)},"Start"))}function A({wage:t,setWage:r}){const[i,n]=h.exports.useState(1),[a,l]=h.exports.useState(40);return s.createElement(k,null,s.createElement("p",null,s.createElement("label",{htmlFor:"wage"},"Dein Lohn: "),s.createElement("br",null),s.createElement("input",{style:{width:100},id:"wage",type:"number",value:(t*i).toFixed(2),onChange:o=>r((parseFloat(o.target.value)||0)/i)}),"\u20AC",s.createElement("input",{type:"radio",id:"hour",name:"timeBase",onClick:()=>n(1),checked:i==1}),s.createElement("label",{htmlFor:"hour"},"Pro Stunde"),s.createElement("input",{type:"radio",id:"month",name:"timeBase",onClick:()=>n(a/5*21),checked:i==a/5*21}),s.createElement("label",{htmlFor:"month"},"Pro Monat"),s.createElement("input",{type:"radio",id:"year",name:"timeBase",onClick:()=>n(a/5*21*12),checked:i==a/5*21*12}),s.createElement("label",{htmlFor:"year"},"Pro Jahr"),s.createElement("br",null),s.createElement("br",null)),i!=1&&s.createElement(s.Fragment,null,s.createElement("p",null,s.createElement("label",{htmlFor:"perWeek"},"Stunden Pro Woche: "),s.createElement("br",null),s.createElement("input",{id:"perWeek",type:"number",value:a.toFixed(2),onChange:o=>{l(parseFloat(o.target.value)||0)}})),s.createElement("p",null,"Entspricht ",s.createElement("b",null,t.toFixed(2)," \u20AC/h"))))}function B(t={}){const{wrapper:r}=t.components||{};return r?e.exports.jsx(r,Object.assign({},t,{children:e.exports.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",em:"em",a:"a",strong:"strong",ul:"ul",li:"li"},t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(n.h1,{children:"Zeit ist Geld"}),`
`,e.exports.jsx("p",{className:"subtitle",children:"Ein Essay \xFCber den (monet\xE4ren) Wert von Zeit"}),`
`,e.exports.jsxs("section",{children:[e.exports.jsxs(n.p,{children:['Dieses Essay zu lesen wird Zeit "kosten". Bisher ',t.time<60?e.exports.jsxs(e.exports.Fragment,{children:[" zwar nur ",t.time.toFixed(0)," Sekunden, das wird sich jedoch noch \xE4ndern."]}):e.exports.jsxs(e.exports.Fragment,{children:[" ",t.time.toFixed(0)," Sekunden."]})]}),e.exports.jsx(n.p,{children:`Doch was hei\xDFt kosten in diesem Kontext? Kann Mensch Zeit etwa ausgeben, kaufen,
verkaufen, handeln? Wenn ja, was ist der Wert von Zeit? Ist alle Zeit gleich viel Wert?
Was bedeutet Lohnungleichheit f\xFCr die Zeit?`}),e.exports.jsx(n.p,{children:"Genau um diese Fragen wird es in diesem Text gehen."})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Zeit verkaufen"}),e.exports.jsxs(n.p,{children:[`Viele Menschen in Deutschland verbringen circa die H\xE4lfte ihres wachen Tages damit, ihre
Zeit zu verkaufen. `,e.exports.jsx(n.em,{children:`Acht Stunden arbeiten, acht Stunden schlafen und acht Stunden Freizeit und
Erholung`}),e.exports.jsxs(d,{children:[` Robert Owen
(1771\u20131858) als Forderung zur einf\xFChrung des Acht Stunden Arbeitstages
`,e.exports.jsx(n.a,{href:"https://de.wikipedia.org/w/index.php?title=Achtstundentag&oldid=218006239",children:`[quelle abgerufen am
18.01.2022]`})]}),`
Normalerweise nennen wir diese T\xE4tigkeit jedoch nicht "Zeit Verkaufen", sondern "Lohnarbeit".`]}),e.exports.jsxs(n.p,{children:[`Beim Handel mit Dienstleistungen ist es relativ offensichtlich, dass wir Zeit Kaufen bzw. Verkaufen.
Sei es beim Fris\xF6r oder beim Psychoterapeut: Es findet ein direkter Tausch von einer bestimmten, klar
definierten Zeiteinheit f\xFCr einen bestimmte f\xFCr einen klar definierten Geldbetrag statt. `,e.exports.jsx(n.em,{children:`Haare Schneiden 20\u20AC.
Therapiestunde 100\u20AC`}),e.exports.jsxs(d,{children:[`Verhaltenstherapie, Einzelbehandlung, Dauer mind. 50
Min. `,e.exports.jsx(n.a,{href:"https://www.bptk.de/wp-content/uploads/2020/04/GOP-Infotabelle_Stand-2020.pdf",children:`[quelle abgerufen am
20.01.2022]`})]}),"."]}),e.exports.jsxs(n.p,{children:[`Bei anderen K\xE4ufen ist nicht auf den ersten Blick offensichtlich, das mit Zeit gehandelt
wird. `,e.exports.jsx(n.em,{children:"Pizza 8\u20AC."})]}),e.exports.jsx(n.p,{children:`Hier steht zwar auf der einen Seite ein Geldbetrag, auf der anderen Seite
jedoch ein greifbares, physisches (und in diesem Fall essbares) Produkt.
Die physisch existente Pizza k\xF6nnten wir jetzt jedoch gedanklich in die Ressourcen zerlegen, die es brauchte, um sie
Herzustellen:
Die Arbeitszeit, die die Pizzab\xE4cker*in gebraucht hat, und die Rohstoffe, z.B. das Mehl, die Hefe, die Tomaten, den
K\xE4se, etc.`}),e.exports.jsxs(n.p,{children:[`Diese Rohstoffe k\xF6nnen wir jetzt wieder zerlegen in die Arbeitszeit, die es gebraucht
hat, sie herzustellen und weitere Rohstoffe (z.B. Weizen f\xFCr die Mehlherstellung oder D\xFCnger und
Wasser f\xFCr das Ziehen von Tomaten). Auch f\xFCr die Herstellung dieser Rohstoffe musste Zeit aufgewendet
werden.`,e.exports.jsxs(d,{children:[`
An dieser Stelle muss angemerkt werden, dass nicht `,e.exports.jsx(n.em,{children:"alle"})," Wertsch\xF6pfung ",e.exports.jsx(n.em,{children:"allein"}),` auf das
aufwenden und Verkaufen von zeit zur\xFCckgef\xFChrt werden kann. So wird z.B. f\xFCr das z\xFCchten von
Tomaten zus\xE4tzlich die Fl\xE4che ben\xF6tigt, auf der die Pflanzen wachsen. Diese Fl\xE4che kann nicht sinnvoll in Zeitaufwand
umgerechnet werden und soll deshalb f\xFCr den Zweck diesse Textes ignoriert werden.`]})]})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Der wert der Zeit"}),e.exports.jsxs(n.p,{children:[`Was an Preisen f\xFCr Dienstleistungen deutlich wird, jedoch auch f\xFCr andere Waren gilt, ist, dass nicht alle Zeit gleich
viel wert ist.
`,e.exports.jsx(n.em,{children:"Haare schneiden 20\u20AC. Therapiestunde 100\u20AC."})]}),e.exports.jsx(n.p,{children:`Oft ist uns die unterschiedliche Verg\xFCtung unterschiedlicher T\xE4tigkeiten zwar prinzipiell klar, jedoch trotzdem
schlecht greifbar. Dies hat verschiedene Gr\xFCnde.`}),e.exports.jsxs(n.p,{children:[`Gehalt wird oft in schlecht greifbaren Einheiten angegeben.
`,e.exports.jsx(n.em,{children:"36.588 Euro Pro Jahr."}),e.exports.jsxs(d,{children:["Durchschnittliches Einkommen von Arbeitnehmer:innen in Deutschland ",e.exports.jsx(n.a,{href:"https://www.dgb.de/themen/++co++6ca263de-fb0e-11e9-bdcf-52540088cada#wiehoch2021",children:`[quelle abgerufen
am
20.01.2022]`})]})]}),e.exports.jsx(n.p,{children:`Diese Zahl verwendet so unglaublich gro\xDFe Einheiten f\xFCr Zeit und Geld, dass es schwer f\xE4llt, sich darunter etwas
vorzustellen.`}),e.exports.jsxs(n.p,{children:[`Was k\xF6nnte man alles in einem Jahr machen? Ein Haus bauen, ein Buch schreiben, Nach Spanien mit dem Fahrrad fahren,
etc.
Was k\xF6nnte man alles mit 36.588\u20AC machen? \xFCber `,e.exports.jsx(n.em,{children:"Zw\xF6lftausend"})," Laibe Brot kaufen",e.exports.jsx(d,{children:`bei einem Preis von 3\u20AC pro
Laib`}),`,
mehr als 1200 mal zum Fris\xF6r gehen`,e.exports.jsx(d,{children:"Bei einem Preis von 20\u20AC pro Haarschnitt"}),", etc."]}),e.exports.jsxs(n.p,{children:[`Was die Sache noch schwieriger macht, ist die Tatsache, das nicht gerne \xFCber Geh\xE4lter geredet wird.
`,e.exports.jsx(n.em,{children:"\xDCber Geld redet man nicht."})]}),e.exports.jsx(n.p,{children:`Durch diese Strukturen kann ungleiche Bezahlung aufrechterhalten werden, ohne das diese stark auff\xE4lt und
Ver\xE4nderungswille entsteht.`})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Vergleichswerte: Wer verdient wie viel?"}),e.exports.jsxs(n.p,{children:[`Um ein bisschen Licht in dieses Dunkel zu bringen ist es hilfreich Vergleichswerte einzuholen und diese in greifbare
Einheiten umzurechnen.`,e.exports.jsx(d,{children:`Der Einfachheit halber werden wir nachfolgend Brutto-Einkommen (also vor
Steuerabgaben) betrachten.
Steuern sind nat\xFCrlich ein wichtiger Faktor beim Einkommen, allerdings oft schwer abzusch\xE4tzen und (international) zu
vergleichen.`})]}),e.exports.jsx(n.p,{children:`Zuerst ist es nun hilfreich dein Einkommen zu Wissen. Du kannst der Einfachheit halber dein Gehalt entweder
als Stundenlohn, als Jahres- oder als Monatseinkommen eingeben.`}),e.exports.jsx(A,{wage:t.wage,setWage:t.setWage}),e.exports.jsxs(n.p,{children:["Der ",e.exports.jsx(n.strong,{children:"Mindestlohn in Deutschland betr\xE4gt 9.82\u20AC/h"})," pro Stunde",e.exports.jsxs(d,{children:[`Stand 01.01.2022.
`,e.exports.jsx(n.a,{href:"https://www.dgb.de/themen/++co++6ca263de-fb0e-11e9-bdcf-52540088cada#wiehoch2021",children:`[quelle abgerufen am
20.01.2022]`})]})]}),e.exports.jsxs(n.p,{children:["Die das ",e.exports.jsx(n.strong,{children:"durchschnittliche Einkommen von Arbeitnehmer:innen"})," in Deutschland liegt bei 3.049\u20AC pro Monat",e.exports.jsxs(d,{children:[`Stand
2021.
`,e.exports.jsx(n.a,{href:"https://www.dgb.de/themen/++co++37f4eb9a-5bc3-11eb-ac48-001a4a160123",children:"[quelle abgerufen am 20.01.2022]"})]}),`,
was einem Stundenlohn von `,e.exports.jsx("code",{children:`(3.049 \u20AC/Monat) /
(21 Arbeitstage/Monat`}),e.exports.jsx(d,{children:e.exports.jsx(n.a,{href:"https://www.arbeitsrechte.de/arbeitstage-pro-monat/",children:`[quelle abgerufen am
20.01.2022]`})}),e.exports.jsxs("code",{children:[`
) / (8h Stunden/Tag) = `,e.exports.jsx(n.strong,{children:"18.15\u20AC/h"})]}),`
entspricht`]}),e.exports.jsxs(n.p,{children:[`Das Durchschnittsgehalt f\xFCr Professoren betr\xE4gt in Deutschland
6.500\u20AC/Monat`,e.exports.jsxs(d,{children:["Stand 2022 ",e.exports.jsx(n.a,{href:"https://www.academics.de/ratgeber/gehalt-professor-was-verdient-ein-professor",children:`[quelle abgerufen am
20.01.2022]`})]}),`
woraus sich ein Stundenlohn von `,e.exports.jsxs("code",{children:[`(3.049 \u20AC/Monat) / (21 Arbeitstage/Monat) / (8h Stunden/Tag) =
`,e.exports.jsx(n.strong,{children:"38.69\u20AC/h"})]})," ergibt."]}),e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"Elon Musk, der momentan reichte Mensch der Welt"}),", besitzt 264 ",e.exports.jsx(n.em,{children:"Milliarden"})," US-Dollar (231.5 ",e.exports.jsx(n.em,{children:"Milliarden"}),`
Euro).`,e.exports.jsxs(d,{children:[`
Stand 14.01.2022 `,e.exports.jsx(n.a,{href:"https://de.statista.com/statistik/daten/studie/181482/umfrage/liste-der-top-25-milliardaere-weltweit/",children:`[quelle abgerufen am
20.01.2022]`})]}),`
Elon Musk ist 50 Jahre alt. Selbst wenn wir (unrealistischerweise Weise) annehmen, dass Elon Musk seit seinem 16.
Geburtstag
ohne Urlaub oder sonstigen Pausen 80 Stunden pro Woche gearbeitet hat, ergeben sich
`,e.exports.jsx("code",{children:"(50 Jahre - 16 Jahre) * 52 Wochen/Jahr * 80 Stunden/Woche = 141440 Arbeitsstunden"}),`, die Musk maximal in
seinem leben geleistet
haben kann. Hierraus ergibt sich ein Stundenlohn von `,e.exports.jsxs("code",{children:["231.5 ",e.exports.jsx(n.em,{children:"Milliarden"})," \u20AC / 141440h = ",e.exports.jsx(n.strong,{children:`1.6 Millionen
\u20AC/h`})]}),e.exports.jsx(d,{children:`Nat\xFCrlich ist dieser Stundenlohn komplett unrealistisch, dies soll allerdings f\xFCr die Zwecke
dieses Essays ignoriert werden.
Oder wollte etwa jemand behaupten, dass Musk sich sein Geld nicht im Schwei\xDFe seines Angesichts erarbeitet habe?`})]}),e.exports.jsxs(n.p,{children:["Der ",e.exports.jsx(n.strong,{children:"Mindestlohn f\xFCr N\xE4her:innen in Bangladesch"})," betr\xE4gt umgerechnet ca. 95USD / Monat (ca. 83.31\u20AC) ",e.exports.jsxs(d,{children:[`Stand
2018 `,e.exports.jsx(n.a,{href:"https://fashionunited.ch/nachrichten/business/bangladesch-mindestlohn-fuer-bekleidungsarbeiter-wird-auf-95-us-dollar-erhoeht/2018091715842",children:`[Quelle abgerufen am
20.01.2022]`})]}),`
Da zuverl\xE4ssige Informationen \xFCber die tats\xE4chlichen Arbeitszeit schwierig zu bekommen sind nehmen wir Optimistische
12-Stunden-Schichten bei einer 6-Tage-Woche an. Hierraus ergiebt sich ein Stundenlohn von `,e.exports.jsxs("code",{children:[`
(83.31 \u20AC/Monat) / (4 Wochen/Monat) / (6 Tage/Woche) / (12 h/Tag) = `,e.exports.jsx(n.strong,{children:"0.29\u20AC/h"})]}),`
.`,e.exports.jsx(d,{children:"Ob dieser Mindestlohn eingehalten wird, steht auf einer anderen Seite."})]})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Die Zeit eines Euros"}),e.exports.jsx(n.p,{children:`Greifbarer ist es, sich Gehalt auf kleineren Skalen zu verdeutlichen und zu vergleichen. Wie lange dauert es 1\u20AC zu
verdienen?`}),e.exports.jsx(n.p,{children:"Machen wir hierzu ein Gedankenexperiment: Wie lange dauert es f\xFCr verschiedene Menschen, einen Euro zu verdienen?"}),e.exports.jsx(T,{wage:t.wage,target:1}),e.exports.jsx(n.p,{children:'Wir sehen also, das es je nach einkommen unterschiedlich lange dauert, einen Geldbetrag zu "erarbeiten".'})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Schnelle und Langsame Zeit"}),e.exports.jsx(n.p,{children:`Was passiert, wenn du das Geld, das du verdienst wiederum nutzt, um die Zeit einer anderen Person zu kaufen?
Wenn du viel Geld pro Stunde verdient, und mit diesem Geld die Zeit einer anderen Person
zu einem g\xFCnstigeren Preis einkauft? Du hast mehr Zeit als vorher.
Hierdurch wird es reichen Menschen erm\xF6glicht, mehr Zeit zu "verbrauchen", als sie lebenszeit haben.
Auf der anderen Seite haben die Person, die ihre Zeit billing verkaufen m\xFCssen muss weniger Zeit.`}),e.exports.jsxs(n.p,{children:[`Um dies zu Veranschaulichen k\xF6nnen wir folgendes Gedankenexperiment durchf\xFChren:
W\xFCrdest du mit einem Stundenlohn von `,t.wage.toFixed(2),`\u20AC die Zeit von Elon Musk kaufen wollen, (z.B. damit er dir
die Haare
schneidet)
m\xFCsstest du pro Minute, die du von ihm einkaufst `,(u["Elon Musk"]/t.wage/60/8).toFixed(0)," ",e.exports.jsx(n.em,{children:"Tage"}),`
Arbeiten. Kaufst du jedoch Zeit in Form eines T-shirts, welches
in Bangladesh hergestellt wurde, musst du nur
nur `,(u["N\xE4her:innen in Bangladesch"]/t.wage*60*60).toFixed(1)," ",e.exports.jsx(n.em,{children:"Sekunden"}),` Arbeiten, um eine Stunde
Arbeitszeit der N\xE4her:innen zu kaufen.`,e.exports.jsx(d,{children:`
An dieser Stelle werden alle Zwischenh\xE4ndler und Materialien, auf die im Falle eines T-Shirts aufgrund des geringen
Stundenlohnes der N\xE4her:innen das meiste Geld entf\xE4llt, ignoriert`})]}),e.exports.jsxs(n.p,{children:[`Veranschaulichen wir diesen Zusammenhang nun mithilfe der unten stehenden Uhren:
Die zur angeklickten Uhr zugeh\xF6rige Person verkauft ihre Zeit. Diese Uhr l\xE4uft
mit der normalen Geschwindigkeit `,e.exports.jsx("code",{children:"1s \u2259 1s"}),`. Die anderen Uhren bewegen
sich jetzt so Viel langsamer / schneller, das die angeklickte Person ihre Zeit mit kaufen k\xF6nnte,
so dass sie genau das Geld ausgibt, was sie durch das Verkaufen ihrer Zeit einnimmt.`]}),e.exports.jsx(n.p,{children:'// TODO: experiment mit unterschiedlich schnell laufenden uhren. "Referenzzeit.'})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Zeit von Vielen Menschen"}),e.exports.jsxs(n.p,{children:[`Wie wir gesehen haben, k\xF6nnen reiche Menschen mit dem Geld was sie in einer Stunde verdienen viele Stunden Arbeitszeit
von armen Menschen kaufen.
Jedoch kann ein armer Mensch nicht so viel arbeiten, als das er damit all das Geld was ein reicher Mensch verdient
bekommen k\xF6nnte.
`,e.exports.jsx(n.em,{children:`In echt kann sich die Uhr armenr Menschen nicht schneller bewegen. Es ist unm\xF6glich mehr zu Arbeiten als Zeit
vorhanden ist`})]}),e.exports.jsx(n.p,{children:`Somit ist die einzige M\xF6glichkeit F\xFCr einen reichen Menschen sein Geld f\xFCr die Zeit armer Menschen auszugeben, diese
von mehreren Menschen zu kaufen.
Ein einziger Mensch kann so \xFCber die Zeit vieler Menschen verf\xFCgen.`}),e.exports.jsx(n.p,{children:"// TODO: experiment mit anzahl von Personen Kaufen"})]}),`
`,e.exports.jsxs("section",{children:[e.exports.jsx(n.h2,{children:"Fazit"}),e.exports.jsxs(n.p,{children:[`Menschen verdienen in unserem Kapitalistischen System sehr unterschiedlich viel Geld. Dies f\xFChrt nicht nur zu einer
ungleichen verteilung der materiellen G\xFCter (was offensichtlich ist) sondern aucuh zu einer ungleichen verteilung
der Zeit. Reiche menschen k\xF6nnen mit ihrem Geld die Zeit sehr vieler armer Menschen kaufen. Elon Musk ist `,e.exports.jsx(n.em,{children:"absurd"})," Reich."]}),e.exports.jsxs(n.p,{children:[`H\xE4ttest du in der Zeit, in der du dich mit diesem Essay besch\xE4ftigt hast gearbeitet, h\xE4ttest
du `,(t.time/60/60*t.wage).toFixed(2),"\u20AC verdient."]}),e.exports.jsxs(n.ul,{children:[`
`,e.exports.jsx(n.li,{children:'Dieses Essay ist 2022 im Rahmen des zweiw\xF6chigen "New Media" Basisklassen-Workshops bei Rosa Menkman und Joel Baumann entstanden. *'}),`
`]})]})]})}}window.addEventListener("DOMContentLoaded",()=>{W.render(s.createElement(O,null),document.getElementById("root"))});function O(){const t=j(),[r,i]=h.exports.useState(9.82);return s.createElement(y,null,s.createElement(B,{time:t,wage:r,setWage:i}))}
