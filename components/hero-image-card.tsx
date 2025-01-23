import Image from 'next/image';

export function HeroImageCard() {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-[#1a3652] shadow-xl dark:bg-gray-900 dark:bg-opacity-70">
          <Image 
            src={"/images/hero.png"}
            alt="hero"
            width={700}
            height={700}
            />
        </div>
      </div>
    </div>
  );
}
