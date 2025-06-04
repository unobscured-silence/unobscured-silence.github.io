document.addEventListener("DOMContentLoaded", function () {
  const postSlug = document.querySelector('input[name="post"]').value;
  const commentsList = document.getElementById("comments-list");

  fetch("/comments/comments.json")
    .then(response => response.json())
    .then(data => {
      const filtered = data.filter(comment => comment.post === postSlug);
      filtered.forEach(comment => {
        const div = document.createElement("div");
        div.className = "comment";
        div.innerHTML = `
          <div class="avatar">
            <div class="initial">${comment.name[0]}</div>
          </div>
          <div class="comment-body">
            <div class="comment-header">
              <strong>${comment.name}</strong>
              <span class="meta">${comment.date}</span>
            </div>
            <p>${comment.message}</p>
          </div>
        `;
        commentsList.appendChild(div);
      });
    });
});
