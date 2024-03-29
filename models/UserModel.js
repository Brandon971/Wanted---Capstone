const { result } = require("lodash");
const sql = require("./db")

const Users = function(user) {
    this.userID = user.userID;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.gender = user.gender;
    this.cellphoneNumber = user.cellphoneNumber;
    this.emailAdd = user.emailAdd
    this.userPass = user.userPass;
    this.userProfile = user.userProfile;
};

Users.create = (newUser, result) => {
    sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }else {
            result(null, res)
        }
    })
};

Users.login = (user, result) => {
    sql.query('SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userPass,userProfile FROM Users WHERE emailAdd =?',[user.emailAdd],async (err, res)=> {
        if(err) {
            console.log('error: ', err)
            result(err, null)
            return;
        }else {
            result(null, res)
        }
    })
}

Users.findById = (id, result) => {
    sql.query(`SELECT * FROM Users WHERE userID = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found user: ",res[0]);
            result(null, res[0])
            return;
        }

        result({ kind: "not_found"}, null)
    })
};

Users.getAll = (firstName, result ) => {
    let query = "SELECT * FROM Users";

    if(firstName) {
        query += `WHERE firstName LIKE '%${firstName}%'`;
    }
    sql.query(query,(err, res) => {
        if(err) {
            console.log("error: ", err)
            result(null, err);
            return;
        }

        console.log("Users: ", res);
        result(null, res)
    })
}

Users.updateById = (id, user, result) => {
    sql.query('UPDATE Users SET firstName = ?, lastName = ?, gender = ?, cellphoneNumber = ?, emailAdd = ?, userPass = ?, userProfile = ?, joinDate = ? WHERE userID = ?', [user.firstName, user.lastName, user.gender, user.cellphoneNumber, user.emailAdd, user.userPass, user.userRole, user.userProfile, user.joinDate, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  )
};

Users.remove = (id, result) => {
    sql.query("DELETE FROM Users WHERE userID = ? ", id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind : "not_found" }, null);
            return;
        }
        console.log("deleted user with id: ", id);
        result(null, res);
    })
}

module.exports = Users;