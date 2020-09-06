let date = new Date();
let day = date.getDay();
let hari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];

console.log(`hari ini ${hari[day]}`);
console.log(`kemarin ${hari[day - 1]}`);
console.log(`besok ${hari[day + 1]}`);
