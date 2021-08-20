function getRandomMood() {
    const moods = ['🙂', '😍', '😂', '😢', '😡', '🥴'];
    const randomIndex = Math.floor(Math.random() * moods.length);
    return moods[randomIndex];
}

const divName = document.getElementById('myDiv');
const moodButton = document.getElementById('my-button');
moodButton.addEventListener('click', () => {
    let mood = getRandomMood()
    divName.innerHTML = mood;

});


