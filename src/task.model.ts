export class Task {
    public name: string;
    public notes: string;

    constructor(nameIn: string, notesIn: string) {
        this.name = nameIn;
        this.notes = notesIn;
    }
}