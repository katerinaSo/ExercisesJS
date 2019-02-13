function vowels_count(str){
    const matches_arr = str.match(/[aeiou]/gi);
    return matches_arr? matches_arr.length:0;

}