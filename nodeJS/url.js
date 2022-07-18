const url = require("url");
const {URL} = url;
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sessac&oquery=%EC%83%88%EC%8B%B9&tqi=hWRsswp0JywsseqFHKCssssst8Z-441561"

const naver = new URL(string);

console.log(url.format(naver));
console.log(url.parse(string));
// 물음표 뒤 가져오기
console.log(naver.searchParams);