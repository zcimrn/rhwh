strings = [
    {
        "box": "<b class='red'>root</b><b class='yellow'>@hiro</b><b class='white'>:</b><b class='blue'>~</b><b class='white'># </b><b class='white'></b><br>",
        "string": "",
        "type": "string",
        "time": 2000
    },
    {
        "box": "",
        "string": "hack",
        "type": "letter",
        "time": 200
    },
    {
        "box": "<b class='white'>==> hacking... 0%</b><br>",
        "string": "",
        "type": "string",
        "time": 1000
    },
    {
        "box": "<b class='white'>==> hacking... 33%</b><br>",
        "string": "",
        "type": "string",
        "time": 1000
    },
    {
        "box": "<b class='white'>==> hacking... 66%</b><br>",
        "string": "",
        "type": "string",
        "time": 1000
    },
    {
        "box": "<b class='white'>==> hacking... 99%</b><br>",
        "string": "",
        "type": "string",
        "time": 1000
    },
    {
        "box": "<b class='green'>==> SUCCESS 100%</b><br><b class='blue'>~</b><br><b class='blue'>~ &nbsp </b><b class='white'>+---------------+</b><br><b class='blue'>~ &nbsp </b><b class='white'>| R U S S I A N |</b><br><b class='blue'>~ &nbsp </b><b class='white'>| H A C K E R S |</b><br><b class='blue'>~ &nbsp </b><b class='white'>|&nbsp &nbsp W E R E&nbsp &nbsp |</b><br><b class='blue'>~ &nbsp </b><b class='white'>|&nbsp &nbsp H E R E&nbsp &nbsp |</b><br><b class='blue'>~ &nbsp </b><b class='white'>+---------------+</b><br><b class='blue'>~</b><br>",
        "string": "",
        "type": "string",
        "time": 0
    },
    {
        "box": "<b class='red'>root</b><b class='yellow'>@hiro</b><b class='white'>:</b><b class='blue'>~</b><b class='white'># </b><b class='white'></b><br>",
        "string": "",
        "type": "string",
        "time": 4000
    },
    {
        "box": "",
        "string": "history -c",
        "type": "letter",
        "time": 200
    },
    {
        "box": "<b class='red'>root</b><b class='yellow'>@hiro</b><b class='white'>:</b><b class='blue'>~</b><b class='white'># </b><b class='white'></b><br>",
        "string": "",
        "type": "string",
        "time": 4000
    },
    {
        "box": "",
        "string": "clear",
        "type": "letter",
        "time": 200
    }
];
var main = function() {
    document.body.innerText = "";
    var i = 0, j = 0;
    var f = function() {
        if (i < strings.length) {
            time = 10000;
            if (strings[i].type == "string") {
                document.body.innerHTML += strings[i].box;
                time = strings[i].time;
                i++;
            }
            else {
                if (strings[i].type == "letter") {
                    if (j < strings[i].string.length) {
                        var temp = document.body.children[document.body.children.length - 2];
                        if (strings[i].string[j] == " ") {
                            temp.innerHTML += "&nbsp";    
                        }
                        else { 
                            temp.innerHTML += strings[i].string[j];
                        }
                        j++;
                        time = strings[i].time;
                    }
                    else {
                        j = 0;
                        time = strings[i].time;
                        i++;
                    }
                }
            }
            window.setTimeout(f, time);
        }
        else {
           window.setTimeout(main, strings[i - 1].time); 
        }
        return null;    
    }
    f();
    return null;
}
window.setTimeout(main, 1000);
