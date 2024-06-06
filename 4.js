// 4

// Create list on user's names in html document. By click on name display alert 'Hello, {name}'

document.addEventListener("DOMContentLoaded", function () {
  const userList = document.getElementById("userList");

  userList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const userName = event.target.textContent;
      alert(`Hello, ${userName}`);
    }
  });
});
