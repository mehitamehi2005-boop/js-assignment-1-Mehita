const myScore = 85;
const friendScore = 65;

if (myScore > 80) {
    // Inside friend score checks
    if (friendScore > 80) {
        console.log("go for a lunch.");
    }
    else if (friendScore >= 60) {
        console.log("good luck next time.");
    }
    else if (friendScore >= 40) {
        console.log("keep your friend's message unseen.");
    }
    else {
        console.log("block your friend");
    }
}
else {
    console.log("go to home and sleep and act sad");
}