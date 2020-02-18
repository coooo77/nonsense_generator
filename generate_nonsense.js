function getRandomWord(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateNonsense(target) {
  const career = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // 排除沒選擇任何對象的情況
  if (!target) {
    return '你連對象都不知道，要怎麼說幹話??'
  }

  let word = `身為一個${career[target]}，${getRandomWord(task[target])}，${getRandomWord(phrase)}`

  return word
}

module.exports = generateNonsense