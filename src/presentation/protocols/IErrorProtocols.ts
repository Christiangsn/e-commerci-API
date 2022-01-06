import { HttpRequest, HttpResponse } from './IHttpProtocols'

export interface IErrorProtocols {
    handle (httpRequest: HttpRequest): Promise<HttpResponse>
}
