import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendGrupoEDCAForm(nombre: string, email: string,
                    whatsapp: string, mensaje: string): Observable<any> {
          return this.http.get(environment.mailUrl,
                {responseType: 'text', params: { nombre, email, whatsapp, mensaje}} );
  }

}
