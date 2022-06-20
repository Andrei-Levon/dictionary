const dictionary = [];

function wordsCount() {
    document.getElementsByTagName("output")[0].value = dictionary.length;
}

document.getElementsByClassName("insert")[0].onclick = function() {
    let word = document.getElementById("word").value;
    if (!dictionary.includes(word) && word != "") {
        dictionary.push(word);
        wordsCount();
        document.getElementsByClassName("output")[0].innerHTML = word + " added!";
        document.getElementsByClassName("output")[0].style.visibility = "visible";
        document.getElementById("word").value = "";
    } else if (word == "") {
        document.getElementsByClassName("output")[0].innerHTML = "No characters added";
        document.getElementsByClassName("output")[0].style.visibility = "visible";
    } else {
        document.getElementsByClassName("output")[0].innerHTML = "Word already included in the dictionary";
        document.getElementsByClassName("output")[0].style.visibility = "visible";
        document.getElementById("word").value = "";
    }
};

document.getElementsByClassName("long")[0].onclick = function() {
    if (dictionary.length == 0) {
        document.getElementsByClassName("output")[0].innerHTML = "Dictionary is empty";
        document.getElementsByClassName("output")[0].style.visibility = "visible";
    } else {
        var longest = dictionary.sort(
            function (a, b) {
                return b.length - a.length;
            }
        )[0];
        document.getElementsByClassName("output")[0].innerHTML = "The longest word is: " + longest;
        document.getElementsByClassName("output")[0].style.visibility = "visible";
    }
}

document.getElementsByClassName("reset")[0].onclick = function() {
    dictionary.length = 0;
    document.getElementsByTagName("output")[0].value = dictionary.length;
    document.getElementsByClassName("output")[0].innerHTML = "Dictionary is empty";
    document.getElementsByClassName("output")[0].style.visibility = "visible";
};