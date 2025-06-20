"use client";
import { motion } from "motion/react";
import { FiTwitter, FiGithub, FiLinkedin, FiMail, FiDollarSign } from "react-icons/fi";
import Link from "next/link";

import { ReactNode } from "react";

type FooterLink = {
  name: string;
  href: string;
  icon?: ReactNode;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const Footer = () => {
  const footerLinks: FooterSection[] = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Integrations", href: "/integrations" },
        { name: "Updates", href: "/updates" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "API Docs", href: "/docs" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "Twitter", href: "https://twitter.com", icon: <FiTwitter /> },
        { name: "GitHub", href: "https://github.com", icon: <FiGithub /> },
        { name: "LinkedIn", href: "https://linkedin.com", icon: <FiLinkedin /> },
        { name: "Contact", href: "mailto:hello@expensify.com", icon: <FiMail /> },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={item} className="space-y-4">
              <h3 className="text-white font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors flex items-center gap-2"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                    >
                      {link.icon && <span className="text-lg">{link.icon}</span>}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="bg-indigo-600 rounded-lg p-2 mr-3">
                <FiDollarSign className="text-white text-xl" />
              </div>
              <span className="text-white text-xl font-bold">Expensify</span>
            </Link>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            {footerLinks[3].links.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white text-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Expensify. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;