import Image from 'next/image';

type AwardItem = {
  title: string;
  subtitle: string;
  logo: string;
};

export default function AwardsRow({ items }: { items: AwardItem[] }) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-10">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex max-w-[200px] flex-col items-center gap-3 text-center"
        >
          <Image
            src={item.logo}
            alt={item.title}
            width={100}
            height={100}
            className="h-16 w-auto object-contain opacity-90"
          />
          <div>
            <p className="text-xs font-medium text-zinc-700">{item.title}</p>
            <p className="mt-0.5 text-[11px] text-zinc-400">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
