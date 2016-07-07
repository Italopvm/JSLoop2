/*function letterCapitalize(string){
 
 var eachWord = string.split(" ");//first split each word into indvidiual strings from sentence
    // var eachword = ['test', 'one', 'these', 'balls']

    var length = eachWord.length;

    var newStringCap = [];

    for(var i =0; i<length;i++){

    	eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].slice(1);

    	newStringCap.push(eachWord[i]);
	}

	return newStringCap.join(' ');
}

console.log(letterCapitalize('where is my car'));
console.log(letterCapitalize('where is my truck'))*/







function WordCount(str) {
 	var newString = str.split(' ');
 	return newString.length;
}

console.log(WordCount("hi me and you"));








    















