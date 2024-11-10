import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent >
      <TabsContent value="register" className="md:w-[500px] h-[700px] overflow-auto">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
