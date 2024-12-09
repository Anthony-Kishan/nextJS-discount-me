import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex flex-col">
              <Image src="/logo.png" alt="Logo" width={200} height={50} />
            </div>
            <p className="mt-6 text-gray-400 text-sm max-w-md">
              Ecommerce is a free UI Kit from Paperpillar that you can use for
              your personal or commercial project.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Type your email address"
                className="bg-[#2C2C2C] border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#FF7A00] rounded-3xl"
              />
              <Button
                type="submit"
                className="bg-white text-black rounded-3xl sm:w-auto w-full"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Account Section */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Account</h3>
            <ul className="space-y-3">
              {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/${item.toLowerCase().replace(/ /g, "")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/${item.toLowerCase().replace(/ /g, "")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Section */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">exclusive@gmail.com</li>
              <li className="text-gray-400">+88015-88888-9999</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Download App</h3>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-white p-2 rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="w-24 h-24"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
