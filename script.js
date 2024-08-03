change_background_color()
var data = [
    [1, "Attitude is a little thing that makes a big difference."],
    [2, "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go."],
    [3, "Keep your face always toward the sunshine, and shadows will fall behind you"],
    [4, "Nothing is impossible. The word itself says 'I'm possible!"],
    [5, "Your self-worth is determined by you. You don't have to depend on someone telling you who you are."],
    [6, "It takes courage to grow up and become who you really are."],
    [7, "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong."],
    [8, "Life shrinks or expands in proportion to one’s courage."],
    [9, "Believe you can and you're halfway there."],
    [10, "It is during our darkest moments that we must focus to see the light."],
    [11, "You are never too old to set another goal or to dream a new dream."],
    [12, "I am lucky that whatever fear I have inside me, my desire to win is always stronger."],
    [13, "Champions keep playing until they get it right."],
    [14, "Don't sit down and wait for the opportunities to come. Get up and make them."],
    [15, "All our dreams can come true, if we have the courage to pursue them."],
    [16, "To bring about change, you must not be afraid to take the first step. We will fail when we fail to try."],
    [17, "Don’t count the days, make the days count."],
    [18, "It always seems impossible until it's done."],
    [19, "Give light and people will find the way."],
    [20, "When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected."],
    [21, "It is never too late to be what you might have been."],
    [22, "All dreams are within reach. All you have to do is keep moving towards them."],
    [23, "Real change, enduring change, happens one step at a time."],
    [24, "If you don't like the road you're walking, start paving another one."],
    [25, "Try to be a rainbow in someone's cloud."],
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