const missionStatements = [
    "Our commitment extends beyond traditional education. We strive to curate an ever-evolving repository of cutting-edge coding materials, fostering a culture of continuous learning and adaptation. Our mentors, who are seasoned technocrats and industry visionaries, act as lighthouses in the vast sea of tech possibilities",
    "At Hobcode, we don't just teach code; we cultivate tech artisans, architects of tomorrow's digital realms, and problem solvers of today's challenges. We invite you to embark on this thrilling quest, where your dreams meet technology's infinite horizons. Join us, and let's code a future where possibilities are boundless",
    "Join us on the path to tech excellence and unlock a world of limitless possibilities.",
];

let currentIndex = 0;
const statementElement = document.getElementById("allstatements");

function changeMissionStatement() {
    statementElement.textContent = missionStatements[currentIndex];
    currentIndex = (currentIndex + 1) % missionStatements.length;
}

// Start changing mission statements when the website loads
setInterval(changeMissionStatement, 15000); 







