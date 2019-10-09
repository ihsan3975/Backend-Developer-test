var words = ['bat', 'code', 'cat', 'act', 'cab', 'crazy', 'tac']

let temp = []
for ( var i = 0; i < words.length; i++) {

    var word = words[i];
    var sorted = word.split("").sort().join("");

    for (var j = 0; j < words.length; j++) {

        if (i === j) {
            continue;
        }

        var other = words[j];
        if(sorted === other.split("").sort().join("")){
            temp.push(word)
        }
    }
}

for( var i = 0; i <= temp.length; i++){
   if ( temp[i] === temp[i+1]) {
     temp.splice(i, 1);
   }
}
// console.log(temp)
console.log(temp.join(' '))
