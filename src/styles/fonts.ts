import { Montserrat } from "next/font/google";
 
const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});


export { montserrat }