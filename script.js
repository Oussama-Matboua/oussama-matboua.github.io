var names = Array();
names [0] = "karim";
names [1] = "kamal";
names [2] = "Joe";
names [3] = "zineb";
names [4] = "jamal";
names [5] = "amine";
names [6] = "yaakob";
names [7] = "hind";
names [8] = "Osama";
names [9] = "Yasin";
for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0)==='J'|| names[i].charAt(0)==='j') {
        console.log("Goodbye " + names [i] )
    }
    else {
        console.log("Hello " + names[i] )
    }
}