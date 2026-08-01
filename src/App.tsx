import { useState, useEffect, lazy, Suspense } from "react";
import { Route, Switch, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { SiteProvider } from "@/lib/SiteContext";
import { AnimatedCursor } from "@/components/layout/AnimatedCursor";
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
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { AdminLogin } from "@/admin/AdminLogin";
import { AdminDashboard } from "@/admin/AdminDashboard";
import { api } from "@/lib/api";

const ThreeBackground = lazy(() =>
  import("@/components/layout/ThreeBackground").then((m) => ({
    default: m.ThreeBackground,
  }))
);

function PortfolioHome() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Suspense fallback={null}>
            <ThreeBackground />
          </Suspense>
          <ScrollProgress />
          <Navbar />
          <AnimatedCursor />
          <main className="flex flex-col w-full relative z-10">
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Experience />
            <Founder />
            <Contact />
          </main>
          <Footer />
          <MusicPlayer />
        </motion.div>
      )}
    </>
  );
}

function AdminRoute() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    api
      .me()
      .then(() => setAuthed(true))
      .catch(() => setAuthed(false));
  }, []);

  if (authed === null)
    return (
      <div className="min-h-screen bg-[#060810] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />;
  return (
    <AdminDashboard
      onLogout={() => {
        setAuthed(false);
        navigate("/admin");
      }}
    />
  );
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
