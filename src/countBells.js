const countBells = (startTime, endTime) => {
  let start = startTime.split(":");
  let end = endTime.split(":");

  let startHr = Number.parseInt(start[0], 10);
  let startMin = Number.parseInt(start[1], 10);
  let endHr = Number.parseInt(end[0], 10);
  let endMin = Number.parseInt(end[1], 10);

  if (startHr === endHr && startMin >= endMin) {
    return 156;
  }

  let total = 0;

  if (startMin === 0) {
    total += startHr % 12;
  }

  if (startHr > endHr) {
    endHr += 24;
  }

  for (let i = startHr + 1; i <= endHr; i++) {
    if (i % 12 === 0) total += 12;
    else total += i % 12;
  }

  return total;
};

export default countBells;
