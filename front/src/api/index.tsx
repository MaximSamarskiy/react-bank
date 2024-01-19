import axios from "axios";

const apiUrl = "http://localhost:4000";

interface ISignUp {
  email: string;
  password: string;
}

export const feachSignUp = ({ email, password }: ISignUp) => {
  axios
    .get(`${apiUrl}/signup`)
    .then(() => console.log("sucssefull"))
    .catch(() => console.log("error"));
  //   axios
  //     .put(`${apiUrl}/signup`, { email, password })
  //     .then(() => console.log("sucssefull"))
  //     .catch(() => console.log("error"));
};
