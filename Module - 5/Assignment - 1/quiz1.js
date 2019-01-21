var data = {question: ['Mount Kilimanjaro is the tallest mountain in the world?', 'Venus is the closest planet to the Sun?', 'Kelvin is a measure of temperature?'],
choices: [['True', 'False'], ['True', 'False'],['True', 'False']],
hints: ['Most famous mountain is the tallest mountain', 'Mercury is the 1st planet', 'One of the measures start with k'],
correct: ['Correct', 'Correct', 'Correct'],
wrong:['Mount Everest is the tallest mountain in the world.', 'Mercury is the closest planet to the Sun', 'No.Kelvin and farenheit are measures of temperature'],
answer: [1, 1, 0]}

var p = 0;
var score = 0;
loader(p);

function loader(p) {
    var q = data.choices[p][0];
    var r = data.choices[p][1];
    document.getElementById("question").innerHTML = data.question[p];
    document.getElementById("choose1").innerHTML = '<label>' + '<input type = "radio" name = "optradio" onclick = count(1)>' + '&nbsp;' + q + '</label>';
    document.getElementById("choose2").innerHTML = '<label>' + '<input type = "radio" name = "optradio" onclick = count(0)>' + '&nbsp;' + r + '</label>';
}

function hint() {
    document.getElementById("hint").innerHTML = '<div class="alert alert-primary alert-dismissable">' + '<a href="#" class="close" data-dismiss="alert" aria-label="close" onclick="closehint()">'+'&times;'+ '</a>' + data.hints[p] + '</div>';
}

function correct() {
    document.getElementById("correct").innerHTML = '<div class="alert alert-primary alert-dismissable">' + '<a href="#" class="close" data-dismiss="alert" aria-label="close" onclick="closehint()">'+'&times;'+ '</a>' + data.correct[p] + '</div>';
}

function correct() {
    document.getElementById("wrong").innerHTML = '<div class="alert alert-primary alert-dismissable">' + '<a href="#" class="close" data-dismiss="alert" aria-label="close" onclick="closehint()">'+'&times;'+ '</a>' + data.wrong[p] + '</div>';
}

function closehint() {
    document.getElementById("hint").innerHTML = '';
}

function closecorrect() {
    document.getElementById("correct").innerHTML = '';
}

function closewrong() {
    document.getElementById("wrong").innerHTML = '';
}

function count(ans) {
    if (ans === data.answer[p]) {
        correct();
        score++;
    } else {
        wrong();
    }
}

function next() {
    var l = data.question.length;
    if (p < l - 1) {
        p = p + 1;
        closehint();
        closecorrect();
        closewrong();
        loader(p);
    } else {
        result();
    }
}

function result() {
    document.getElementById("temp").innerHTML = 'Your score is ' + score + '/3';
    document.getElementById("temp1").innerHTML = "";
}

function reset() {
    location.reload();
}