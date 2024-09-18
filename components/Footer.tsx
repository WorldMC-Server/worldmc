import { footerInfo, footerSections } from "@/lib/Navigation";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-base-300 shadow">
      <footer className="container footer py-10">
        <aside>
          <Image src={footerInfo.logo} alt="WorldMC Icon" className="size-12" width={100} height={100} />
          <p>
            {footerInfo.companyName}
            <br />
            <i>{footerInfo.slogan}</i>
          </p>
        </aside>
        {footerSections.map((section) => (
          <nav key={section.title}>
            <h6 className="footer-title">{section.title}</h6>
            {section.links.map((link) => (
              <Link key={link.name} href={link.href} target={link.external ? "_blank" : undefined} className="link-hover link">
                {link.name}
                {link.icon}
              </Link>
            ))}
          </nav>
        ))}
      </footer>
    </div>
  );
}
