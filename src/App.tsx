import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { SiteProvider } from "@/lib/SiteContext";
import { ParticleBackground } from "@/components/layout/ParticleBackground";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MusicPlayer } from "@/components/layout/MusicPlayer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Founder } from "@/components/sections/Founder";
import { SongUploader } from "@/components/sections/SongUploader";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { AdminLogin } from "@/admin/AdminLogin";
import { AdminDashboard } from "@/admin/AdminDashboard";
import { api } from "@/lib/api";

function PortfolioHome() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <ParticleBackground />
          <ScrollProgress />
          <Navbar />
          <main className="flex flex-col w-full relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Founder />
            <SongUploader />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <MusicPlayer />
        </>
      )}
    </>
  );
}

function AdminRoute() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    api.me().then(() => setAuthed(true)).catch(() => setAuthed(false));
  }, []);

  if (authed === null) return (
    <div className="min-h-screen bg-[#060810] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
    </div>
  );

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />;
  return <AdminDashboard onLogout={() => { setAuthed(false); navigate("/admin"); }} />;
}

export default function App() {
  return (
    <SiteProvider>
      <Switch>
        <Route path="/admin" component={AdminRoute} />
        <Route component={PortfolioHome} />
      </Switch>
    </SiteProvider>
  );
}
