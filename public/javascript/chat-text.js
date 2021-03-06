async function newDMHandler(event) {
    event.preventDefault();

    const chat_id = document.querySelector('.chat-form').getAttribute('data-chat-id');
    const chat_text = document.querySelector('#chat-input').value;
    
    console.log(chat_id, chat_text)

    const response = await fetch(`/api/texts`, {
        method: 'POST',
        body: JSON.stringify({
            chat_id,
            chat_text
        }),
        headers: {
            'Content-Type': 'application/json'  
        }
    });

    if(response.ok) { 
        document.location.replace('/chat/' + chat_id);
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#new-direct-message').addEventListener('click', newDMHandler);