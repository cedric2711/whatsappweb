let chats = {
  "id1": {
    id: "id1",
    timestamp: 1467166872634,
    text: "message 1",
  },
  "id2": {
    id: "id2",
    timestamp: 1467166872635,
    text: "message 2",
  },
  "id3": {
    id: "id3",
    timestamp: 1467166872636,
    text: "message 3",
  },
  "id4": {
    id: "id4",
    timestamp: 1467166872637,
    text: "message 4",
  },
  "id5": {
    id: "id5",
    timestamp: 1467166872638,
    text: "message 5",
  },
  "id6": {
    id: "id6",
    timestamp: 1467166872639,
    text: "message 6",
  },
  "id7": {
    id: "id7",
    timestamp: 1467166872640,
    text: "message 7",
  },
  "id8": {
    id: "id8",
    timestamp: 1467166872641,
    text: "message 8",
  },
  "id9": {
    id: "id9",
    timestamp: 1467166872642,
    text: "message 9",
  },
  "id10": {
    id: "id10",
    timestamp: 1467166872643,
    text: "message 10",
  },
  "id11": {
    id: "id11",
    timestamp: 1467166872644,
    text: "message 11",
  },
  "id12": {
    id: "id12",
    timestamp: 1467166872645,
    text: "message 12",
  },
  "id13": {
    id: "id13",
    timestamp: 1467166872646,
    text: "message 13",
  },
  "id14": {
    id: "id14",
    timestamp: 1467166872647,
    text: "message 14",
  },
  "id15": {
    id: "id15",
    timestamp: 1467166872648,
    text: "message 15",
  },
  "id16": {
    id: "id16",
    timestamp: 1467166872649,
    text: "message 16",
  },
  "id17": {
    id: "id17",
    timestamp: 1467166872650,
    text: "message 17",
  },
  "id18": {
    id: "id18",
    timestamp: 1467166872651,
    text: "message 18",
  }
}

let users = {
  simon: {
    id: "simon",
    name: "Simon Jude",
    avatarURL: "images/icons/Man-1.svg",
    friendList: {
      chetan: ["id1", "id3", "id5"],
      cedric: ["id8", "id10", "id12"]
    }
  },
  chetan: {
    id: "chetan",
    name: "Chetan Narvekar",
    avatarURL: "images/icons/Man-6.svg",
    friendList: {
      simon: ["id2", "id4", "id6"],
      cedric: ["id13", "id15", "id17"]
    }
  },
  cedric: {
    id: "cedric",
    name: "Cedric Mascarenhas",
    avatarURL: "images/icons/Man-9-.svg",
    friendList: {
      simon: ["id7", "id9", "id11"],
      chetan: ["id14", "id16", "id18"]
    }
  },

}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000)
  })
}

export function _getChats() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...chats }), 1000)
  })
}

function formatChat(message) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    text: message
  }
}
export function _updateChat(chat) {
  return new Promise((res, rej) => {
    const { authedUser, friendChat } = chat;
    const formattedChat = formatChat(chat.message);

    setTimeout(() => {
      chats = {
        ...chats,
        [formattedChat.id]: formattedChat
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          friendList: {
            ...users[authedUser].friendList,
            [friendChat]: users[authedUser].friendList[friendChat].concat([formattedChat.id])
          }
        }
      }
      console.log('chats');
      console.log(chats);
      console.log(users);
      res(formattedChat)
    }, 1000)
  })
}
