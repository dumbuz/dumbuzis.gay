const templatenav = document.createElement('template');
templatenav.innerHTML = `
<header>
  <link type="text/css" rel="stylesheet" href="media/css/ss.css" />
  <a href="index.html" class="nav-logo-link"
  ><img
      title="Home"
      class="nav-logo"
      src="media/images/signature.svg"
      /></a
  ><input type="checkbox" class="nav-toggle" id="nav-toggle" />
  <nav class="navBar">
    <ul>
      <li>
        <a
          title="Pronouns. Self-explanatory"
          href="pronouns.html"
          >Pronouns</a
        >
      </li>
      <li>
        <a
          title="See other things I've made"
          href="entertainment.html"
          >Entertainment</a
        >
      </li>
      <li>
        <a
          title="Currently links to my Carrd. A page of pages where you can contact me. Migrating to the site soon."
          href="https://dumbuz.carrd.co/#social"
          >Contact</a
        >
      </li>
      <li>
        <a
          title="See other pages on this website"
          href="sitemap.html"
          >Site map
        </a>
      </li>
    </ul>
  </nav>
  <label for="nav-toggle" class="nav-toggle-label"><span></span></label>
</header>
`

class Navbar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templatenav.content.cloneNode(true));
    }
}
window.customElements.define('nav-bar', Navbar)


const templatefoot = document.createElement('template');
templatefoot.innerHTML = `
<link type="text/css" rel="stylesheet" href="media/css/ss.css">
<footer>
<p>I hope you enjoyed your time on my site!<nav><i><a href="https://github.com/dumbuz/dumbuzis.gay/commits/main" title="Click to see changelog">Changelog</a></i></nav></p>
</footer>
`

class Footbar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templatefoot.content.cloneNode(true));
    }
}
window.customElements.define('foot-bar', Footbar)
