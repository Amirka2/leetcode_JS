/**
 * Determine if Two Events Have Conflict
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */

let e1 = ["01:15", "02:00"];
let e2 = ["02:00", "03:00"];

let e3 = ["01:00", "02:00"];
let e4 = ["01:20", "03:00"];

let e5 = ["14:13","22:08"];
let e6 = ["02:40","08:08"];
let getTimeInterval = function (e) {
    e.map(str => {
        return new Date(`December 1, 1970 ${str}:00`);
    });
    return e;
}
let haveConflict = function(event1, event2) {
    let int0 = getTimeInterval(event1);
    let int1 = getTimeInterval(event2);

    let case1 = (int0[1] >= int1[0] && int0[0] <= int1[1]);
    let case2 = (int0[0] <= int1[1] && int0[1] >= int1[0]);
    console.log((case1 || case2));

};

haveConflict(e1, e2);
haveConflict(e3, e4);
haveConflict(e5, e6);
