// add solution here
function theBeatlesPlay(musicians, instruments) {
  const arr = [];
  const music = musicians.length;
  const instr = instruments.length;

  for (let num = 0; num < music; num++) {
    arr.push(musicians[num] + " plays " + instruments[num]);
  }
  return arr;
}

function johnLennonFacts(array) {
  const arr = [];
  const facts = array.length;
  const num = 0;

  while (array.length > num) {
    arr.push(array[num])
    num++;
  }
}
