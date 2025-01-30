export class FirebaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FirebaseError';
    }
}