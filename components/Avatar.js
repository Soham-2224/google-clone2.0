import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';

function Avatar({ className }) {
   const { data: session } = useSession();
   const getOut = () => signOut();
   return (
      <div className="flex flex-col group">
         <img
            src={session?.user?.image}
            onClick={getOut}
            alt="Profile pic"
            className={`h-10 absolute top-5 right-2 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
         />
         <span className="p-5 bg-gray-50 shadow-md hidden link group-hover:inline-flex absolute top-20 right-5">
            {session?.user?.email}
         </span>
      </div>
   );
}

export default Avatar;
