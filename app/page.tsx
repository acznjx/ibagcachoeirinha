// app/page.tsx
import { Navbar } from "@/components/Navbar";
import { ProfileHeader } from "@/components/ProfileHeader";
import { Highlights } from "@/components/Highlights";
import { ScheduleGrid } from "@/components/ScheduleGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Seções em ordem cronológica e de importância */}
      <ProfileHeader />
      <Highlights />
      <ScheduleGrid />
      <Footer />
      
    </main>
  );
}