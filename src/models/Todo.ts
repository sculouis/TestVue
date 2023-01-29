export default class Todo {
    ID: number
    Name: string
    Done: boolean
    Selected: boolean
    constructor(id: number, name: string, done = false, selected = false) {
        this.ID = id
        this.Name = name;
        this.Done = done;
        this.Selected = selected;
    }
}
