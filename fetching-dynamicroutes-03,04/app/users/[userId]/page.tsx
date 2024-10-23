import React, { Suspense } from "react";
import getAllUsers from "@/app/lib/getAllUsers";

import getUser from "../../lib/getUser";
import getUserPosts from "@/app/lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";

import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  if (!user?.name) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: user.name,
    description: `This is the page ${user.name}`,
  };
}

export default async function User({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  if (!user?.name) return notFound();

  return (
    <>
      <h1>{user.name}</h1>
      <h2>Posts</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = await getAllUsers();
  const users = await usersData;

  return users.map((user: User) => ({
    userId: user.id.toString(),
  }));
}
