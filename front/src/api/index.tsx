import axios from "axios";

const apiUrl = "http://localhost:3000";

interface ISignUpPage {
  email: string;
  password: string;
}

export const feachSignUpPage = ({ email, password }: ISignUpPage) => {
  axios
    .get(`${apiUrl}/signupPage`)
    .then(() => console.log("sucssefull"))
    .catch(() => console.log("Хуета"));
  //   axios
  //     .put(`${apiUrl}/signup`, { email, password })
  //     .then(() => console.log("sucssefull"))
  //     .catch(() => console.log("error"));
};
