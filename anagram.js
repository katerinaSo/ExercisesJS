function anagram_check(str1, str2) {
  return clean(str1) === clean(str2);
}

function clean(str) {
  let clean_str = str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    // if we ignore duplicates of letters in  a string, we add this line:
    // clean_str = Array.from(new Set(clean_str)).join('');
    .join('');
  return clean_str;
}


