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

function jlf(array) {
  var length = array.length;
  var num = 0;
  var arr = [];

  while(length > num){
    arr.push(array[num]);
    num += 1;
  }
  return arr;
}
