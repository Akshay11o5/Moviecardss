cl = console.log;
const showMovieBtn = document.getElementById("showMovieBtn");
const backDrop = document.getElementById("backDrop");
const moviemodel = document.getElementById("moviemodel");
const closeToggle = [...document.querySelectorAll(".closeToggle")];
const movieForm = document.getElementById("movieForm");
const movieTitlecontrol = document.getElementById("movieTitle");
const movieURLcontrol = document.getElementById("movieURL");
const overviewcontrol = document.getElementById("overview");
const ratingcontrol = document.getElementById("rating");
const movieContainer = document.getElementById("movieContainer");
const sumbitbtn = document.getElementById("sumbitbtn");

let movieArr = [
  {
    movieTitle: "Everything Everywhere All At Once",
    imageUrl:
      "https://cdn-dkepej.nitrocdn.com/xHPizjaXJNONuYnLnfsGSUCsMnIlzOEq/assets/images/optimized/rev-ef469ea/blog.frame.io/wp-content/uploads/2022/04/B0443-featured-image-1-2048x1152.jpg",
    rating: 4.5,
    overview:
      "An exhausted Chinese American woman is swept up in an insane adventure, where she alone can save the world by exploring other universes connected with the lives she could have led.",
    movieId: "1",
  },
  {
    movieTitle: "The Batman",
    imageUrl:
      "https://m.media-amazon.com/images/I/71YITH5YtwL._AC_UF1000,1000_QL80_.jpg",
    rating: 4,
    overview:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing the serial killer known as the Riddler.",
    movieId: "2",
  },
];

uuid = () => {
  return String("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(
    /[xy]/g,
    (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;

      return value.toString(16);
    }
  );
};

const createMovieCards = (arr) => {
  let movieCardResult = "";
  arr.forEach((movie) => {
    movieCardResult += `
                        <div class="col-md-6 col-lg-3 mb-4 cardbg">
                            <div class="card" id=${movie.movieId}>
                                <div class="card-header cardbg">
                                    <h4 class="mb-0">${movie.movieTitle}</h4>
                                </div>
                                <div class="card-body cardbg">
                                    <figure class="movieCard">
                                        <img
                                        src="${movie.imageUrl}"
                                        alt="${movie.movieTitle}"
                                        title="${movie.movieTitle}"
                                        />
                                        <figcaption>
                                            <div class="movieTitle">
                                                <div class="row">
                                                    <div class="col-10">
                                                        <h4 class="m-0">
                                                            ${movie.movieTitle}
                                                        </h4>
                                                    </div>
                                                    <div class="col-2 rating text-center">
                                                        <span
                                                            class="${setClassRating(
                                                              movie.rating
                                                            )}">${movie.rating}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="movieOverview">
                                                <h4 class="mb-0">${
                                                  movie.movieTitle
                                                }</h4>
                                                <h4>
                                                    <em>Overview</em>
                                                </h4>
                                                <p class="m-0 mt-2">
                                                    ${movie.overview}
                                                </p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                               
                            </div>
                        </div>
                        `;
  });
  movieContainer.innerHTML = movieCardResult;
};
createMovieCards(movieArr);

const creeateele = (newMovieObj) => {
  let cardDiv = document.createElement("div");
  cardDiv.className = `col-md-6 col-lg-3 mb-4 cardbg`;
  cardDiv.innerHTML = `<div class="card" id=${newMovieObj.movieId}>
                                <div class="card-header cardbg">
                                    <h4 class="mb-0">${
                                      newMovieObj.movieTitle
                                    }</h4>
                                </div>
                                <div class="card-body cardbg">
                                    <figure class="movieCard">
                                        <img
                                        src="${newMovieObj.imageUrl}"
                                        alt="${newMovieObj.movieTitle}"
                                        title="${newMovieObj.movieTitle}"
                                        />
                                        <figcaption>
                                            <div class="movieTitle">
                                                <div class="row">
                                                    <div class="col-10">
                                                        <h4 class="m-0">
                                                            ${
                                                              newMovieObj.movieTitle
                                                            }
                                                        </h4>
                                                    </div>
                                                    <div class="col-2 rating text-center">
                                                        <span
                                                            class="${setClassRating(
                                                              newMovieObj.rating
                                                            )}">${
    newMovieObj.rating
  }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="movieOverview">
                                                <h4 class="mb-0">${
                                                  newMovieObj.movieTitle
                                                }</h4>
                                                <h4>
                                                    <em>Overview</em>
                                                </h4>
                                                <p class="m-0 mt-2">
                                                    ${newMovieObj.overview}
                                                </p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>`;

  movieContainer.prepend(cardDiv);
};

const movieModelhandler = () => {
  movieForm.reset();
  backDrop.classList.toggle("active");
  moviemodel.classList.toggle("active");
};

const getdataForm = (eve) => {
  eve.preventDefault();
  let newMovieObj = {
    movieTitle: movieTitlecontrol.value,
    movieURL: movieURLcontrol.value,
    overview: overviewcontrol.value,
    rating: ratingcontrol.value,
    movieId: uuid(),
  };
  movieArr.unshift(newMovieObj);
  eve.target.reset();
  creeateele(newMovieObj);
  movieModelhandler();
};

showMovieBtn.addEventListener("click", movieModelhandler);
closeToggle.forEach((ele) => {
  ele.addEventListener("click", movieModelhandler);
});

movieForm.addEventListener("submit", getdataForm);

function setClassRating(rating) {
  if (rating <= 2) {
    return "bg-danger";
  } else if (rating > 3 && rating < 4) {
    return "bg-warning";
  } else {
    return "bg-success";
  }
}
