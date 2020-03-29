class BlogItem extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="blog-content-item">
            <div class="blog-content-item--info">
                <figure>
                  <img src="https://www.slideteam.net/media/catalog/product/cache/960x720/e/m/employe_value_proposition_powerpoint_presentation_slide_template_Slide01.jpg" alt="Blog Image" style="width:100px">
                  <figcaption>Blog Image</figcaption>
                </figure>
                <span class="tag">World</span>
                <h3>Example Blog Post</h3>
                <span class="date">Nov 12</span>
                <p>This card represent example blog post</p>
            </div>
            <br />
            <button onclick="location.href = 'blog-post.html'">
              Continue Reading
            </button>
        </div>`;
    }
  }
      
  customElements.define('blog-item', BlogItem);