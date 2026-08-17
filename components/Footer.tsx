import React from "react";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
                <Leaf size={22} />
              </div>

              <span className="text-2xl font-bold text-white">
                Plantventory
              </span>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-400">
              A smart and simple way to manage, organize, and keep track of
              your plants in one beautiful place.
            </p>

           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="transition hover:text-green-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-green-400"
                >
                  My Plants
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-green-400"
                >
                  Plant Library
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-green-400"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 transition hover:text-green-400"
                >
                  Plant Care Guide
                  <ArrowUpRight size={14} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-green-400"
                >
                  Plant Tips
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-green-400"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-green-400"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />
                <a
                  href="mailto:hello@plantventory.com"
                  className="transition hover:text-green-400"
                >
                  hello@plantventory.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />
                <a
                  href="tel:+94112345678"
                  className="transition hover:text-green-400"
                >
                  +94 11 234 5678
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />
                <span>
                  Colombo,
                  <br />
                  Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-slate-500">
            © 2026 Plantventory. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-green-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-green-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;