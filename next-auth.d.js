
const { JWT } = require("next-auth/jwt");

// Augment the JWT interface
JWT.prototype.userRole = "admin";

