class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="main-header">
            <div class="item-container">
                <div class="item">
                    <a href="#">Subscribe</a>
                </div>
                <div class="item">
                    <h1>
                        Udacity Blog
                    </h1>
                </div>
                <div class="item">
                    <a href="#">Search</a>
                </div>
            </div>
        </header>`;
    }
  }
      
  customElements.define('main-navbar', Navbar);