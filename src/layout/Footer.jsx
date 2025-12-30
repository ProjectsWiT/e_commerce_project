export default function Footer() {
  return (
    <footer className="border-t mt-8 bg-[#1f2a44] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Consulting Agency For Your Business
            </h2>
            <p className="text-sm text-gray-400">
              the quick fox jumps over the lazy dog
            </p>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition">
            Contact Us.
          </button>
        </div>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          <div>
            <h3 className="text-white font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                📍 4517 Washington Ave.
              </li>
              <li className="flex items-center gap-2">
                ✉️ debra.holt@example.com
              </li>
            </ul>
          </div>

        </div>

        {}
        <div className="border-t border-gray-600 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <p>Made With Love By Finland All Right Reserved</p>

          <div className="flex gap-4 text-lg">
            <span className="cursor-pointer hover:text-white">ⓕ</span>
            <span className="cursor-pointer hover:text-white">ⓘ</span>
            <span className="cursor-pointer hover:text-white">ⓣ</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
