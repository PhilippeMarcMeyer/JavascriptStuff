// choose beetween 2 sentences : one plural, one singular given a number
function renderPlural(itemsCount, singularString, pluralString) {
    var answer = "";
    itemsCount = itemsCount || 0;
    if (itemsCount > 1) {
        answer = pluralString;
    } else {
        answer = singularString;
    }
    return answer;
}

// HELLO world => Hello World
function camelCase(sentence) {
    var mySentence = sentence.toLowerCase();
    var words = mySentence.split(" ");
    var temp = "";
    for (var i = 0; i < words.length; i++) {
        temp = "";
        if (words[i].length > 0)
            temp = words[i].charAt(0).toUpperCase();
        if (words[i].length > 1)
            temp += words[i].substring(1);
        words[i] = temp;
    }
    return words.join(" ");
}

function sayHello(){
	console.log("Hello from local Git number 2");
}