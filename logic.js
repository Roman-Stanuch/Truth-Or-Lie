var guiltText = document.getElementById("guilt_text");
var reputationText = document.getElementById("reputation_text");
var gameImage = document.getElementById("game_image");
var scenarioText = document.getElementById("scenario_text");
var choiceOneButton = document.getElementById("choice_1");
var choiceTwoButton = document.getElementById("choice_2");

var guiltLevel = 0;
var reputationLevel = 0;

// Called whenever a choice is made
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

// Returns a random number between 5 and 15
function RandomStatModify() {
    return Math.floor(10 + 5 * ((Math.random() - 0.5) * 2));
}

Intro();

// Intro Sequence
function Intro() {
    guiltLevel = 50 + Math.floor(((Math.random() * 2 - 1) * 10));
    reputationLevel = 50 + Math.floor(((Math.random() * 2 - 1) * 10));
    UpdateGame(
        0,
        0,
        "You are on The Skeld, a ship deep in outer space with the goal of reaching a far away galaxy. Last night, a crewmate was found dead in the electrical room. Paranoia has overcome the ship, and everyone believes that there is an IMPOSTOR aboard...",
        "Continue with tasks",
        "Search for an IMPOSTOR",
        "assets/default.png",
        TaskOne,
        InvestigateOne
    );
}

function TaskOne() {
    UpdateGame(
        RandomStatModify(),
        RandomStatModify(),
        "You decide to continue about your day and eject the trash from the ship. Your crewmates appreciate your work, but grow suspicious of the fact that you are ignoring the more pressing issue. After ejecting the trash, you notice an open vent on the wall...",
        "Investigate the vent",
        "Return to the cafeteria",
        "assets/default.png",
        InvestigateTwo,
        MeetingOne
    );
}

function TaskTwo() {
    UpdateGame(
        RandomStatModify(),
        RandomStatModify(),
        "You go to perform your task in electrical, the site of the original murder. You notice a shiny object on the ground and discover that it is a knife. Upon picking up the knife, you hear someone else enter the room. You fear it may be the IMPOSTOR…",
        "Use the knife to eliminate the stranger",
        "Wait to see who entered the room",
        "assets/default.png",
        MiscOne,
        MiscTwo
    );
}

function InvestigateOne() {
    UpdateGame(
        -1 * RandomStatModify(),
        RandomStatModify(),
        "You decide to search for evidence of whether or not there is an IMPOSTOR on the ship. Some appreciate your help in getting to the bottom of this, but others are annoyed that they must now do your tasks. While searching the ship, you notice a crewmate acting suspiciously around a vent...",
        "Call a meeting and inform the crew",
        "Ignore the crewmate",
        "assets/default.png",
        MeetingTwo,
        MeetingThree
    );
}

function InvestigateTwo() {
    UpdateGame(
        RandomStatModify(),
        0,
        "You look inside the open vent and discover nothing. Upon turning around, a crewmate notices your suspicious action. He immediately calls a meeting, believing you are the IMPOSTOR...",
        "Go to the meeting",
        "You have no other choice",
        "assets/default.png",
        MeetingFour,
        MeetingFour
    );
}

function MiscOne() {
    UpdateGame(
        RandomStatModify(),
        -1 * RandomStatModify(),
        "In fear, you kill the crewmate before seeing who they are. Upon further inspection, you see that it is the crewmate you had previously accused of being an IMPOSTOR. Another crewmate enters the room and immediately calls an emergency meeting…",
        "Go to the meeting",
        "You have no other choice",
        "assets/default.png",
        MeetingSeven,
        MeetingSeven
    );
}

function MiscTwo() {
    UpdateGame(
        0,
        RandomStatModify(),
        "Upon closer inspection, you discover that the crewmate is the one you had previously accused of being an IMPOSTOR. He thanks you for revoking your accusation. Another crewmate enters the room and, out of paranoia, calls an emergency meeting, believing that you two are IMPOSTORS. On the way to the meeting, you are considering your options…",
        "Make an agreement with the other crewmate that you will both deny being IMPOSTORS",
        "Place the knife on the other crewmate and accuse them of being an IMPOSTOR",
        "assets/default.png",
        EndingSeven,
        () => { if (reputationLevel >= 70) EndingEight(); if (reputationLevel < 70) EndingNine(); }
    );
}

function MeetingOne() {
    UpdateGame(
        -1 * RandomStatModify(),
        RandomStatModify(),
        "Upon returning to the cafeteria, you are made aware that one of your crewmates has been accused of being an IMPOSTOR. A meeting is called. The accuser states that he saw the accused in a vent. The accused claims he was only investigating, trying to find an IMPOSTOR. You know the accuser is always complaining about the accused overeating rations on the ship and suspect this may be a ploy to get rid of him…",
        "Tell the group you believe the accuser is making a false accusation",
        "Vote the accused off the ship",
        "assets/default.png",
        MeetingFive,
        EndingTen
    );
}

function MeetingTwo() {
    UpdateGame(
        -1 * RandomStatModify(),
        RandomStatModify(),
        "The whole crew is called to the cafeteria, and you tell them what you saw. The accused crewmate claims he was only investigating, trying to find an IMPOSTOR. You suspect they may be telling the truth, but you also know that voting them off the ship will end the hunt and ensure your safety…",
        "Revoke your accusation and continue with your tasks",
        "Falsify more evidence against the crewmate to get them voted off",
        "assets/default.png",
        TaskTwo,
        EndingFourteen
    );
}

function MeetingThree() {
    UpdateGame(
        -1 * RandomStatModify(),
        RandomStatModify(),
        "A third crewmate sees you two near the vent and calls a meeting. He states that you two were acting strange near the vent and may both be IMPOSTORS…",
        "Lie and say you saw the other crewmate come out of a vent",
        "Say that you and the other crewmate were only investigating and are not guilty",
        "assets/default.png",
        () => { if (reputationLevel >= 70) EndingFifteen(); if (reputationLevel < 70) EndingSixteen(); },
        MeetingSeven
    );
}

function MeetingFour() {
    UpdateGame(
        -1 * RandomStatModify(),
        RandomStatModify(),
        "You are put to trial before the other crewmates. They believe you are the IMPOSTOR because only an IMPOSTOR would go anywhere near a vent. Desperate for a conviction, the crew gives you two options. You can admit to being guilty and be dropped at the nearest planet, or you can deny, but you will be sent out the airlock...",
        "Confess",
        "Deny",
        "assets/default.png",
        EndingOne,
        () => { if (reputationLevel >= 70) EndingTwo(); if (reputationLevel < 70) EndingThree(); }
    );
}

function MeetingFive() {
    UpdateGame(
        -1 * RandomStatModify(),
        RandomStatModify(),
        "You voice your concerns about the validity of the accusation. This saved the accused crewmate, but suspicion turns to you. The crew demands that you reveal who you believe the IMPOSTOR is. You consider your options…",
        "Accuse an outsider crewmate of being the IMPOSTOR",
        "Take the fall and state that you are the IMPOSTOR, saving everyone else from accusation",
        "assets/default.png",
        () => { if (reputationLevel >= 70) EndingEleven(); if (reputationLevel < 70) EndingTwelve(); },
        EndingThirteen
    );
}

function MeetingSix() {
    UpdateGame(
        -1 * RandomStatModify(),
        RandomStatModify(),
        "Desperate for a conviction, the crew demands that if none of you are IMPOSTORS, then you must name who the IMPOSTOR is. You are unsure who it is, but must make an accusation if you wish to avoid guilt…",
        "Accuse an outsider vrewmate of being the IMPOSTOR",
        "Take the fall and state that you are the IMPOSTOR, saving everyone else from accusation",
        "assets/default.png",
        () => { if (reputationLevel >= 70) EndingEleven(); if (reputationLevel < 70) EndingTwelve(); },
        EndingThirteen
    );
}

function MeetingSeven() {
    UpdateGame(
        -1 * RandomStatModify(),
        RandomStatModify(),
        "You are put to trial before the other crewmates. You see two possible options. You can admit to being the IMPOSTOR, even if the murder was an accident, or you can accuse the crewmate you murdered of being the IMPOSTOR once more, potentially avoiding guilt…",
        "Admit",
        "Accuse",
        "assets/default.png",
        EndingFour,
        () => { if (reputationLevel >= 70) EndingFive(); if (reputationLevel < 70) EndingSix(); }
    );
}

function EndingOne() {
    UpdateGame(
        0,
        0,
        "You figure that your best chance at survival is admitting to being an IMPOSTOR. Happy to have resolved the situation, the crew drops you off at a nearby spaceport. You had to lie and will forever be seen by your former crew as an IMPOSTOR, but at least you remain among the living…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingTwo() {
    UpdateGame(
        0,
        0,
        "You refuse to admit to being an IMPOSTOR, even if it means death. The more sensible crewmates believe this is going too far, but the majority’s judgement is clouded by paranoia. Upon being sent out the airlock, the unclouded few salute to you. You may be lost in space, but they will remember you as an honorable crewmate…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingThree() {
    UpdateGame(
        0,
        0,
        "You refuse to admit to being an IMPOSTOR, even if it means death. The more sensible crewmates believe this is going too far, and they raise their concerns. Your reputation placates the majority’s desire to convict, and you are spared. Fortunately, an autopsy reveals that the dead crewmate died of an allergic reaction. 0 IMPOSTORS were ever on the ship…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingFour() {
    UpdateGame(
        0,
        0,
        "You admit to being the IMPOSTOR, after all, you are guilty of murder. You are swiftly sent out the airlock and forgotten in space. Your reputation may be gone, but at least the victim of your murder will not be falsely remembered as an IMPOSTOR himself…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingFive() {
    UpdateGame(
        0,
        0,
        "You state that the murder was done out of self defense because your victim was in fact the IMPOSTOR. Your good reputation among the crew leads them to believe your alibi. You may have resolved the situation and saved yourself from persecution, but you did so at the cost of the reputation of your victim…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingSix() {
    UpdateGame(
        0,
        0,
        "You state that the murder was done out of self defense because your victim was in fact the IMPOSTOR. You do not have a great reputation with the crew, and they do not believe your alibi. IMPOSTOR or not, you are a murderer, and you are swiftly sent out the airlock, forgotten in space…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingSeven() {
    UpdateGame(
        0,
        0,
        "You and your fellow crewmate deny being IMPOSTORS. The crew is desperate to find someone to blame, and decide that you two are the most suspicious. Clouded by paranoia, they decide to have you two sent out the airlock. You are both to die, but neither will die a traitor. However, when about to be blasted into space, it is discovered that the victim died of an allergic reaction. You two are saved. There were 0 IMPOSTORS on the ship…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingEight() {
    UpdateGame(
        0,
        0,
        "At the meeting, you reveal the knife you planted on the other crewmate. They deny being the IMPOSTOR, but your reputation exceeds theirs. The crew accepts the knife as undeniable proof that the other crewmate is guilty, and they are promptly sent out the airlock. You saved yourself, but sent an innocent crewmate to their death…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingNine() {
    UpdateGame(
        0,
        0,
        "At the meeting, you reveal the knife you planted on the other crewmate. They deny being the IMPOSTOR, stating that they were only preparing a steak. Their reputation exceeds yours, and suspicion turns to you; only an IMPOSTOR would accuse an innocent crewmate of murder. The crew determines that you are guilty, and they promptly send you out the airlock to be forgotten in space…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingTen() {
    UpdateGame(
        0,
        0,
        "The crew decides to vote the accused off the ship. Despite little evidence, paranoia clouds the crew’s judgement. The situation has been resolved, but you can’t help but feel that you sent an innocent crewmate to their death…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingEleven() {
    UpdateGame(
        0,
        0,
        "You accuse the most solitary crewmate of being the IMPOSTOR. Due to your reputation, the crew believes you without question. Desperate to resolve the situation, the crew ejects the solitary crewmate out the airlock. The situation has been resolved, but you feel immense guilt for sending an innocent crewmate to their death…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingTwelve() {
    UpdateGame(
        0,
        0,
        "You accuse the most solitary crewmate of being the IMPOSTOR. However, you have a poor reputation among the crew, and the outsider has a good explanation for their innocence. Your lie brings guilt to yourself, and the crew begins to believe that you are the IMPOSTOR. In desperation to resolve the situation, you are swiftly sent out the airlock. You are forgotten in space as a liar…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingThirteen() {
    UpdateGame(
        0,
        0,
        "You state that you are the IMPOSTOR to save everyone else from false accusations. You are to be sent out the airlock, but your reputation makes the crew hesitant to do so. In the crew’s hesitation, it is discovered that the murdered crewmate actually died of an allergic reaction. There were 0 IMPOSTORS on the ship, and everyone is saved from accusation…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingFourteen() {
    UpdateGame(
        0,
        0,
        "You lie and tell the crew that you also saw the accused crewmate tampering with the engines. The crew decides to vote them off the ship. Despite only having an accusation from one person, the crew has their judgement clouded by paranoia. The situation has been resolved, but you can’t help but feel that you sent an innocent crewmate to their death…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingFifteen() {
    UpdateGame(
        0,
        0,
        "You tell the crew that you saw the other crewmate come out of a vent and that they are the IMPOSTOR. Due to your reputation, the crew believes you without question. Desperate to resolve the situation, the crew ejects the solitary crewmate out the airlock. The situation has been resolved, but you feel immense guilt for sending an innocent crewmate to their death…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}

function EndingSixteen() {
    UpdateGame(
        0,
        0,
        "You tell the crew that you saw the other crewmate come out of a vent and that they are the IMPOSTOR. The other crewmate says the same about you. Due to the other crewmate’s superior reputation, the crew believes them without question. Desperate to resolve the situation, the crew ejects you out the airlock. You can’t help but feel that telling the truth would have saved your life…",
        "Restart Game",
        "Restart Game",
        "assets/default.png",
        Intro,
        Intro
    );
}