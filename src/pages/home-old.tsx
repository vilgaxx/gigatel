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
              text="GigaZone Communication"
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
      <section>
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden  bg-background pb-40 md:pb-60">
          <Globe className="pb-10" />
        </div>
      </section>
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="flex-col md:flex md:flex-row gap-32 items-center justify-center text-center">
          <ShineBorder className="" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <Card className="w-200px border-0">
              <CardHeader>
                <CardTitle>BROADBAND</CardTitle>
                <CardDescription></CardDescription>
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
                <CardDescription></CardDescription>
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
                <CardDescription></CardDescription>
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
      {/* <section className="">Velocity</section> */}
      <section className="py-40 text-center">
        <div className="justify-center items-center text-justify">
          <TextReveal
            className={cn("[px-0]")}
            text="Switch to GigaZone Communication today and experience the difference of truly fast and reliable internet. Sign up now and get your first month free!"
          />
        </div>
      </section>
    </>
  );
};
