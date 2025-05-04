var guiltText = document.getElementById("guilt_text");
var reputationText = document.getElementById("reputation_text");
var gameImage = document.getElementById("game_image");
var scenarioText = document.getElementById("scenario_text");
var choiceOneButton = document.getElementById("choice_1");
var choiceTwoButton = document.getElementById("choice_2");

var guiltLevel = 50 + Math.floor(((Math.random() * 2 - 1) * 10));
var reputationLevel = 50 + Math.floor(((Math.random() * 2 - 1) * 10));

UpdateGame(
    0,
    0,
    "You are on The Skeld, a ship deep in outer space with the goal of reaching a far away galaxy. Last night, a crewmate was found dead in the electrical room. Paranoia has overcome the ship, and everyone believes that there is an IMPOSTOR aboard.",
    "Continue with tasks...",
    "Search for an IMPOSTOR...",
    "assets/default.png",
    TaskOne,
    InvestigateOne
);

function UpdateGame(guiltModify, reputationModify, scenarioInfo, choiceOneText, choiceTwoText, imageSource, choiceOneOutcome, choiceTwoOutcome) {
    guiltLevel += guiltModify;
    reputationLevel += reputationModify;
    Math.floor(guiltLevel);
    Math.floor(reputationLevel);
    guiltText.textContent = "Guilt: ".concat(guiltLevel.toString());
    reputationText.textContent = "Reputation: ".concat(reputationLevel.toString());

    scenarioText.textContent = scenarioInfo;
    choiceOneButton.textContent = choiceOneText;
    choiceOneButton.onclick = choiceOneOutcome;
    choiceTwoButton.textContent = choiceTwoText;
    choiceTwoButton.onclick = choiceTwoOutcome;

    gameImage.imageSource = imageSource;
}

function TaskOne() {
    UpdateGame(
        10,
        10,
        "You decide to continue about your day and eject the trash from the ship. Your crewmates appreciate your work, but grow suspicious of the fact that you are ignoring the more pressing issue. After ejecting the trash, you notice an open vent on the wall.",
        "Investigate the vent...",
        "Return to the cafeteria...",
        "assets/default.png",
        TaskOne,
        InvestigateOne
    );
}

function InvestigateOne() {
    UpdateGame(
        -10,
        10,
        "You decide to search for evidence of whether or not there is an IMPOSTOR on the ship. Some appreciate your help in getting to the bottom of this, but others are annoyed that they must now do your tasks. While searching the ship, you notice a crewmate acting suspiciously around a vent.",
        "Call a meeting and inform the crew...",
        "Ignore the crewmate...",
        "assets/default.png",
        TaskOne,
        InvestigateOne
    );
}