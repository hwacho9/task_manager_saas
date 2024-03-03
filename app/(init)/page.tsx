import { Button } from "@/components/ui/button";
import { Hand, Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const InitPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col">
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Hand className="h-6 w-6 mr-2" />
                    <p>This is the init page</p>
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    We help to manage your Project
                </h1>
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">Sign up</Link>
            </Button>
        </div>
    );
};

export default InitPage;
