import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo / Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-2">INSURANCEBD</h2>
          <p className="text-gray-400 text-sm">
         Travel Assurance ensures reliable support and guidance for a safe, smooth journey.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start hidden">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-pink-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Download App + QR */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-2">Download Our App</h3>
          <div className="relative w-32 h-32">
            <Image
              src="https://i.ibb.co/DHDyN7qr/footer-downloadapp-with-qr.png"
              alt="Download App QR"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2026 INSURANCEBD. All rights reserved.
      </div>
    </footer>
  );
}
