for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} : bis bus bis bus`);
  } else if (i % 3 == 0) {
    console.log(`${i} : bis`);
  } else if (i % 5 == 0) {
    console.log(`${i} : bus`);
  }
}
