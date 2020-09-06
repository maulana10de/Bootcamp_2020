let dbUser = [
  {
    username: 'admin',
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    username: 'andre',
    email: 'andre@gmail.com',
    password: 'andre123',
    role: 'user',
  },
];

// let print = dbUser.forEach((item) => console.log(item.username));
let input = 'andre';
let printUsername = dbUser.some((item, i) => {
  return item.username == input;
});

console.log(printUsername);
