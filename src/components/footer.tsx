import Link from "next/link";

export const Footer = () => (
  <footer className="bg-background h-16 flex items-center border-t">
    <div className="container flex items-center flex-wrap justify-between px-4 md:px-6">
      <Link href="#" className="text-lg font-bold" prefetch={false}>
        codewithMuji
      </Link>
      <nav className="flex items-center flex-wrap space-x-4 text-sm">
        <Link href="#" className="hover:underline" prefetch={false}>
          About
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Contact
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Privacy Policy
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Terms
        </Link>
      </nav>
    </div>
  </footer>
);

export const Footer2 = () => {
  return (
    <footer className="bg-[#1BC464] text-white">
      <Link
        href={`https://mojtaba-amirii-portfolio.vercel.app/`}
        target="_blank"
        className="container mx-auto px-4 text-center"
      >
        <p>@ codewithmuji</p>
      </Link>
    </footer>
  );
};
