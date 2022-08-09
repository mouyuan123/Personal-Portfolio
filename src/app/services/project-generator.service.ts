/**
 *  This service gets, updates, deletes and adds projects into the "Portfolio" section via the "fake" database (virtual-db/projects.json)
 */
import { Injectable } from '@angular/core';
import { Project } from '../interface/projects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectGeneratorService {
  private allProjectsUrl: string = "http://localhost:3000/project";
  // We need a header to "POST" data to server
  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient) { }

/**
 * 
 * @returns a list of projects of "Observable" type
 */
  getProjects(): Observable<Project[]>{
    const projectList = this.http.get<Project[]>(this.allProjectsUrl);
    return projectList;
  }

  /**
   * 
   * @param projectID is the id of a specific project 
   * @returns the specific project with the id corresponding to "projectID"
   */
  getProject(projectID: string): Observable<Project>{
    const specificUrl = this.allProjectsUrl+"/"+projectID;
    const specificPro = this.http.get<Project>(specificUrl);
    return specificPro;
  }
  /**
   * 
   * @param project The project we want to add to the server from the form
   * @returns "Observable" Project
   */
  addProject(project: Project): Observable<Project>{
    return this.http.post<Project>(this.allProjectsUrl, project, this.httpOptions);
  }

  /**
   * @returns specific "Observable" project that is deleted 
   */
  deleteProject(projectID: number): Observable<Project>{
    const specificUrl = this.allProjectsUrl+"/"+projectID.toString();
    return this.http.delete<Project>(specificUrl, this.httpOptions);
  }

  /**
   * 
   * @param project Specific project that need to be updated (Description only)
   * @returns An "Observable" project that is updated
   */
  updateProjectDescript(project: Project): Observable<Project>{
    return this.http.put<Project>(this.allProjectsUrl, project, this.httpOptions);
  }
}
