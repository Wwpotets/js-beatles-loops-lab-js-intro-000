// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  var music = musicians.length;
  var instr = instruments.length;

  for (let num = 0; num <= music; num++) {
    arr.push(musicians[num] + " plays the " + instruments[num]);
  }
  return arr;
}
