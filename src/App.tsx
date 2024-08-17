import { Menu } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header className="sticky top-0 h-20 items-center bg-background px-4 md:px-36">
        <nav className="hidden flex-col  text-lg font-medium md:flex md:flex-row md:items-center md:text-sm  justify-between">
          <div className="mb-4 mt-2">
            <Link
              to="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              {/* <Package2 className="h-6 w-6" /> */}
              <img
                className="h-10 w-auto"
                src="src\assets\1transparent.png"
                alt="GigaZone Logo"
              />
              <span className="sr-only">WifiWala</span>
            </Link>
          </div>
          <div className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              to="/"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/dataplan"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Data Plan
            </Link>
            <Link
              to="/aboutus"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              to="/legal"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Legals
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms & Conditions
            </Link>
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                {/* <Package2 className="h-6 w-6" /> */}
                <img
                  className="h-14 w-auto mb-2 "
                  src="src\assets\1transparent.png"
                  alt="GigaZone Logo"
                />

                <span className="sr-only">WifiWala</span>
              </Link>
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <Link
                to="/dataplan"
                className="text-muted-foreground hover:text-foreground"
              >
                Data Plan
              </Link>
              <Link
                to="/aboutus"
                className="text-muted-foreground hover:text-foreground"
              >
                About Us
              </Link>
              <Link
                to="/legals"
                className="text-muted-foreground hover:text-foreground"
              >
                Legals
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms & Conditions
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
