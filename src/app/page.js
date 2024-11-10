import { Button } from "@/components/ui/button";

<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function Home() {
  return (
    <div className="bg-gray-400 h-screen">
      <div className="flex justify-center">
        <div className="bg-red-300 w-10 text-center">Jeb Dhili</div>
        <div className="bg-red-300 w-10 text-center"> Home </div>
        <Button variant="outline">Button</Button>
      </div>
    </div>
  );
}
