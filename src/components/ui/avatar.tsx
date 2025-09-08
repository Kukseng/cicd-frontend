import React from "react";
import Image from "next/image";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback?: string;
  alt?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  fallback,
  alt,
  className,
  ...props
}) => {
  return (
    <div
      className={`relative rounded-full overflow-hidden ${className}`}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt="sxaasas"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-300 text-white font-bold">
          {fallback || "?"}
        </div>
      )}
    </div>
  );
};

export const AvatarImage = Avatar;

export const AvatarFallback: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-gray-300 text-white font-bold ${className}`}
    >
      {children}
    </div>
  );
};
