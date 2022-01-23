import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
   const getIn = () => {
      signIn();
   };
   return (
      <div className="flex flex-col w-full absolute h-full items-center justify-center bg-gray-100">
         <Image
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={100}
            width={300}
            alt=""
         />
         <button onClick={getIn} className="btn mt-5 border w-1/6">
            Sign In
         </button>
      </div>
   );
}

export default Login;
