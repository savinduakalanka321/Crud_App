import Link from "next/link";
import { HomeIcon, LogIn, Sprout } from "lucide-react";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center h-16 justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
                            🌱 Plantventory
                        </Link>
                    </div>

                    <div className="hidden items-center space-x-4 md:flex">

                        <ModeToggle />
                        <Link
                            href="/plants"
                            className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            <Sprout className="h-4 w-4" />
                            <span className="hidden lg:inline">Plants</span>
                        </Link>

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            <HomeIcon className="h-4 w-4" />
                            <span className="hidden lg:inline">Home</span>
                        </Link>

                       
                        
                        {/* <Link href="/">
                            <LogIn className="w-4 h-4" />
                            <span className="hidden lg:inline">Sign In</span>
                        </Link> */}



                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

