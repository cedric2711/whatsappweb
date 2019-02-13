import { formatChat, getTime, getFullDate } from './commonUtils';

describe('commonUtils', () => {
    describe('formatChat', () => {
        let chats = {
            "id1": {
                id: "id1",
                timestamp: 1549000872634,
                text: "message 1",
            },
            "id2": {
                id: "id2",
                timestamp: 1549000872635,
                text: "message 2",
            },
            "id3": {
                id: "id3",
                timestamp: 1549000872636,
                text: "message 3",
            },
            "id4": {
                id: "id4",
                timestamp: 1549000872637,
                text: "message 4",
            }
        };
        let expectedOrder = [
            {
                id: 'id1',
                text: 'message 1',
                timestamp: 1549000872634,
                user: 'simon'
            },
            {
                id: 'id2',
                text: 'message 2',
                timestamp: 1549000872635,
                user: 'chetan'
            },
            {
                id: 'id3',
                text: 'message 3',
                timestamp: 1549000872636,
                user: 'simon'
            },
            {
                id: 'id4',
                text: 'message 4',
                timestamp: 1549000872637,
                user: 'chetan'
            }];

        let authUser = "simon";
        let authUserChatIDs = ["id1", "id3"];
        let friend = "chetan";
        let friendChatIDs = ["id2", "id4"];

        describe('take in authUser, authUserChatIDs, friend, friendChatIDs and the chats', () => {
            let result = formatChat(authUser, authUserChatIDs, friend, friendChatIDs, chats);
            it('Result should be an array', () => {
                expect.arrayContaining(result);
            });
            it('Should return an array of chats sorted by their timestamp', () => {
                expect(result).toEqual(expectedOrder);
            })
        })
    });

    describe('getTime', () => {
        let timestamp = 1549000872634;
        describe('convert timestamp into time format', () => {
            let result = getTime(timestamp);
            it('Correct Format', () => {
                expect(result).toEqual("11:31AM");
            });
            it('Incorrect Format', () => {
                expect(result).not.toEqual("11:31PM");
            });
        });
    });

    describe('getFullDate', () => {
        let testDate = new Date(1549000872634);

        describe('Tate a date object and return in requied format', () => {
            let result = getFullDate(testDate);
            it('is of the format mm/dd/yyyy', () => {
                expect(result).toEqual('2/1/2019');
            })

            it('is not in the format dd/mm/yyyy', () => {
                expect(result).not.toEqual('1/2/2019');
            })
        });
    });
});