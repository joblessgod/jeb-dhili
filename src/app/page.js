import { Button } from "@/components/ui/button";

<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function Home() {
  return (
    <div className=" h-screen">
      <div className="flex justify-center">
        <div className=" w-10 text-center">Jeb Dhili</div>
        <div className=" w-10 text-center"> Home </div>
        <Button variant="outline">Button</Button>
      </div>
    </div>
  );
}
