

let posts = {
    1: {
        id: 1,
        title: "hi",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio rerum voluptas saepe quas suscipit perspiciatis magni vel pariatur deleniti inventore, possimus quibusdam accusantium tempora dignissimos aliquam ratione labore ex? Officiis.",
        date: "15/08/2021"
    },
    2:{
      id: 2,
      title: "hi",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio rerum voluptas saepe quas suscipit perspiciatis magni vel pariatur deleniti inventore, possimus quibusdam accusantium tempora dignissimos aliquam ratione labore ex? Officiis.",
      date: "15/08/2021"
    },
    3: {
      id: 3,
      title: "hi",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio rerum voluptas saepe quas suscipit perspiciatis magni vel pariatur deleniti inventore, possimus quibusdam accusantium tempora dignissimos aliquam ratione labore ex? Officiis.",
      date: "15/08/2021"
  },
}


function renderBlogPost(object){
  let card = `<article id="${object.id}" class="row">
  <div class="col">
    <div class="card">
      <h5 class="card-header">${object.title}</h5>
      <div class="card-body">
        <p>${object.content}</p>
      </div>
      <div class="card-footer text-start">
      <p class="text-muted">date posted: ${object.date}</p>
    </div>
    </div>
  </div>
  </article>`
  document.querySelector("#spaceForPosts").innerHTML += card
};
for (let key in posts){
  renderBlogPost(posts[key])
}