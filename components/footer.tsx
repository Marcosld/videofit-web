import { StoreButtons } from "@/components/store-buttons";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { FooterContainer } from "./footer-container";

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

export const Footer = () => {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <FooterContainer className="flex flex-col gap-6 justify-center items-center my-8 md:my-12 px-8">
      <div className="mb-6 md:mb-8">
        <StoreButtons />
      </div>
      <div className="flex gap-6">
        <FooterLink href="/privacy">{t("links.privacy")}</FooterLink>
        <FooterLink href="/terms">{t("links.terms")}</FooterLink>
        <FooterLink href="mailto:marcosluisdel@gmail.com">
          {t("links.contact")}
        </FooterLink>
      </div>
      <p className="text-xs">{t("madeBy", { year })}</p>
    </FooterContainer>
  );
};
