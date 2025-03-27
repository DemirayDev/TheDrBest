import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-warm-beige">
      {/* Navbar - Fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-warm-beige/95 backdrop-blur-md z-50 py-5 px-4 border-b border-gray-200/20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 font-playfair tracking-wider">
            EstheticLineTurkey
          </div>
          <div className="hidden md:flex space-x-10">
            <Link
              href="/"
              className="text-gray-700 hover:text-warm-brown transition-all duration-300 font-medium"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hizmetler"
              className="text-gray-700 hover:text-warm-brown transition-all duration-300 font-medium"
            >
              Hizmetler
            </Link>
            <Link
              href="/hakkimizda"
              className="text-gray-700 hover:text-warm-brown transition-all duration-300 font-medium"
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className="text-gray-700 hover:text-warm-brown transition-all duration-300 font-medium"
            >
              İletişim
            </Link>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section - Kartlı Tasarım */}
      <div className="pt-24 pb-16 md:py-16">
        <div className="container mx-auto px-4">
          {/* Ana Hero Kartı */}
          <div className="bg-rose-50 rounded-3xl overflow-hidden shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Sol Taraf - Metin içeriği */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight">
                  Estetik ve <br />
                  <span className="text-gray-700">Güzelliğin</span>
                  <br />
                  <span className="text-rose-400">Yeni Çağına</span>
                  <br />
                  Hoş Geldiniz
                </h1>

                <p className="text-gray-600 text-lg mt-6 mb-8 max-w-lg">
                  Modern tıbbın sunduğu en yenilikçi ve güvenli medikal estetik
                  çözümleriyle tanışın. EstheticLineTurkey, sizlere minimal
                  müdahale ile maksimal güzellik kazandırmayı amaçlayan bir dizi
                  kişiye özel tedavi sunar.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/hizmetler"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gray-800 text-white font-medium rounded-full shadow-md transition-all duration-300 hover:bg-gray-700"
                  >
                    <span className="mr-2">Hemen Keşfet</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    href="/randevu"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium rounded-full shadow-md transition-all duration-300 hover:bg-gray-800 hover:text-white"
                  >
                    <span>Randevu Al</span>
                  </Link>
                </div>

                {/* Güven Göstergeleri */}
                <div className="mt-10 hidden md:block">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-600">
                      <span className="font-semibold">4.9 / 5.0</span> - 2.4B+
                      Memnun Müşteri
                    </p>
                    <div className="ml-6 flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden"
                        >
                          <div className="h-full w-full bg-gray-200"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - Görsel */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image
                    src="/hero-back.png"
                    alt="Arka Plan İllüstrasyonu"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative h-full min-h-[400px] md:min-h-0">
                  <Image
                    src="/hero.png"
                    alt="Estetik ve Güzellik"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Kartları - Ana hero kartının altında 3 kart */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Kart 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-rose-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Ücretsiz Konsültasyon
              </h3>
              <p className="text-gray-600">
                Uzman doktorlarımızla özel ihtiyaçlarınıza yönelik ücretsiz ön
                görüşme imkanı.
              </p>
            </div>

            {/* Kart 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-rose-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Hızlı İyileşme
              </h3>
              <p className="text-gray-600">
                Minimal invaziv tekniklerle daha kısa iyileşme süreleri ve
                günlük hayata hızlı dönüş.
              </p>
            </div>

            {/* Kart 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-rose-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Doğal Sonuçlar
              </h3>
              <p className="text-gray-600">
                Doğal görünümlü sonuçlar için kişiye özel tedavi planları ve
                yenilikçi teknikler.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hizmetler Bölümü - Kartlı tasarım */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">
            Öne Çıkan Hizmetlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hizmet 1 */}
            <div className="bg-rose-50 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-rose-200 opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-rose-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  Yüz Estetiği
                </h3>
                <p className="text-gray-600 mb-4">
                  Minimal invaziv tekniklerle yüz bölgesinde gençleştirme ve
                  güzelleştirme işlemleri.
                </p>
                <Link
                  href="/hizmetler/yuz-estetigi"
                  className="inline-flex items-center font-medium text-rose-500 hover:text-rose-600"
                >
                  <span>Detaylı Bilgi</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hizmet 2 */}
            <div className="bg-rose-50 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-rose-200 opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-rose-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  Vücut Şekillendirme
                </h3>
                <p className="text-gray-600 mb-4">
                  Cerrahi ve cerrahi olmayan yöntemlerle vücut hatlarınızı
                  yeniden şekillendirin.
                </p>
                <Link
                  href="/hizmetler/vucut-sekillendirme"
                  className="inline-flex items-center font-medium text-rose-500 hover:text-rose-600"
                >
                  <span>Detaylı Bilgi</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hizmet 3 */}
            <div className="bg-rose-50 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-rose-200 opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-rose-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  Cilt Yenileme
                </h3>
                <p className="text-gray-600 mb-4">
                  Cilt dokusunu yenileyen, kırışıklıkları azaltan ve parlaklık
                  katan işlemler.
                </p>
                <Link
                  href="/hizmetler/cilt-yenileme"
                  className="inline-flex items-center font-medium text-rose-500 hover:text-rose-600"
                >
                  <span>Detaylı Bilgi</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hizmet 4 */}
            <div className="bg-rose-50 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group">
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-rose-200 opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-rose-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  Saç Ekimi
                </h3>
                <p className="text-gray-600 mb-4">
                  En son teknolojilerle doğal görünümlü saç ekimi ve saç
                  dökülmesi tedavileri.
                </p>
                <Link
                  href="/hizmetler/sac-ekimi"
                  className="inline-flex items-center font-medium text-rose-500 hover:text-rose-600"
                >
                  <span>Detaylı Bilgi</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Butonu */}
      <div className="fixed bottom-8 right-8 z-50 group">
        <a
          href="https://wa.me/905XXXXXXXXX"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-green-500/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-7 h-7 fill-white"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
        {/* Tooltip */}
        <div className="absolute -top-2 right-0 transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full transition-all duration-300 pointer-events-none">
          <div className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 whitespace-nowrap mb-2">
            <span className="text-gray-700 text-sm font-medium">
              Bize WhatsApp'tan ulaşın
            </span>
            <div className="w-2 h-2 bg-white rotate-45 absolute bottom-0 right-6 transform translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
