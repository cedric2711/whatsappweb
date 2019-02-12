"user strict";

const extractChat = (user, userChat, chats) =>{
    return userChat.map((chatID) =>{
        if(chats[chatID]){
            let chat= chats[chatID];
            return {
                id: chatID,
                text: chat.text,
                timestamp: chat.timestamp,
                user 
            }
        }
    });
}

export const formatChat = (authedUser, authUserChat, frndID, frndChat, chats) => {
    
    let chatHistory = extractChat(authedUser, authUserChat, chats);
    chatHistory = chatHistory.concat(extractChat(frndID, frndChat, chats));
    return chatHistory.sort((a,b)=> a.timestamp - b.timestamp);
}