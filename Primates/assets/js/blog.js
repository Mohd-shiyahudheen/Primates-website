const fetchBlog = () => {
  axios
    .get("http://localhost:4000/api/blogData")
    .then((response) => {
      const blog = response.data.data;
      console.log(blog);
      let data = "";
      for (const i in blog) {
        data += ` 
        <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100" id="data-output">
        <div class="post-item position-relative h-100">
   
          <div class="post-img position-relative overflow-hidden">
            <img src=${blog[i].image} class="img-fluid" alt="">
            <span class="post-date">December 12</span>
          </div>
   
          <div class="post-content d-flex flex-column">
   
            <h3 class="post-title">${blog[i].title}</h3>
   
            <div class="meta d-flex align-items-center">
              <div class="d-flex align-items-center">
                <i class="bi bi-person"></i> <span class="ps-2">${blog[i].author}</span>
              </div>
              <span class="px-3 text-black-50">/</span>
              <div class="d-flex align-items-center">
                <i class="bi bi-folder2"></i> <span class="ps-2">${blog[i].topic}</span>
              </div>
            </div>
   
            <hr>
   
            <a href="blog-details.html" class="readmore stretched-link">${blog[i].content}</a>
          </div>
        </div>
      </div>
      `;
       document.getElementById("cards-container").innerHTML = data;
      }
   
    })
    .catch((error) => console.error(error));
};

fetchBlog();
