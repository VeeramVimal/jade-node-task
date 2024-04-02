const allRoles = {
  user: ["profileUpload"],
  employee: ["profileUpload", "getUsers"],
  admin: ["getUsers", "manageUsers", "profileUpload"],
  superAdmin: ["getUsers", "manageUsers", "profileUpload"],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
