import http from "./httpService";

const endPoint = "/movies";

function movieUrl(id) {
  return `${endPoint}/${id}`;
}

export function getMovies() {
  return http.get(endPoint);
}

export function deleteMovie(id) {
  return http.delete(movieUrl(id));
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;

    return http.put(movieUrl(movie._id), body);
  }

  return http.post(endPoint, movie);
}
