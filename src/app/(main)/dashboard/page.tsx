"use client";

import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Button } from "@/components/ui/button";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex align-center justify-center m-3">
        <Button
          onClick={() => {
            router.push("/welcome-page");
          }}
        >
          Provider Onboarding
        </Button>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-between sm:justify-center gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={62} />}
          onClick={() => router.push("/posts")}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={62} />}
          onClick={() => router.push("/categories")}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-slate-500" size={62} />}
          onClick={() => router.push("/posts")}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={62} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable limit={5} />
    </>
  );
}
