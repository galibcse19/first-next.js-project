 
 
import {  getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function Profile() {
 
const {getUser} = getKindeServerSession();
const user = await getUser();
console.log(user)
 
  return (
    <div className="p-4">
      <div className="mt-6">
        <p>Welcome to your profile!</p>
        {
            !user ? <p>Please Signup/login first</p>: <p>Welcome {user?.email}</p>
        }
      </div>
    </div>
  );
}