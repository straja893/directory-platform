import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-3 py-5 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="">
          <Image src="/logo.webp" alt="logo" width={50} height={50} />
        </Link>
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <Button type="submit">Logout</Button>
              </form>
              <Link href={`/user/${session?.user.id}`}>
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <AvatarFallback className="bg-blue-500 text-white">
                    CN
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <Button type="submit">Log In</Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
