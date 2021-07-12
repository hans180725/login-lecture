"use strict";

class UserStorage {
  static #users = {
    id: ["1", "2", "3"],
    password: ["11", "22", "33"],
    name: ["111", "222", "333"]
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return newUsers;
  }
}

module.exports = UserStorage;