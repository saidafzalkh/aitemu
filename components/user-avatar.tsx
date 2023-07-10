import { User as UserIcon } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/shadcn";
import { User } from "@prisma/client";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
  user?: Pick<User, "name" | "image">;
  img?: string;
}

export const UserAvatar = ({ user, ...props }: UserAvatarProps) => {
  return (
    <Avatar {...props} className={cn("w-8 h-8", props.className)}>
      {props.img ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={props.img}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <UserIcon className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
};
