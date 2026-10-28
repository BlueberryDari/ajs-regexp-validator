export default class Validator {
  validateUsername(username) {
    const regex = /^(?!.*\d{4})[a-zA-Z]([a-zA-Z0-9_-]*[a-zA-Z])?$/;
    return regex.test(username);
  }
}

