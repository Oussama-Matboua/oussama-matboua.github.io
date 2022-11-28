var names = Array();
names [0] = "Yakoov";
names [1] = "John";
names [2] = "Jin";
names [3] = "Jason";
names [4] = "paul";
names [5] = "Frank";
names [6] = "Larry";
names [7] = "paule";
names [8] = "laura";
names [9] = "jim";
for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0)==='J'|| names[i].charAt(0)==='j') {
        console.log("Good bye " + names [i] )
    }
    else {
        console.log("Hello " + names[i] )
    }
}
