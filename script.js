function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER
      let titreContainer = document.getElementById('nom-journal')
      console.log(titreContainer);

      let titrePrincipale = journal.magTitle
      console.log(titrePrincipale);

      titreContainer.insertAdjacentHTML("beforeend", titrePrincipale);

      let subtitleContainer = document.getElementById('phrase-accroche')
      console.log(subtitleContainer);

      let subtitle = journal.hook
      console.log(subtitle);


      subtitleContainer.insertAdjacentHTML("beforeend", subtitle);

      // TODO 2: REMPLIR LA NAVIGATION
      let themeNav = document.getElementById('themes-nav')



journal.topics.forEach((topic) => {
  let nav= `<div class = container>
  <div class= nav-theme-btn >
<p class = nav-theme-btn:hover  >${topic.title}${topic.icon}</p>
</div>
</div>
  `
    themeNav.insertAdjacentHTML("beforeend", nav);
});
 


      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL
      let articlesPrincipale = document.getElementById('article-principal')
      let principal = `<div class= container-full>

 <img src= "${journal.cover.imageHero}" id=hero-image  >
 <h3 id = hero-description>${journal.cover.headline}</h3>
 <h2 >${journal.cover.body}</h2>
 <p id = hero-description>${journal.cover.summary}</p>
 <p id = hero-auteur> Par ${journal.cover.author} ; ${journal.cover.date}</p>
 <p class= read-article-btn>${journal.cta.text}</p>
 

 </div>`
      articlesPrincipale.insertAdjacentHTML("beforebegin", principal)

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
      let article=document.getElementById('articles-grid')
      
journal.stories.forEach(histoire => {
  let carte=`<div class =articles-section>
  <div class = container>
  <div class = article-card>
  <div class = article-content>
  <h3 class = article-content h3>${histoire.headline}</h3>
    <img src = "${histoire.image}" class = article-card img>
  <p class = article-content p >${histoire.summary}</p>
  <p class = article-content p >${histoire.body}</p>
  <p class = article-author >Par ${histoire.author}.${histoire.date}</p>
  
   <p class= read-article-btn>${journal.cta.text}</p>
   

  </div>
  
  </div>
  </div>
  </div>`

article.insertAdjacentHTML("beforeend",carte)

});


      // TODO 5: REMPLIR LES THEMES

let themes=document.getElementById('themes-list')

journal.topics.forEach(element => {
  
  let petiteCarte=`<div class = themes-section>

<div class = theme-item>
<p class = theme-icon>${element.icon} </p>
<h3 class= >${element.title}</h3>
<p class = >${element.description}</p>
</div>
</div>
</div>`

themes.insertAdjacentHTML("beforeend",petiteCarte)
});


      // TODO 6: REMPLIR LES AUTEURS
      let auteur=document.getElementById('authors-list')
      journal.contributors.forEach(element => {
        let carteAuteur=`<div class = authors-section>
       <div class = container >
        <div class = author-card>
     <img src = "${element.image}" class = author-image >
     <h3 class = author-card h3 >${element.firstName}</h3>
       <p>${element.expertise} </p>
        <p ="${element.bio} " class = author-bio ></p>
        <a href class= author-socials a>${element.email}</a>
        </div>
        </div>
        </div>
      `
      auteur.insertAdjacentHTML("beforeend",carteAuteur)
      });

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION
   let boutton=document.getElementById('call-to-action')
   console.log(boutton);
   
      let btn=`<div class= container>
      <p> Rejoins nous vite!!!</p>
      <p class= cta-button>${journal.cta.label}</p>
      </div>`
           boutton.insertAdjacentHTML("beforeend",btn)

      /// FIN DU CODE
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();

// BONUS:
// Alert quand on appuie sur le bouton CTA
// Lorsque l'évènement mouseover est déclenché, exécuter maFonction
 let alert = document.getElementById("call-to-action").click();
function maFonction() {
  if ("call-to-action".click) {
  alert(fdc)
  alert.insertAdjacentHTML("beforeend",)
}
}
maFonction()

// Fonction de filtrage par thème
// Classer les articles par popularité ou notation

