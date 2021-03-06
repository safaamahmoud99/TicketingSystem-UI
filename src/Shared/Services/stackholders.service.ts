import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {stackholder} from '../Models/stackeholder'
@Injectable({
  providedIn: 'root'
})
export class StackholdersService {

  constructor(private httpClient : HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  
GetAllStackholders(): Observable <stackholder[]>{
  return this.httpClient.get<stackholder[]> (`${environment.stackeholders}`,this.httpHeader) ;
}
GetAllStackholdersByProjectID(ProjectID:Number): Observable <stackholder[]>{
  return this.httpClient.get<stackholder[]> (`${environment.GetAllStackholdersByProjectID}${ProjectID}`,this.httpHeader) ;
}

insertListOfStackholders(stackholders:stackholder[]): Observable <any >{

  return this.httpClient.post<any> (`${environment.postListOfStackholders}`,stackholders,this.httpHeader) ;
}
updatestakeholdersbyprojectid(holders:stackholder[]):Observable<stackholder[]>{
  return this.httpClient.put<stackholder[]>(`${environment.updatestakeholdersbyprojectid}`,holders,this.httpHeader);
}
deletestakeholder(id:number):Observable<any>{ 
  return this.httpClient.delete<any>(`${environment.deletestakeholder}${id}`,this.httpHeader);
}
updatestakeholder(id:Number,stackholder:stackholder):Observable<stackholder>{
  return this.httpClient.put<stackholder>(`${environment.updatestackholder}`+ id,stackholder,this.httpHeader);
}
getstackholderbyId(id:number):Observable<stackholder>
{
  return this.httpClient.get<stackholder>(`${environment.getStackholderbyId}${id}`,this.httpHeader);
}
}
