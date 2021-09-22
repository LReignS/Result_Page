var data = [
    ["CHEM11", " Chemis", 3, 12, 18, 12, 44, 86, "A"],
    ["TA0116", "Comput", 3, 11, 19, 13, 44, 87, "A"],
    ["TA0115", "Engine", 4, 12, 18, 12, 43, 85, "A"],
    ["WS0125", "Worksh", 3, 13, 17, 15, 49, 94, "A"],
    ["EVS117", "Enviro", 2, 13, 17, 14, 46, 90, "A"],
    ["MATH13", "Linear", 3, 14, 17, 13, 47, 91, "A"],
    ["PHY114", "Physic", 3, 12, 18, 12, 44, 86, "A"]
];
//var json = require("d:\\LReignS\\WebDevlopment\\result_page\\JSON\\data.json")
//var i, j;
//for (i = 0; i < 7; i++) {
//    for (j = 0; j < 7; j++) {
//      console.log(data[i][j])
//}
//}
console.log(data);
console.log(data);

function displ(a, b) {
    document.write(data[a - 1][b - 1]);
};