import "./styles.css";

let dogData = [
  {
    breed: "Akita",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://dog.ceo/api/breed/akita/images/random",
    imgUrl: ""
  },
  {
    breed: "Beagle",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://dog.ceo/api/breed/beagle/images/random",
    imgUrl: ""
  },
  {
    breed: "Maltese",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://dog.ceo/api/breed/maltese/images/random",
    imgUrl: ""
  },
  {
    breed: "Shiba",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://dog.ceo/api/breed/shiba/images/random",
    imgUrl: ""
  },
  {
    breed: "Tervuren",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://dog.ceo/api/breed/tervuren/images/random",
    imgUrl: ""
  }
];

const getImgUrl = async (url) => {
  const res = await fetch(url, {
    method: "GET"
  });
  if (!res.ok) {
    return;
  }
  const imgUrlJSON = await res.json();
  const imgUrl = imgUrlJSON.message;
  return imgUrl;
};

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

async function initializeCode() {
  const container = document.getElementById("container");
  const template = document.getElementById("template");
  let content = template.content;

  for (let i = 0; i < 5; i++) {
    dogData[i].imgUrl = await getImgUrl(dogData[i].url);
  }

  for (let i = 0; i < 5; i++) {
    content.querySelector("h1").textContent = dogData[i].breed;
    content.querySelector("p").textContent = dogData[i].info;
    content.querySelector("img").src = dogData[i].imgUrl;

    container.appendChild(content.cloneNode(true));
  }
}
