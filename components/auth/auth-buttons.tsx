"use client";

import { Loader2, LogOut } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import { ReactElement, useState } from "react";

import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/shadcn";

import Icons from "../icons";
import { Button, ButtonProps } from "../ui/button";

interface buttonProps extends ButtonProps {}

export const GoogleButton = ({ ...props }: buttonProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSignIn = async () => {
    setLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error!",
        description:
          "There was error sign in with Google. Try again or use another Provider",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSignIn}
      disabled={loading}
      variant={props.variant || "outline"}
      size={props.size || "sm"}
      className={cn("", props.className)}
    >
      {loading ? (
        <Loader2 className="animate-spin w-4 h-4 mr-2" />
      ) : (
        <Icons.google className="fill-foreground mr-2" />
      )}
      Google
    </Button>
  );
};

export const GithubButton = ({ ...props }: buttonProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSignIn = async () => {
    setLoading(true);

    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error!",
        description:
          "There was error sign in with Github. Try again or use another Provider",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSignIn}
      disabled={loading}
      variant={props.variant || "outline"}
      size={props.size || "sm"}
      className={cn("", props.className)}
    >
      {loading ? (
        <Loader2 className="animate-spin w-4 h-4 mr-2" />
      ) : (
        <Icons.github className="fill-foreground mr-2" />
      )}
      GitHub
    </Button>
  );
};

export const SignOutButton = ({ ...props }: buttonProps): ReactElement => {
  return (
    <Button {...props} onClick={() => signOut()}>
      <LogOut className="h-4 w-4 mr-2" />
      Sign Out
    </Button>
  );
};
