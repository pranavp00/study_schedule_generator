
var subjects = [];
var basicinfo = [];

function storinginfo(){
    var dict = {};
    dict["name"] = document.getElementById("name").value;
    dict["edu_lvl"] = document.getElementById("edu_level").value;
    dict["ava_time"] = document.getElementById("ava_time").value;

}
function storingdata(){
    var dict = {};
    dict["name"] = document.getElementById("subject").value;
    dict["priority"] = document.getElementById("priority").value;
    dict["goal"] = document.getElementById("goal").value;
    dict["difficulty"] = document.getElementById("difficulty").value;
    dict["time"] = document.getElementById("time").value;
    subjects.push(dict);
        
}

