class Cardnews extends HTMLElement {
   constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles());
   }

   build() {
      const componentRoot = document.createElement("div");
      componentRoot.setAttribute("class", "card");
      const cardLeft = document.createElement("div");
      cardLeft.setAttribute("class", "card__left");

      const autor = document.createElement("span");
      autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
      const linkTitle = document.createElement("a");
      linkTitle.textContent = this.getAttribute("Title");
      linkTitle.href = this.getAttribute("link-url");
      const newsContent = document.createElement("p");
      newsContent.textContent = this.getAttribute("content");

      cardLeft.appendChild(autor);
      cardLeft.appendChild(linkTitle);
      cardLeft.appendChild(newsContent);

      const cardRight = document.createElement("div");
      cardRight.setAttribute("class", "card__right");
      const newsImage = document.createElement("img");
      newsImage.src = this.getAttribute("Photo") || "assent/foto-default.png";
      newsImage.alt = "Foto da Noticia";
      cardRight.appendChild(newsImage);

      componentRoot.appendChild(cardLeft);
      componentRoot.appendChild(cardRight);

      return componentRoot;
   }

   styles() {
      const style = document.createElement("style");
      style.textContent = `
     .card{
    width: 80%;
    box-shadow: 10px 5px 10px 2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 5px 10px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 5px 10px 2px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card__left .card__right{
    border: 1px solid blue;
}
.card__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}
.card__left > span{
    font-weight: 400;
}

.card__left > a{
margin-top: 15px;
font-size: 25px;
color: black;
text-decoration: none;
font-weight: bold;
}
.card__left > p{
color:rgb(70,70 ,70 );
}

img{
    width: 100%;
  height: 100%;
}
     
     `;

      return style;
   }
}

customElements.define("card-news", Cardnews);
