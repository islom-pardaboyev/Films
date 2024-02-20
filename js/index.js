"use strick";
const elMainDiv = document.querySelector(".div");
const elHeader = document.querySelector(".header");
const elList = document.querySelector(".list");

const newTitle = document.createElement("h1");
const newInfo = document.createElement("p");

newTitle.setAttribute(
  "class",
  "text-[40px] rounded-md border-2 border-[#156C43] text-[#fff] mt-[20px] text-center p-4 bg-[#10CAF0]"
);
newInfo.setAttribute(
  "class",
  "text-[#156C43] bg-[#CEF4FC] rounded-md mt-[10px] mb-[20px] font-normal text-center p-3"
);

newTitle.textContent = "Movies Catalog";
newInfo.textContent = `Umumiy Kinolar soni: ${films.length}`;

for (let data of films) {
  const newLi = document.createElement("li");
  const newImg = document.createElement("img");
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("p");
  const newBtn = document.createElement("button");
  newTitle.textContent = data.title;

  newDiv.append(newTitle);

  for (let genre of data.genres) {
    const newLi2 = document.createElement("li");
    newLi2.textContent = genre;

    newLi2.setAttribute("class", "list-disc ml-[15px]");
    newDiv.append(newLi2, newBtn);
  }

  newBtn.textContent = `Bookmark`;

  newImg.setAttribute("src", `${data.poster}`);
  newLi.setAttribute("class", "w-[305px] bg-[#fff] rounded-md");
  newDiv.setAttribute("class", "p-3");
  newBtn.setAttribute(
    "class",
    "bg-[#0C6DFD] mt-[10px] text-[#fff] p-2 rounded-md"
  );
  newTitle.setAttribute("class", "text-[20px] mb-[10px] font-medium");
  elList.setAttribute("class", "flex flex-wrap gap-[4rem]");

  elList.append(newLi);
  newLi.append(newImg, newDiv);
}

elHeader.append(newTitle, newInfo);

const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");

const elSelect = document.querySelector(".genre-select");
const elBtn = document.querySelector(".filter-btn");

elBtn.addEventListener("click", () => {
  const selectedGenre = elSelect.value;
  if (selectedGenre) {
    const filteredMovies = films.filter((movie) =>
      movie.genres.includes(selectedGenre)
    );
    if (filteredMovies.length > 0) {
      filteredMovies.forEach((movie) => {
        console.log(movie.title);
      });
    }
  }
});
