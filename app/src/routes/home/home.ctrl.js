"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },  
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["1", "2", "3"],
  password: ["11", "22", "33"],
}

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "Login failed!"
    });
  },
};

module.exports = {
  output,
  process,
};