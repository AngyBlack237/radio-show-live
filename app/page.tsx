'use client';
import {useEffect} from 'react';
import body from './radio-html';
export default function Home(){useEffect(()=>{const upload=document.createElement('script');upload.src='/upload.js';document.body.appendChild(upload);const script=document.createElement('script');script.src='/app.js';document.body.appendChild(script);return()=>{script.remove()}},[]);return <><link rel="stylesheet" href="/style.css"/><div dangerouslySetInnerHTML={{__html:body}}/></>}
