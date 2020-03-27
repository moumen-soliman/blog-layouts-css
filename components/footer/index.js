class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <p>
                Here is footer
            </p>
        </footer>`;
    }
  }
      
  customElements.define('main-footer', Footer);