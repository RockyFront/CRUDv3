const BASE_URL = "https://62a21c77cc8c0118ef5d2e28.mockapi.io/users";
const [id, status] = (() => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const btn = document.getElementById("action");
  if (params.status === "edit") {
    btn.innerHTML = "Edit";
  } else btn.innerHTML = "Add";
  return [params.id, params.status];
})();

const getData = async (url) => {
  const res = await fetch(`${url}/${id}`);
  return await res.json();
};

//////////////////////
// let data = await getData();
//////////////////////

const formTable = document.forms[0];
async function manipulateData() {
  const formInputs = Object.fromEntries(new FormData(formTable).entries());
  if (status === "edit") {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInputs),
      });
      Toastify({
        text: "edit successful",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } catch (e) {
      Toastify({
        text: "edit failed",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, crimson, #FF91A4)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  } else {
    try {
      await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInputs),
      });
      Toastify({
        text: "edit successful",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } catch (e) {
      Toastify({
        text: "edit failed",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, crimson, #FF91A4)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  }
}

document.getElementById("action").addEventListener("click", manipulateData);
