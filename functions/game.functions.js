function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function getTimeAsSec(params) {
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let newtime = h / 60 / 60 + m / 60 + s;
  return newtime;
}

export function measureSolveTime(fun, ridd = undefined) {
  const befor = getTimeAsSec();
  if (ridd) {
    fun(ridd);
  } else {
    fun();
  }

  const after = getTimeAsSec();
  return after - befor;
}
