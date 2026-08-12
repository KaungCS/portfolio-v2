export default function DesktopNotice() {
  return (
    <div className="fixed inset-0 z-50 bg-[#FFFFE9] flex flex-col items-center justify-center p-6 text-center lg:hidden">
      <div className="max-w-md border-2 border-[#323031] p-8 rounded-2xl shadow-[4px_4px_0px_#323031] bg-white">
        <h2 className="text-2xl font-bold text-[#084C61] mb-3">Desktop Experience Preferred</h2>
        <p className="text-[#323031] text-sm leading-relaxed mb-6">
          This portfolio is currently engineered specifically for desktop screens to preserve layout fidelity, interactive sidebars, and custom visual grids. Please open this link on a computer for the best experience!
        </p>
        <div className="inline-block px-4 py-2 bg-[#FFC857] text-[#323031] font-semibold text-xs uppercase tracking-wider rounded-lg border border-[#323031]">
          Desktop Only For Now
        </div>
      </div>
    </div>
  );
}
