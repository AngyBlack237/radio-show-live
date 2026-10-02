import {cookies} from 'next/headers';
export const owner='angychoupy@gmail.com';
export const url=process.env.NEXT_PUBLIC_SUPABASE_URL!;
export const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
export async function token(){return (await cookies()).get('radio_access')?.value||key;}
export async function api(path:string,options:RequestInit={}){const r=await fetch(url+path,{...options,cache:'no-store',headers:{apikey:key,...((await token())!==key?{Authorization:'Bearer '+await token()}:{}),'Content-Type':'application/json',...options.headers}});const data=await r.json().catch(()=>null);if(!r.ok)throw Error(data?.message||data?.msg||'Opération Supabase impossible.');return data;}
export async function user(){try{return await api('/auth/v1/user')}catch{return null}}
export async function authorized(){const u=await user();return !!u?.email_confirmed_at&&u.email?.toLowerCase()===owner;}
export function sameOrigin(req:Request){return req.headers.get('origin')===new URL(req.url).origin;}
export const result=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
export function clean(x:unknown,max=200){if(typeof x!=='string'||!x.trim()||x.length>max)throw Error('Champ vide ou trop long.');return x.trim();}
export function audioURL(x:unknown){const s=clean(x,2000);const u=new URL(s);if(u.protocol!=='https:'||u.username||u.password)throw Error('Adresse HTTPS requise.');return u.href;}
export const table=(name:string,query='')=>api('/rest/v1/'+name+'?'+query);
export const write=(name:string,value:unknown,method='POST',query='')=>api('/rest/v1/'+name+'?'+query,{method,headers:{Prefer:'return=representation,resolution=merge-duplicates'},body:JSON.stringify(value)});
export async function signed(path:string){const d=await api('/storage/v1/object/sign/radio-audio/'+path,{method:'POST',body:JSON.stringify({expiresIn:3600})});return url+'/storage/v1'+d.signedURL;}
