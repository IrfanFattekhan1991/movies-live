export const validate = (email, password) => {
  //const nameValidate = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  const validateEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const validatePassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  //if (!name) return "Enter Name!";
  if (!validateEmail) return "Email is not valid!";
  if (!validatePassword) return "Password is not valid!";

  return null;
};
