import About from "@/components/About";
import Intro from "@/components/Intro";
import Section_devider from "@/components/Section-devider";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <Intro/>
      <Section_devider/>
      <About/>
    </main>
  )
}
