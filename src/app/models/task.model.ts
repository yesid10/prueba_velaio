import { Person } from "./person.model";

export interface Task {
    id: number;
    name: string;
    deadline: Date;
    completed: boolean;
    persons: Person[];
}