const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getOfficeNumber() {
        return this.officeNumber
    }


getRole() {
    return "Manager"
}
}
module.exports = Manager;
//