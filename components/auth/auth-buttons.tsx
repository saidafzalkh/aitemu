"use client";

import { Loader2, LogOut } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import { ReactElement, useState } from "react";

import { cn } from "@/lib/shadcn";

import Icons from "../icons";
import { Button, ButtonProps } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface buttonProps extends ButtonProps {}

export const GoogleButton = ({ ...props }: buttonProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={props.variant || "outline"}
      size={props.size || "sm"}
      className={cn("", props.className)}
      onClick={loginWithGoogle}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="animate-spin h-4 w-4 mr-2" />
      ) : (
        <Icons.google className="h-4 w-4 mr-2 fill-foreground" />
      )}
      Google
    </Button>
  );
};

export const GithubButton = ({ ...props }: buttonProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGithub = async () => {
    setIsLoading(true);

    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Github",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={props.variant || "outline"}
      size={props.size || "sm"}
      disabled={isLoading}
      className={cn("", props.className)}
      onClick={loginWithGithub}
    >
      {isLoading ? (
        <Loader2 className="animate-spin h-4 w-4 mr-2" />
      ) : (
        <Icons.github className="h-4 w-4 mr-2 fill-foreground" />
      )}
      GitHub
    </Button>
  );
};

export const SignOutButton = ({ ...props }: buttonProps): ReactElement => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong while log out, try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button {...props} onClick={handleSignOut} disabled={isLoading}>
      {isLoading ? (
        <Loader2 className="animate-spin h-4 w-4 mr-2" />
      ) : (
        <LogOut className="h-4 w-4 mr-2" />
      )}
      Sign Out
    </Button>
  );
};
