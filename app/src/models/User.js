"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const body = this.body;
    try {
      const {id, password} = await UserStorage.getUserInfo(body.id);
    
      if (id) {
        if (id === body.id && password === body.password) {
          return { success: true };
        }
        return { success: false, msg: "Wrong password!" };
      }
      return { success: false, msg: "Wrong id!" };
    } catch (err) {
      return { success: false, msg: err };
    }    
  }

  async register() {
    const body = this.body;
    try {
      const response = await UserStorage.save(body);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;