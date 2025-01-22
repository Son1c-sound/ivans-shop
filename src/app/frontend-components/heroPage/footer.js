import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg text-gray-900">
            Join our newsletter folks
          </h3>
          <p className="text-sm text-gray-600">
            Enter your email address to receive occasional, lovely emails from
            us.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              →
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-lg text-gray-900">Info</h3>
          <ul className="space-y-2">
            {[
              "Contact Us",
              "Shipping Policy",
              "Privacy Policy",
              "Refund Policy",
              "Terms of Service",
              "Do not sell or share my personal information",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            Statements made on this website have not been evaluated by the U.S.
            Food and Drug Administration. These products are not intended to
            diagnose, treat, cure, or prevent any disease. Information provided
            by this website or this company is not a substitute for individual
            medical advice.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 items-center">
            <h3 className="text-sm font-medium text-gray-900">Our socials</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 2H3v20h18V2zM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-600">© 2025, get supplements</div>
          <div className="flex gap-2">
            <div className="flex justify-center gap-2 pt-2">
              <img
                src="https://imgs.search.brave.com/-sC8zeHKNUtuWvHpBp9y8dZW1G6nzAEx12dL3JRzrKw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL2Fhcm9u/ZmFnYW4vc3ZnLWNy/ZWRpdC1jYXJkLXBh/eW1lbnQtaWNvbnMv/cmF3L21haW4vZmxh/dC92aXNhLnN2Zw"
                alt="Visa"
                className="h-5 w-auto"
              />
              <img
                src="https://imgs.search.brave.com/fNE_MJp9jnH3BbXDzSKRdBip76-jwNd1_fFauWh22b4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhmLzNi/L2FjLzhmM2JhYzQz/MTk4ZTJmNjM4NmNi/OTc5NjA0ODgzZTli/LmpwZw"
                alt="Mastercard"
                className="h-5 w-auto"
              />
              <img
                src="https://imgs.search.brave.com/KIoZuVaDcODJGtjsB9zvVGAjX6q92Avy47btE_Qt1i0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MTYwNTdkOTc2MDAw/YjAwMDQ1YTdkYTMu/cG5n"
                alt="American Express"
                className="h-5 w-auto"
              />
              <img
                src="https://imgs.search.brave.com/iCpRo4Rmx399jkUyZ5XncAsHme2iNm80g-Kf7dE09Ow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBiLzk0/LzFlLzBiOTQxZTU5/MDUwNzUwZTU5YTJl/ZmQyZmNiY2VmMTRk/LmpwZw"
                alt="Discover"
                className="h-5 w-auto"
              />
              <img
                src="https://imgs.search.brave.com/joKg1jjup5vAPxI5aLa00P0c7Qhe9XI6lsAd8lur-JM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE2L0Zvcm1lcl9W/aXNhXyhjb21wYW55/KV9sb2dvLnN2Zw"
                alt="Apple Pay"
                className="h-5 w-auto"
              />
              <img
                src="https://imgs.search.brave.com/Uh1iJdtFIuug5YO8yyPTK-4U4MG8_brnbGsgLgaNv8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS52b3guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9zaXRl/cy8yL2Nob3J1cy91/cGxvYWRzL2Nob3J1/c19hc3NldC9maWxl/LzEzNjc0NTU0L01h/c3RlcmNhcmRfbG9n/by5qcGc_cXVhbGl0/eT05MCZzdHJpcD1h/bGwmY3JvcD0wLDE2/LjY2NjY2NjY2NjY2/NywxMDAsNjYuNjY2/NjY2NjY2NjY3Jnc9/MjQwMA"
                alt="Apple Pay"
                className="h-5 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
