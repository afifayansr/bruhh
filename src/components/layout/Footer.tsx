export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-white/15">
            <img src="/profile.png" alt="Afifayan" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-display font-bold gradient-text">Afifayan</span>
            <p className="font-mono text-[9px] text-white/20 tracking-widest">piecore.xyz</p>
          </div>
        </div>

        <p className="font-mono text-xs text-white/20 text-center">
          © {new Date().getFullYear()} Afifayan · Founder of PieCore™ Cloud Hosting
        </p>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-white/25">afifayan.fun</span>
        </div>
      </div>
    </footer>
  );
}
