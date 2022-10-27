export interface Project{
    id?: number;
    projectDefaultImg: string;
    projectName: string;
    projectCategory: string;   // Sort the projects using "Isotope" in angular
    projectDate: string;
    projectRole: string;
    projectDescription: string;
    projectURL?: string;          // Link my project to "Github" for viewing
    projectImg?: string[];
}