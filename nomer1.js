function sliceSentences(strSentences) {
  let keyword = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
  let str = strSentences

  keyword = keyword.sort();
  keyword = keyword.reverse();

  [keyword[3], keyword[4], keyword[5]] = [keyword[5], keyword[3], keyword[4]]

  let k = 0
  while(k < 100){
    var temp = []
    for (i = 0; i <= str.length; i++){
      for (j = 0; j <= keyword.length; j++){
        if (keyword[j] == str.split('', i).join('')){
          temp.push(keyword[j])
          str = str.replace(keyword[j], '')
        }
      }
    }
    if (temp.length == 0){
      break
    } else{
      // console.log(temp)
      console.log(temp.join(', '))
      keyword = keyword.filter(e => e !== temp[0])
      str = strSentences
      k++
    }
  }
}

// sliceSentences('programit')
sliceSentences('programmerit')
