function sortList(list) {
    list.toSorted((a,b)=>  b.difficulty -a.difficulty)
}


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

export function measureSolveTime(fun, ridd) {
  const befor = getTimeAsSec();
  fun(ridd);
  const after = getTimeAsSec();
  return after - befor;
}

export function printAll(riddels,title) {
    console.log(`   
         ---- ${title} ----`);
    
  for (const ridd of riddels) {
    if (ridd.choices) {
      console.log(`
-----------------------------------
 
     Riddle 1: ${ridd.name}
     ${ridd.taskDescription}
     options: ${ridd.choices}

-----------------------------------

            `);
    } else {
      console.log(`
-----------------------------------
 
     Riddle 1: ${ridd.name}
     ${ridd.taskDescription}

-----------------------------------

            `);
    }
  }
}