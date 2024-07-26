import GridPattern from "@/components/magicui/animated-grid-pattern";
import TypingAnimation from "@/components/magicui/typing-animation";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ShineBorder from "@/components/magicui/shine-border";
import DotPattern from "@/components/magicui/dot-pattern";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import TextReveal from "@/components/magicui/text-reveal";


const Home = () => {
  return (
    <>
      <section className="h-full w-auto text-center text-slate-900 ">
        <h1 className="mt-52 text-4xl font-bold uppercase z-10">
          Welcome to
          <span className="block ">
            <TypingAnimation
              duration={100}
              className="text-8xl font-bold uppercase "
              text="Gigatel Communication"
            />
          </span>
        </h1>
        <h2 className="my-5 text-xl text-slate-950 z-10">
          Your Gateway to Lightning-Fast Internet
        </h2>
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
      </section>
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="flex-col md:flex md:flex-row gap-32 items-center justify-center text-center">
          <ShineBorder className="" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <Card className="w-200px border-0">
              <CardHeader>
                <CardTitle>BROADBAND</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Truly Unlimited With High Speed Internet !</p>
                <Button className="mt-7">Secondary</Button>
              </CardContent>
            </Card>
          </ShineBorder>

          <ShineBorder className="" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <Card className="w-200px border-0">
              <CardHeader>
                <CardTitle>Data Plan</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Get Most affordable High Speed Data Plan</p>
                <Button className="mt-7">Secondary</Button>
              </CardContent>
            </Card>
          </ShineBorder>

          <ShineBorder className="" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <Card className="w-200px border-0">
              <CardHeader>
                <CardTitle>Support</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We are Happy to Help You Any Query Call Now</p>
                <Button className="mt-7">Secondary</Button>
              </CardContent>
              {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
            </Card>
          </ShineBorder>
        </div>
      </section>
      <section className="">
        <VelocityScroll
          text="Experience the Future of Connectivity"
          default_velocity={3}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-slate-800 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </section>
      <section className="py-40 text-center">

        <div className="justify-center items-center text-justify">
          <TextReveal
            className={cn(
              "[px-0]"
            )}
            text="Switch to Gigatel Communication today and experience the difference of truly fast and reliable internet. Sign up now and get your first month free!"
          />
        </div>
      </section>
    </>
  );
}

export default Home