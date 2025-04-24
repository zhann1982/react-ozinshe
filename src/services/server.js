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
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching ages:", error);
  }
};
