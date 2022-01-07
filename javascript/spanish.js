let all_travel = [];
let all_dr = [];
let all_sport = [];

function randomize() {
    let chosen_travel = all_travel.sort(() => .5 - Math.random()).slice(0,4)
    let chosen_dr = all_travel.sort(() => .5 - Math.random()).slice(0,4)
    let chosen_sport = all_travel.sort(() => .5 - Math.random()).slice(0,4)
}


function getRndInteger(max) {
    return Math.floor(Math.random() * (max) );
}