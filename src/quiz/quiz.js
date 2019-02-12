const quizNode = document.getElementById('quiz');

quizNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizNode);
    const answers = {
        descriptor: formData.get('word'),
        color: formData.get('color'),
        animal: formData.get('animal')
    };
    const json = JSON.stringify(answers);
    window.localStorage.setItem('answers', json);
});