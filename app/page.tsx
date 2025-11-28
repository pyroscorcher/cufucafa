export default function Home() {
  return (
    <main className="flex flex-col items-center text-white pb-20">
      {/* Hero Section */}
      <section className="w-full flex justify-center items-center bg-coffee pt-10">
        <img
          src="/hero.png"
          alt="Cufucafa Coffee Poster"
          className="w-full max-w-2xl rounded-lg shadow-xl"
        />
      </section>

      {/* Promo Section */}
      <section className="max-w-3xl mt-10 px-6 text-center space-y-5">
        <h1 className="text-5xl font-extrabold">
          CU<span className="italic">FUC</span>AFA COFFEE
        </h1>

        <p className="text-xl font-semibold opacity-90">
          Kopi Susu Gula Aren — Nikmati setiap Kamis!
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
          className="bg-white text-coffee font-bold px-7 py-3 rounded-full shadow-md hover:bg-yellow-200 transition-all inline-block mt-4"
        >
          Pesan Sekarang
        </a>
      </section>
    </main>
  );
}
