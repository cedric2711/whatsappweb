let chats = {
  "id1": {
    timestamp:1467166872634,
    text: "message 1",
  },
  "id2": {
    timestamp:1467166872635,
    text: "message 2",
  },
  "id3": {
    timestamp:1467166872636,
    text: "message 3",
  },
  "id4": {
    timestamp:1467166872637,
    text: "message 4",
  },
  "id5": {
    timestamp:1467166872638,
    text: "message 5",
  },
  "id6": {
    timestamp:1467166872639,
    text: "message 6",
  },
  "id7": {
    timestamp:1467166872640,
    text: "message 7",
  },
  "id8": {
    timestamp:1467166872641,
    text: "message 8",
  },
  "id9": {
    timestamp:1467166872642,
    text: "message 9",
  },
  "id10": {
    timestamp:1467166872643,
    text: "message 10",
  },
  "id11": {
    timestamp:1467166872644,
    text: "message 11",
  },
  "id12": {
    timestamp:1467166872645,
    text: "message 12",
  },
  "id13": {
    timestamp:1467166872646,
    text: "message 13",
  },
  "id14": {
    timestamp:1467166872647,
    text: "message 14",
  },
  "id15": {
    timestamp:1467166872648,
    text: "message 15",
  },
  "id16": {
    timestamp:1467166872649,
    text: "message 16",
  },
  "id17": {
    timestamp:1467166872650,
    text: "message 17",
  },
  "id18": {
    timestamp:1467166872651,
    text: "message 18",
  }
}

let users = {
  simon: {
    id: "simon",
    name: "Simon Jude",
    avatarURL: "src/images/icons/Man-1.svg",
    friendList: {
      chetan: ["id1", "id3", "id5"],
      cedric: ["id8", "id10", "id12"]
    }
  },
  chetan: {
    id: "chetan",
    name: "Chetan Narvekar",
    avatarURL: "src/images/icons/Man-6.svg",
    friendList: {
      simon: ["id2", "id4", "id6"],
      cedric: ["id13", "id15", "id17"]
    }
  },
  cedric: {
    id: "cedric",
    name: "Cedric Mascarenhas",
    avatarURL: "src/images/icons/Man-9.svg",
    friendList: {
      simon: ["id7", "id9", "id11"],
      chetan: ["id14", "id16", "id18"]
    }
  },

}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getChats () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}
