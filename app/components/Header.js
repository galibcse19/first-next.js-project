import Link from 'next/link';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
 

export default async function Header() {
const {getUser} = getKindeServerSession();
const user = await getUser();


  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md lg:px-10">
      <h1 className="text-xl font-bold text-black">Blog Viewer</h1>
      <nav className="flex items-center">
        <Link href="/" className="mr-4 text-black">Home</Link>
        <Link href="/profile" className="mr-4 text-black">Profile</Link>
        
        {
            user ? <LogoutLink className='mr-4 text-black'>Logout</LogoutLink> : <>
            <LoginLink className='mr-4 text-black'>Sign in</LoginLink>
            <RegisterLink className='mr-4 text-black'>Sign up</RegisterLink></>
        }
 
      </nav>
    </header>
  );
}