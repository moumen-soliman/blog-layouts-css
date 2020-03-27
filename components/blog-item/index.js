class BlogItem extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="blog-content-item">
            <div class="blog-content-item--info">
                <span class="tag">World</span>
                <h3>Example Blog Post</h3>
                <span class="date">Nov 12</span>
                <p>This card represent example blog post</p>
            </div>
            <a href="blog-post.html">Continue Reading</a>
        </div>`;
    }
  }
      
  customElements.define('blog-item', BlogItem);