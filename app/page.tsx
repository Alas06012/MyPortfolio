import { Header } from "@/components/ui/Header";
import { BentoGrid } from "@/components/sections/BentoGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen pt-4 sm:pt-6">
      <Header />
      <BentoGrid />
    </main>
  );
}
