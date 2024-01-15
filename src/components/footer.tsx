import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/react";

export const Footer = () => {
  return (
    <footer className="bg-grey-200 flex w-full flex-col items-center justify-center border-t-1 border-slate-200 px-6 py-10">
      <div className="flex min-w-[1100px] max-w-[1280px] justify-between">
        <ul className="columns-5">
          {siteConfig.footerLinks.map(({ label, items }) => (
            <li key={label} className="flex w-full flex-col">
              <h3 className="text-base font-semibold">{label}</h3>
              {items.map(({ label, href }) => (
                <Link
                  key={label}
                  className="hover:text-primary"
                  color="foreground"
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </li>
          ))}
        </ul>
        <div className="flex w-[106px] flex-col">
          <Image width={106} alt="NextUI hero Image" src="/contact_us.png" />
          <p className="text-center">大雁APP</p>
        </div>
      </div>
      <div className="flex">
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">NextUI</p>
      </div>
    </footer>
  );
};
