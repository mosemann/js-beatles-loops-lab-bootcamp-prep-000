function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
}return array
}

function johnLennonFacts(facts) {
  let countdown = facts.length
  while (countdown > 0) {
    facts[countdown] = facts[countdown] + "!!!"
  }return facts
}