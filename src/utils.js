export const classes = (...arr) => arr.filter(v => v).join(' ');

export const and = (...arr) => {
  if (arr.length < 3) {
    return arr.join(' and ');
  }
  const cpy = [...arr];
  const last = cpy.pop();
  return cpy.join(', ') + ', and ' + last;
};
