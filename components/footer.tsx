import { StoreButtons } from "@/components/store-buttons";
import { Link } from "@/i18n/navigation";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <Link
    className="flex justify-center text-gray-500 underline text-sm"
    href={href}
  >
    {children}
  </Link>
);

export const Footer = () => (
  <footer className="flex flex-col gap-6 justify-center items-center my-8 md:my-12 px-8">
    <div className="mb-6 md:mb-8">
      <StoreButtons />
    </div>
    <div className="flex gap-6">
      <FooterLink href="/privacy">Privacy Policy</FooterLink>
      <FooterLink href="/terms">Terms of Service</FooterLink>
      <FooterLink href="mailto:marcosluisdel@gmail.com">Contact</FooterLink>
    </div>
    <p className="text-xs">
      Made with ❤️ by Marcos Luis Delgado © {new Date().getFullYear()}
    </p>
  </footer>
);
