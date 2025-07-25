"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Send, Youtube, Instagram, FileText, ArrowRight, Phone } from "lucide-react";
// Add Google Fonts import for Inter
import Head from "next/head";

export default function RussellISCTaplink() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  // Main action buttons (top to bottom) - only WhatsApp now
  const mainActions = [
    {
      id: "whatsapp-main",
      title: "WhatsApp",
      icon: Phone,
      url: "https://wa.me/77066018909",
      isPrimary: true,
      highlight: "whatsapp",
    },
  ];

  // Social/other links
  const ctaButtons = [
    {
      id: "telegram",
      title: "Telegram-канал",
      icon: Send,
      url: "https://t.me/russell_isc",
      isPrimary: false,
    },
    {
      id: "youtube",
      title: "YouTube канал",
      icon: Youtube,
      url: "https://youtube.com/@russellisc",
      isPrimary: false,
    },
    {
      id: "instagram",
      title: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/russell_isc",
      isPrimary: false,
    },
    {
      id: "foundation",
      title: "Подробнее о программе",
      icon: FileText,
      url: "https://russell.kz/",
      isPrimary: false,
    },
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#182654] text-white font-sans" style={{ fontFamily: "'Inter', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'" }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap&subset=cyrillic" rel="stylesheet" />
      </Head>
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/campus.png"
          alt="Campus background"
          className="w-full h-full object-cover object-center blur-[2px] brightness-50"
        />
        <div className="absolute inset-0 bg-[#182654]/70" />
      </div>
      <div className="max-w-md mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="border-b border-white/10 px-6 py-6 text-center">
          <div className="mb-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg">
              <Image
                src="/logo.png"
                alt="Russell ISC"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Russell ISC</h1>
          <p className="text-white/80 text-base leading-relaxed">
            Поступление в вузы UK, Канады, США
          </p>
          <p className="text-white/80 text-base leading-relaxed">
            Поможем поступить в топ-университеты через британскую программу Foundation в Алматы
          </p>
        </div>

        {/* Main Action Button (WhatsApp only) */}
        <div className="px-6 pt-8 pb-4 space-y-4">
          {mainActions.map((button, index) => {
            const Icon = button.icon;
            let btnClass =
              "w-full p-4 rounded-lg flex items-center justify-between font-semibold shadow-md transition-all duration-200 border text-left group ";
            if (button.highlight === "whatsapp") {
              btnClass +=
                "bg-[#25D366] hover:bg-[#1DA851] text-white border-[#25D366] text-lg";
            }
            return (
              <button
                key={button.id}
                onClick={() => handleClick(button.url)}
                className={btnClass}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <span className="flex items-center space-x-3">
                  <span className="p-2 rounded-md bg-white/20">
                    <Icon className="w-6 h-6" />
                  </span>
                  <span>{button.title}</span>
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            );
          })}
        </div>

        {/* Special Offer Banner (ad) */}
        <div id="special-offer" className={`px-6 mb-4 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-red-500 p-6 shadow-lg">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full animate-pulse transform -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full animate-pulse transform translate-x-12 translate-y-12 animation-delay-1000"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
              <div className="absolute bottom-6 left-8 w-2 h-2 bg-white/50 rounded-full animate-bounce animation-delay-500"></div>
              <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/30 rounded-full animate-pulse animation-delay-1500"></div>
            </div>
            <div className="relative z-10 text-center">
              <div className="mb-4">
                <p className="text-white font-bold text-2xl mb-2 animate-pulse" style={{ fontFamily: "'Montserrat', 'Inter', sans-serif" }}>
                  🎓 СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
                </p>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                  <p className="text-white font-semibold text-lg">
                    Скидка 1 000 000 ₸
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-white font-medium">
                  ✈️ + авиабилеты в подарок
                </p>
                <p className="text-orange-100 text-sm">
                  До 15 августа по промокоду{" "}
                  <span className="font-bold bg-white/30 px-3 py-1 rounded-full backdrop-blur-sm animate-pulse">
                    August
                  </span>
                </p>
              </div>
              <div className="absolute inset-0 rounded-lg border-2 border-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Book a Consultation Button (moved under ad) */}
        <div className="px-6 mb-8">
          <button
            onClick={() => handleClick("https://forms.gle/DzjmefuCzgRu18SQ7")}
            className="w-full p-4 rounded-lg flex items-center justify-between font-semibold shadow-md transition-all duration-200 border text-left group bg-white hover:bg-gray-100 text-[#182654] border-gray-200 text-lg"
          >
            <span className="flex items-center space-x-3">
              <span className="p-2 rounded-md bg-white/20">
                <MessageCircle className="w-6 h-6" />
              </span>
              <span>Оставить заявку</span>
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Social/Other Buttons */}
        <div className="px-6 pb-8 space-y-3 mb-4">
          {ctaButtons.map((button, index) => {
            const Icon = button.icon;
            return (
              <button
                key={button.id}
                onClick={() => handleClick(button.url)}
                className="w-full p-4 rounded-lg flex items-center justify-between font-semibold shadow transition-all duration-200 border text-left group bg-white hover:bg-gray-100 text-[#182654] border-gray-200"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <span className="flex items-center space-x-3">
                  <span className="p-2 rounded-md bg-gray-100 group-hover:bg-orange-50">
                    <Icon className="w-5 h-5 text-[#182654] group-hover:text-orange-500" />
                  </span>
                  <span>{button.title}</span>
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-transform group-hover:translate-x-1" />
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className={`text-center transition-all duration-700 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="text-white/70 text-sm mb-2">
            🇬🇧 Официальный представитель NCUK в Казахстане
          </p>
          <p className="text-white/50 text-xs">
            г. Алматы • Аккредитованный образовательный центр
          </p>
        </div>
      </div>
      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
}