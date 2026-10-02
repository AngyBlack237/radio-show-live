import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'RADIO LIVE-SHOW · L’Afrique en direct',description:'Radio digitale panafricaine : émissions, replays et artistes.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
