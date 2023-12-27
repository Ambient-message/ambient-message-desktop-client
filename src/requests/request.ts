import axios from "axios"

const baseUrl = 'http://127.0.0.1:8888';

type RequestType = "GET" | "POST" | "DELETE";

export function Request<T>(path: string, type: RequestType, params?: any, body?: T){
    return new Promise<T | void>((resolve, reject) => {
        axios({
            method : type,
            url : `${baseUrl}/${path}`,
            params: params,
            data : body,
        }).then(response => {   
            if(response.status >= 200 && response.status < 300){
                resolve(response.data)
            }
            else{
                reject();
            }
        }).catch(error => {
                console.log(`${error}`)
        })
    });
}