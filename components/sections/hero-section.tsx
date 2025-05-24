import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 flex">
              <a className="mr-6 flex items-center space-x-2" href="#home">
                <span className="font-bold text-xl">Portfolio</span>
              </a>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a href="#about" className="transition-colors hover:text-foreground/80">
                  About
                </a>
                <a href="#skills" className="transition-colors hover:text-foreground/80">
                  Skills
                </a>
                <a href="#projects" className="transition-colors hover:text-foreground/80">
                  Projects
                </a>
                <a href="#contact" className="transition-colors hover:text-foreground/80">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="container py-24 md:py-52 mb-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <div>
              <h1 className="mb-4 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Halo, Saya <span className="text-primary">Elsandro</span>
              </h1>
              <p className="mx-auto mb-8 max-w-[600px] text-muted-foreground md:text-xl">
                Full Stack Developer yang passionate dalam menciptakan solusi digital inovatif. Saya mengkhususkan diri
                dalam pengembangan web modern dengan teknologi terkini.
              </p>
              <div className="space-x-11">
                 <button className="bg-black text-white rounded-md shadow-lg p-4">Hubungi Saya</button>
                  <button className="bg-white bor rounded-md border-2 shadow-lg p-4 w-50 ">Github</button>
              </div>
             
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-24 bg-muted/50">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter">Tentang Saya</h2>
            <div className="flex justify-center">
              <Image
                src="/images/blog/incognito.png.webp"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full border-4 border-background shadow-lg"
              />
            </div>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Saya adalah seorang Full Stack Developer dengan pengalaman 3+ tahun dalam pengembangan aplikasi web. Saya
              memiliki passion yang besar dalam teknologi dan selalu antusias untuk mempelajari hal-hal baru. Saya senang
              bekerja dalam tim dan memiliki kemampuan problem-solving yang baik untuk menciptakan solusi yang efektif dan
              efisien.
            </p>
          </div>
        </section>
      </div>


      
        {/* Hero Section */}
        <section id="home" className="container py-24 md:py-52 mb-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Keahlian
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Teknologi dan tools yang saya kuasai dalam pengembangan aplikasi
              </p>
             <div className="flex justify-between items-center">
              <button className="bg-gray-100 p-3 rounded-3xl font-bold">Javascript</button>
              <button className="bg-gray-100 p-3 rounded-3xl font-bold">Typescript</button>
              <button className="bg-gray-100 p-3 rounded-3xl font-bold">Tailwind</button>
              <button className="bg-gray-100 p-3 rounded-3xl font-bold">PHP</button>
             </div>
            </div>
          </div>
        </section>

        
      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Elsandro. All rights reserved.</p>
        </div>
      </footer>
      
    </>

    
  )
}
