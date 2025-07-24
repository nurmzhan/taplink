"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Send,
  Youtube,
  Instagram,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function RussellISCTaplink() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const ctaButtons = [
    {
      id: "whatsapp",
      title: "Записаться на консультацию",
      icon: MessageCircle,
      url: "https://wa.me/77066018909",
      isPrimary: true,
    },
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
    <div className="min-h-screen bg-[#182654] text-white">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="border-b border-white/10 px-6 py-6 text-center">
          <div className="mb-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center overflow-hidden">
              {/* Заменить src на свой логотип */}
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
          <p className="text-white/80  text-base leading-relaxed">
            Поступление в вузы UK, Канады, США
          </p>
          <p className="text-white/80 text-base leading-relaxed">
          Поможем поступить в топ-университеты через британскую программу Foundation в Алматы
          </p>
        </div>

        {/* Main Content */}
        <div className="px-6 py-6">
          {/* CTA Buttons */}
          <div className="space-y-3 mb-8">
            {ctaButtons.map((button, index) => {
              const Icon = button.icon;
              return (
                <div
                  key={button.id}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <button
                    onClick={() => handleClick(button.url)}
                    className={`w-full p-4 rounded-lg transition-all duration-200 border text-left group ${
                      button.isPrimary
                        ? "bg-[#9E1B21] hover:bg-[#B32027] text-white border-[#9E1B21] shadow-md"
                        : "bg-white hover:bg-gray-100 text-[#182654] border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-md ${
                            button.isPrimary
                              ? "bg-white/20"
                              : "bg-gray-100 group-hover:bg-orange-50"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              button.isPrimary
                                ? "text-white"
                                : "text-[#182654] group-hover:text-orange-500"
                            }`}
                          />
                        </div>
                        <span
                          className={`font-semibold ${
                            button.isPrimary
                              ? "text-white"
                              : "text-[#182654]"
                          }`}
                        >
                          {button.title}
                        </span>
                      </div>
                      <ArrowRight
                        className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                          button.isPrimary ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Animated Offer Banner */}
          <div
            className={`mb-8 transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-red-500 p-6">
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
                  <p className="text-white font-bold text-2xl mb-2 animate-pulse">
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

                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg border-2 border-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            className={`text-center transition-all duration-700 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-white/70 text-sm mb-2">
              🇬🇧 Официальный представитель NCUK в Казахстане
            </p>
            <p className="text-white/50 text-xs">
              г. Алматы • Аккредитованный образовательный центр
            </p>
          </div>
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