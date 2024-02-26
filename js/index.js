"use strict";

const elMainDiv = document.querySelector(".maindiv");
const elHeader = document.querySelector("header");
const elList = document.querySelector(".list");
const elSelect = document.querySelector("#category");
const elListBookmark = document.querySelector(".bookmark-list");

const createTitleInfo = () => {
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

  elHeader.append(newTitle, newInfo);
};

const createMovieElement = (film) => {
  const newLi = document.createElement("li");
  const newImg = document.createElement("img");
  const newDiv = document.createElement("div");
  const movieTitle = document.createElement("p");

  movieTitle.textContent = film.title;
  newDiv.append(movieTitle);

  film.genres.map((genre) => {
    const newLi2 = document.createElement("li");
    newLi2.textContent = genre;
    newLi2.setAttribute("class", "list-disc ml-[15px]");
    return newLi2;
  }).forEach((liElement) => {
    newDiv.append(liElement);
  });
  
  const newBtn = document.createElement("button");
  newBtn.textContent = `Bookmark`;

  newImg.setAttribute("src", film.poster);
  newLi.setAttribute("class", "w-[305px] bg-[#fff] rounded-md");
  newDiv.setAttribute("class", "p-3");
  newBtn.setAttribute(
    "class",
    "bg-[#0C6DFD] mt-[10px] ml-[10px] mb-[10px] text-[#fff] p-2 rounded-md"
  );
  movieTitle.setAttribute("class", "text-[20px] mb-[10px] font-medium");

  newLi.append(newImg, newDiv, newBtn);
  elList.append(newLi);

  newBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createBookmarkElement(film);
  });

  return newLi;
};

const createBookmarkElement = (film) => {
  const bookmarkTitle = document.createElement('p');
  const bookmarkDiv = document.createElement('div');
  const bookmarkRemoveBtn = document.createElement('button');

  bookmarkTitle.textContent = `Movie: ${film.title}`;
  bookmarkRemoveBtn.textContent = 'Remove';

  bookmarkDiv.setAttribute('class', 'bg-[white] mb-[10px] mr-[10px] rounded-md p-3 border w-[25rem]');
  bookmarkRemoveBtn.setAttribute('class', 'text-[1.2rem] p-2 bg-[red] rounded-md text-[white] mt-[10px]');
  bookmarkTitle.setAttribute('class', 'font-bold text-[1.2rem]');

  elListBookmark.append(bookmarkDiv);
  bookmarkDiv.append(bookmarkTitle, bookmarkRemoveBtn);
};

const filterSelect = (e) => {
  e.preventDefault();
  const selectedGenre = elSelect.value;

  if (selectedGenre) {
    const selectGenre = films.filter((movie) => movie.genres.includes(selectedGenre));

    if (selectGenre.length > 0) {
      elList.innerHTML = "";
      selectGenre.forEach((movie) => {
        createMovieElement(movie);
      });

      localStorage.setItem('selectedGenre', selectedGenre);
    }
  }
};

const filterGenre = (selectedGenre) => {
  if (selectedGenre) {
    const selectGenre = films.filter((movie) => movie.genres.includes(selectedGenre));

    if (selectGenre.length > 0) {
      elList.innerHTML = "";
      selectGenre.forEach((movie) => {
        createMovieElement(movie);
      });

      localStorage.setItem('selectedGenre', selectedGenre);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const savedGenre = localStorage.getItem('selectedGenre');
  if (savedGenre) {
    elSelect.value = savedGenre;
    filterGenre(savedGenre);
  }
});

const filterSubmit = (e) => {
  e.preventDefault();
  const selectedGenre = elSelect.value;
  filterGenre(selectedGenre);
};

document.querySelector("#filter-form").addEventListener("submit", filterSubmit);

// Initial setup
createTitleInfo();
const filmElements = films.map(createMovieElement);

