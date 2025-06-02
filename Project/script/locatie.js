export function renderLocatiePage() {
  const pageContent = document.getElementById("page-content");

  pageContent.innerHTML = "";

  const locatieSection = document.createElement("div");

  locatieSection.className = "location-section text-center";

  const title = document.createElement("h2");

  title.textContent = "Unde ne găsești:";

  title.className = "text-center my-4";

  locatieSection.appendChild(title);

  const descriereLocatie = document.createElement("p");

  descriereLocatie.textContent =
    "Se află în Beliș, Jud. Cluj, la ieșire spre Lacul Fântânele,la 26 km de centrul localității, într-o zonă exclusivă cu pensiuni și cabane.";

  locatieSection.appendChild(descriereLocatie);

  const oferteTitle = document.createElement("h2"); // Am schimbat din

  oferteTitle.textContent = "Oferim:";

  oferteTitle.className = "text-center my-4 mt-3";
  locatieSection.appendChild(oferteTitle);

  const descriereFacilitati = document.createElement("p");

  descriereFacilitati.textContent =
    "Dispune de 5 camere, toate cu paturi matrimoniale foarte mari, tv și balcoane, două băi, bucătărie complet utilată ( cuptor electric, aragaz, frigider, cuptor cu microunde, prăjitor de pâine, expresor de cafea, ceainic, veselă completă etc. ) și living de 36mp, terasă mare, curte, foișor cu masă și bănci, grătar, ceaune, disc, hamace, balansoare, trambulină, groapă de nisip pentru copii, Wi fi etc. Încălzire cu centrală pe lemne. Ideală pentru 10 persoane adulți + copii. Se asigură patuț suplimentar de copii. Ciubărul cu apă caldă se achită separat, minim două zile. Se acceptă plata on-line, se eliberează factură și bon fiscal. Nu acceptăm animale de companie în interiorul cabanei. ( doar în camera tehnică). Nu se fumează în interiorul cabanei, aceasta fiind prevăzută cu senzori de fum. Se acordă reducere la fiecare grup care a mai fost cazat cel puțin odată. Ne rezervăm dreptul de a ne selecta clienții, nu acceptăm persoane dificile. Vă așteptăm cu drag!";

  locatieSection.appendChild(descriereFacilitati);

  const adresa = document.createElement("p");

  adresa.textContent = "Strada Principală nr. 1, Beliș, județul Cluj, România";

  locatieSection.appendChild(adresa);

  const mapIframe = document.createElement("iframe");

  mapIframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.2530892612235!2d23.043415076681935!3d46.681005651434184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4748e149022001bd%3A0xe18e96d5ce46446a!2sCabana%20Balada!5e0!3m2!1sro!2sro!4v1747825058569!5m2!1sro!2sro";

  mapIframe.width = "100%";

  mapIframe.height = "250";

  mapIframe.style.border = "0";

  mapIframe.allowFullscreen = true;

  mapIframe.loading = "lazy";

  mapIframe.referrerPolicy = "no-referrer-when-downgrade";

  locatieSection.appendChild(mapIframe);

  pageContent.appendChild(locatieSection);
}
