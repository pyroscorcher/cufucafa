    function Navbar() {
      return (
        <nav className="w-full bg-coffee/95 backdrop-blur-md text-white py-4 px-6 shadow-md fixed top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            
            {/* Brand */}
            <div className="text-2xl font-extrabold tracking-wide">
              CU<span className="italic">FUC</span>AFA
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
              <a href="#home" className="hover:text-yellow-300 transition">Home</a>
              <a href="https://ipb.link/preorder-cufucafa" target="_blank"
                className="hover:text-yellow-300 transition">
                Pre-Order
              </a>
              <a href="#contact" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="https://ipb.link/preorder-cufucafa"
              target="_blank"
              className="bg-white text-coffee font-bold px-5 py-2 rounded-full shadow hover:bg-yellow-200 transition text-sm"
            >
              Order Now
            </a>
          </div>
        </nav>
      );
    }

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="home" className="bg-coffee text-white pt-28">
        {/* Hero Section */}
        <section className="w-full flex justify-center py-20 px-6">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Left Side Text */}
            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold leading-tight">
                CU<span className="italic">FUC</span>AFA <br /> COFFEE
              </h1>

              <p className="text-2xl font-semibold opacity-90">
                Kopi Susu Gula Aren — nikmati manisnya setiap Kamis
              </p>

              <p className="text-3xl font-bold bg-white text-coffee px-6 py-2 rounded-full inline-block shadow-md">
                Rp 12.000
              </p>

              <p className="text-lg opacity-90">
                Sistem Pre-order • Ready setiap hari Kamis
              </p>

              <a
                href="https://ipb.link/preorder-cufucafa"
                target="_blank"
                className="bg-white text-coffee font-bold px-7 py-3 rounded-full shadow-md hover:bg-yellow-200 transition-all inline-block"
              >
                Pesan Sekarang
              </a>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/hero.png"
                alt="Cufucafa Coffee Poster"
                className="w-[70%] max-w-sm rounded-lg shadow-xl object-contain"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-16 px-6 flex justify-center">
          <div className="max-w-6xl w-full text-center opacity-80 text-sm">
            © {new Date().getFullYear()} CUFUCAFA COFFEE — All Rights Reserved
          </div>
        </footer>
      </main>
    </>
  );
}
