export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password: string) => {
  const lengthValid = password.length >= 10;

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const typesMatched = [hasUpper, hasLower, hasNumber, hasSpecial].filter(
    Boolean
  ).length;

  const complexValid = typesMatched >= 3 && password.length >= 8;

  return lengthValid || complexValid;
};

export const validateName = (name: string) => {
  return name.length >= 2 && name.length <= 20;
};
