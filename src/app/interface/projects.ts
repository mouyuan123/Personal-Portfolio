export interface Project{
    id?: number;
    Name: string;
    Role: string;
    Description: string;
    URL?: string;          // Link my project to "Github" for viewing
    Tech: string;
    Highlight?: string;
    images?: string[];
}