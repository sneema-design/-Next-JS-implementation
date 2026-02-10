import Counter from "./components/Counter";

export default function Home() {
  console.log("this is home page");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      welcome to home page
      <Counter/>
    </div>
  );
}
