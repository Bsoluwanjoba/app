import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/pages/dashboard" className="text-white bg-[#0ac] p-2 rounded-md items-center justify-center">Go to Dashboard</Link>
      <Link href="/pages/vendor" className="text-white bg-[#0ac] p-2 rounded-md items-center justify-center">Go to Vendor</Link>
    </div>
  );
}
