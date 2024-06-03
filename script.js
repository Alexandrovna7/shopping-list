/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = querySelector('#input');
const item = querySelector('.items');
const container = querySelector('.groceries');


item.addEventListener('enter', function()) {
    const newMessage = document.createElement('div');
    const messageText = sendInput.value;
    newMessage.textContent = messageText;

    const elements = document.querySelectorAll('.items');
    item.addEventListener('click', function() {
        item.classList.toggle('done');

    if (messageText != '') {
        container.append(newMessage);
    }
    sendInput.value = '';
});
}