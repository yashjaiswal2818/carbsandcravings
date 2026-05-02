import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-charcoal)] px-4 xs:px-6 py-10 text-white/80 sm:px-10 lg:px-16 sm:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-6 lg:gap-8">
          <div className="md:col-span-2">
            <Image
              src="/brand/carbs-cravings-logo-light.png"
              alt="Carbs & Cravings"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              Ghar ka khana, bina ghar ke. Fresh home-cooked meals from nearby kitchens.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:col-span-4 md:grid-cols-4">
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li><a href="#" className="transition hover:text-white">About Us</a></li>
                <li><a href="#" className="transition hover:text-white">Careers</a></li>
                <li><a href="#for-cooks" className="transition hover:text-white">For Home Cooks</a></li>
              </ul>
            </div>




            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-white">Social</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li><a href="#" className="transition hover:text-white">Instagram</a></li>
                <li><a href="#" className="transition hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="transition hover:text-white">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm">
          <p>© 2026 Carbs & Cravings. Ghar ka khana, bina ghar ke.</p>
        </div>
      </div>
    </footer>
  );
}
