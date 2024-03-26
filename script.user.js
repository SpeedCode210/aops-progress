// ==UserScript==
// @name         AoPS Progress Tracker
// @namespace    http://tampermonkey.net/
// @downloadURL https://github.com/SpeedCode210/aops-progress/raw/main/script.user.js
// @version      1.0
// @description  An extension to keep track of your progress on Math Olympiad problems
// @author       You
// @match        https://artofproblemsolving.com/community/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=artofproblemsolving.com
// @author       Raouf Ould Ali (SpeedCode)
// @grant        none
// ==/UserScript==
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}
if(window.location.href.includes("raoufisthebestdevever")){
    console.log("batata")
    document.getElementsByTagName("body")[0].innerHTML = JSON.stringify({...localStorage});
}
let i = 0;
let contest = window.location.href.split("/")[4];
setInterval
(function() {
    'use strict';
    contest = window.location.href.split("/")[4];
    let problems = document.getElementsByClassName("cmty-view-post-item-label");
    let ind = 1;
    for(let p of problems){
        if(p.matches(".marked")) continue;
        let pb = p;
        i++;
        pb.classList.add("marked");
        pb.id = ind;
        ind++;
        pb.innerHTML += `<br><button id = "${pb.id}-btn">Mark as solved</button>`;
        if(localStorage.getItem(contest+"%"+pb.id) == "true"){
             pb.style.backgroundColor = "#00ff00";
            document.getElementById(`${pb.id}-btn`).innerHTML = "Mark as unsolved";
        }else{
            localStorage.setItem(contest+"%"+pb.id, false);
            pb.style.backgroundColor = "#ff0000";
        }
        document.getElementById(`${pb.id}-btn`).addEventListener("click", ()=>{
            console.log(pb.id);
        localStorage.setItem(contest+"%"+pb.id, localStorage.getItem(contest+"%"+pb.id) == "true" ? "false" : "true");
        if(localStorage.getItem(contest+"%"+pb.id) == "true"){
             pb.style.backgroundColor = "#00ff00";
                        document.getElementById(`${pb.id}-btn`).innerHTML = "Mark as unsolved";
        }else{
            pb.style.backgroundColor = "#ff0000";
                        document.getElementById(`${pb.id}-btn`).innerHTML = "Mark as solved";

        }
        });
    }
}, 1000);
