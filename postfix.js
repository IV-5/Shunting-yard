function infixToPostfix(s) {
  const p = {'+':1,'-':1,'*':2,'/':2,'^':3}, k = [], o = [];
  for (let t of s.split(' ')) {
    if (!isNaN(t)) o.push(t);
    else if (t in p) {
      while (k.length && k[k.length-1]!='(' && 
             (p[k[k.length-1]]>p[t] || 
              (p[k[k.length-1]]==p[t] && t!='^')))
        o.push(k.pop());
      k.push(t);
    } else if (t=='(') k.push(t);
    else if (t==')') {
      while (k[k.length-1]!='(') o.push(k.pop());
      k.pop();
    }
  }
  return o.concat(k.reverse()).join(' ');
}
