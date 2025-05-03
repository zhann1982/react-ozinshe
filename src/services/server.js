import axios from "axios";

export const fetchAges = async (setState) => {
  try {
    const response = await axios(`http://185.100.67.64/age-category`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setState(response.data.result);
  } catch (error) {
    console.error("Error fetching ages:", error);
  }
};

export const fetchMovies = async (setState) => {
  try {
    const response = await axios.get('http://185.100.67.64/movies', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    });
    setState(response.data.result);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

export const fetchMovie = async (id, setState) => {
  try {
    const response = await axios.get('http://185.100.67.64/movie/' + id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    });
    setState(response.data.result)
    console.log('movie '+id, response.data.result)
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

export const fetchCategories = async (setState) => {
  try {
    const response = await axios(`http://185.100.67.64/category`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setState(response.data.result);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const fetchGenres = async (setState) => {
  try {
    const response = await axios(`http://185.100.67.64/genre`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setState(response.data.result);
  } catch (error) {
    console.error("Error fetching genres:", error);
  }
};

export const fetchRoles = async (setState) => {
  try {
    const response = await axios(`http://185.100.67.64/role`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setState(response.data.result);
  } catch (error) {
    console.error("Error fetching roles:", error);
  }
};