import SoMeLinks from "../components/SoMeLinks";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 border-t border-zinc-500/50 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 sm:py-2 lg:px-8">
        <SoMeLinks />
        <p className="text-center sm:text-left">
          &copy; 2024 Petter-Nikolai Kristoffersen
        </p>
      </div>
    </footer>
  );
}
