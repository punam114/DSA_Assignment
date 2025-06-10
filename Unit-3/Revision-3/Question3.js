let user = { name: "Alice", role: "admin", active: false };

let admins = (user.role == "admin") ? (user.active == true ? "Admin Access Granted!" : "Admin Access Revoked") : "Access Denied";

let users = (user.role == "user") ? (user.active == true ? "User Access Granted!" : "User Access Revoked") : "Access Denied";

console.log(admins);
console.log(users)