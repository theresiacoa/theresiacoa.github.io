// /*
// =============
// UNIQUE FINDER
// =============
// Name :_____________

// [INSTRUCTIONS]
// uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
// Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
// Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
// Sehingga, Hello dan HELLO di anggap kata yang sama.
// Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.
// [CONSTRAINTS]
// Tidak ada batasan untuk soal ini.
// [EXAMPLE]
// uniqueFinder('saya dan SAYA suka makan nasi')
// kata unik: saya, dan, suka, makan, nasi
// output: ['saya', 'dan', 'suka', 'makan', 'nasi']

// [RULE]
// - Dilarang menggunakan Regex (.match, .test, dan sebagainya)
// - Dilarang menggunakan .map, .filter, dan .reduce!
// - Dilarang menggunakan .split, indexOf!

// */

function uniqueFinder(sentence) {
  var kata = '';
  var arr = [];

  //masukkin ke array dulu
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      kata += sentence[i];
    }
    if (sentence[i] === ' ' || i === sentence.length - 1) {
      if (arr.length === 0) {
        arr.push(kata);
      } else {
        var isSame = false;
        for (var j = 0; j < arr.length; j++) {
          if (arr[j] === kata.toLowerCase()) {
            isSame = true;
          }
        }
        if (isSame === false) {
          arr.push(kata);
        }
      }
      kata = '';
    }
  }
  return arr;
}

console.log(uniqueFinder("hello black dragon and hello red dragon")); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder("hello HELLo hEllO hlloe")); // ['hello', 'hlloe']
console.log(uniqueFinder("john is coding and he is coding")); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder("blue blue red blue violet red violet")); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'

