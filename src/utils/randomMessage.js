const messages = [
    "Reply Message 1",
    "Reply Message 2",
    "Reply Message 3",
    "Reply Message 4",
    "Reply Message 5",
    "Reply Message 6",
    "Reply Message 7",
    "Reply Message 8",
    "Reply Message 9",
    "Reply Message 10",
    "Reply Message 11",
    "Reply Message 12",
    "Reply Message 13",
    "Reply Message 14",
    "Reply Message 15",
    "Reply Message 16",
    "Reply Message 17",
    "Reply Message 18",
    "Reply Message 19",
    "Reply Message 20",
];

export const getRandomMessage = () => {
    let randomIndex = Math.round(Math.random()*100)%20;
    return messages[randomIndex];
}