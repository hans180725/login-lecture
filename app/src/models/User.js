"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const body = this.body;
    const {id, password} = await UserStorage.getUserInfo(body.id);
    
    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true };
      }
      return { success: false, msg: "Wrong password!" };
    }
    return { success: false, msg: "Wrong id!" };
  }

  register() {
    const body = this.body;
    const response = UserStorage.save(body);
    return response;
  }
}

module.exports = User;