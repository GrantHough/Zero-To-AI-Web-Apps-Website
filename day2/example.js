//variable for total # of miles walked
let totalMilesWalked = 0;

//variable for total user points
let totalPoints = 0;

//defining the function to input a walk
//takes in miles walked and how many hills the walk had
function walk(miles, hills) {
    //adds miles walked to total
    totalMilesWalked = totalMilesWalked + miles;
    //points for this walk
    let walkPoints = 0;
    //if there were hills on the walk 
    if (hills > 10) {
        walkPoints = totalPoints + 50 + 100 * miles;
        totalPoints = walkPoints + totalPoints;
    } else if (hills > 5) {
        walkPoints = totalPoints + 25 + 75 * miles;
        totalPoints = walkPoints + totalPoints;
    } else {
        walkPoints = totalPoints + 50 * miles;
        totalPoints = walkPoints + totalPoints;
        
    }

    return walkPoints;
}

console.log(totalPoints);
walk(3, 2);
console.log(totalPoints);
console.log(walk(4, 11));
console.log(totalPoints);
console.log(walk(5, 6));
console.log(totalPoints);
