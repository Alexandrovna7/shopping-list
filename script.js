/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = querySelector('#input');
sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
    console.log(event);
    }
})
    const newMessage = document.createElement('items');
    newMessage.addEventListener('click', function() {
        newMessage.classList.toggle('done');
        if (messageText != '') {
            container.append(newMessage);
        }
        sendInput.value = '';
});



