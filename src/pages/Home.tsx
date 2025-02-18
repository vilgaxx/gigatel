import GridPattern from "@/components/magicui/animated-grid-pattern";
import TypingAnimation from "@/components/magicui/typing-animation";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <>
      <section className="h-full w-auto text-center text-slate-900 ">
        <h1 className="mt-40 text-4xl font-bold uppercase z-10">
          Welcome to
          <span className="block ">
            <TypingAnimation
              duration={100}
              className="text-8xl font-bold uppercase "
              text="GigaZone"
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
    </>
  );
};

export default Home;
