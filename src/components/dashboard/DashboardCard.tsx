import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";
import { LucideIcon } from "lucide-react";
interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  onClick?: () => void;
}
const DashboardCard = ({ title, count, icon, onClick }: DashboardCardProps) => {
  
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0 hover:cursor-pointer hover:scale-105 translate-y-2 ease-out-quart">
      <CardContent onClick={onClick}>
        <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
