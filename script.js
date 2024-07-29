change_background_color()
var data = [
    [0, "text"],
    [1, "texttext"],
    [2, "texttexttext"]
];
phrase_id = Math.floor(Math.random() * data.length);
var phrase_h1 = document.getElementById("phrase")
phrase_h1.innerHTML = data[phrase_id][1]
function pervious_phrase() {
    if (phrase_id!=0) {
        phrase_id -= 1
        phrase_h1.innerHTML = data[phrase_id][1]
        change_background_color()
    } else {
        phrase_id = data.length-1
        phrase_h1.innerHTML = data[phrase_id][1]
        change_background_color()
    }
}
function next_phrase() {
    if (phrase_id!=data.length-1) {
        phrase_id += 1
        phrase_h1.innerHTML = data[phrase_id][1]
        change_background_color()
    } else {
        phrase_id = 0
        phrase_h1.innerHTML = data[phrase_id][1]
        change_background_color()
    }
}
function change_background_color() {
    random_background_color_id = Math.floor(Math.random() * 10);
    const background_colors = ["aquamarine", "red", "orange",
        "yellowgreen", "green","blue", "pink", "black", "purple", "gray"]
    var body = document.getElementById("body")
    body.style = "background-color:"+background_colors[random_background_color_id]+";"
}