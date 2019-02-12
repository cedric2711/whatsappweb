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

export const getTime =(timestamp) => {
    let date = new Date(timestamp);
    let hour = date.getHours();
    let min= date.getMinutes();
    let time = (hour>12)?`${hour%12}:${min}PM`:`${hour}:${min}AM`;
    return time;
}

export const getFullDate = (date) => {
    let year= date.getFullYear();
    let month= date.getMonth()+1;
    let day= date.getDate();
    return `${month}/${day}/${year}`;
}
