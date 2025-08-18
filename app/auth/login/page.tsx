
import LogIn from "./_components/log-in";
import LoginSlider from "./_components/login-slider";
const Page = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 p-[24px] ">
      <LogIn/>
      <div className="relative hidden lg:block rounded-[20px]  ">
        <LoginSlider/>
      </div>
    </div>
  );
};

export default Page;
