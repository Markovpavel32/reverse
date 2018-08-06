export default (str) => {

  const iter = (count, newStr) => {
    if(count < str.length){
    newStr += str[str.length - count - 1];
    return iter(count + 1, newStr);
    }
    return newStr;
  }

  return iter(0, '');
};
