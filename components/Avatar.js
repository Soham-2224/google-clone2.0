import Image from "next/image";

function Avatar({ url, className }) {
   return (
      //   <Image
      //      loading="lazy"
      //      src={url}
      //      alt="Profile pic"
      //      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      //   />
      <Image
         src={url}
         height={40}
         width={40}
         alt="Profile pic"
         className={`h-10 rounded-full cursor-pointer ${className}`}
      />
   );
}

export default Avatar;
