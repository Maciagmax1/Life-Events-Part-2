let totalHours = 50;
let wage = 10;
let extraHours = totalHours - 40;
// not overtime pay
if (totalHours <= 40) {
  console.log(`${totalHours} at $${wage} per hour`);
}
// overtime pay
else {
  console.log(
    `${totalHours - extraHours} at $${wage} per hour + ${extraHours} at $${
      wage * 1.5
    } per hour`
  );
}
