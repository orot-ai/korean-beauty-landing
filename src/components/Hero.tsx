import { ArrowRightIcon, ArrowDownIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-100 via-white to-nude-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-beige-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-warm-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-beige-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-beige-300 text-beige-900 px-4 py-2 text-sm font-medium mb-8 animate-fade-in">
          <span className="animate-pulse">🇰🇷</span>
          <span>LIMITED TIME ONLY</span>
          <span className="text-xs">限時活動</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-beige-900 mb-6 animate-slide-up">
          Seoul's Elite Artists
          <span className="block text-3xl md:text-5xl mt-4 font-light text-beige-700">
            Coming to Hong Kong
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-beige-900 mb-4 animate-slide-up animation-delay-200">
          Premium Korean Semi-Permanent Makeup
        </p>
        <p className="text-lg text-beige-800 mb-12 animate-slide-up animation-delay-300">
          首爾頂級半永久化妝技術 · 眉毛及唇部紋繡
        </p>

        {/* Date Box */}
        <div className="inline-flex items-center gap-6 mb-10 animate-scale-in animation-delay-400">
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-serif font-bold text-beige-700">29</div>
            <div className="text-lg text-beige-800 font-medium">NOV</div>
            <div className="text-sm text-beige-700">Friday</div>
          </div>
          <div className="text-3xl text-beige-700">-</div>
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-serif font-bold text-beige-700">30</div>
            <div className="text-lg text-beige-800 font-medium">NOV</div>
            <div className="text-sm text-beige-700">Saturday</div>
          </div>
        </div>
        <div className="text-center mb-8">
          <p className="text-beige-800 text-lg">11:00 AM - 8:00 PM</p>
          <p className="text-beige-700 text-sm">11月29-30日 · 上午11時 - 晚上8時</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in animation-delay-500">
          <button
            onClick={() => alert('Booking link will be connected')}
            className="group relative px-8 py-4 bg-beige-800 text-white font-semibold hover:bg-beige-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              Book Now
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="https://wa.me/821037573918"
            className="px-8 py-4 border-2 border-beige-800 text-beige-800 font-semibold hover:bg-beige-50 transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
              WhatsApp
            </span>
          </a>
        </div>

        {/* Urgency Notice */}
        <div className="bg-beige-50 border border-beige-300 p-4 inline-block animate-fade-in animation-delay-600">
          <p className="text-beige-900 font-semibold flex items-center gap-2 justify-center">
            <ExclamationTriangleIcon className="w-5 h-5 text-amber-500" />
            Only 10 spots available (5 per day)
          </p>
          <p className="text-beige-700 text-sm mt-1">
            僅限10個名額 · 每天5位
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="w-6 h-6 text-beige-400" />
      </div>
    </section>
  )
}