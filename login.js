const urlBackend = "https://weatherapp-backend-six-phi.vercel.app";

document.querySelector("#register").addEventListener("click", function () {
  fetch(`${urlBackend}/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.querySelector("#registerName").value,
      email: document.querySelector("#registerEmail").value,
      password: document.querySelector("#registerPassword").value,
    }),
  })
    .then((response) => response.json())
    .then((apiData) => {
      if (apiData.result) {
        console.log(true);
        // Navigate to the Location.reload article
        window.location.assign("./index.html");
      } else {
        console.log(apiData.error);
      }
    });
});

document.querySelector("#connection").addEventListener("click", function () {
  fetch(`${urlBackend}/users/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.querySelector("#connectionEmail").value,
      password: document.querySelector("#connectionPassword").value,
    }),
  })
    .then((response) => response.json())
    .then((apiData) => {
      if (apiData.result) {
        console.log(true);
        // Navigate to the Location.reload article
        window.location.assign("./index.html");
      } else {
        console.log(apiData.error);
      }
    });
});
