import {
  MdArrowForward,
  MdChevronRight,
  MdSchedule,
  MdEvent,
  MdGroup
} from 'react-icons/md'

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-100 to-stone-200 text-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-beige-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-beige-900">
            Don't Miss This Chance!
          </h2>
          <p className="text-xl text-beige-600">不要錯過這個機會！</p>
        </div>

        {/* Urgency Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/90 backdrop-blur-sm p-6 text-center border border-beige-300 shadow-md">
            <div className="flex justify-center mb-3">
              <MdSchedule className="w-12 h-12 text-beige-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-beige-900">Only 2 Days</h3>
            <p className="text-beige-600">僅在香港兩天</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 text-center border border-beige-300 shadow-md">
            <div className="flex justify-center mb-3">
              <MdEvent className="w-12 h-12 text-beige-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-beige-900">November 29-30</h3>
            <p className="text-beige-600">11月29-30日</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 text-center border border-beige-300 shadow-md">
            <div className="flex justify-center mb-3">
              <MdGroup className="w-12 h-12 text-beige-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-beige-900">10 Spots Only</h3>
            <p className="text-beige-600">僅限10位客戶</p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-12">
          <button
            onClick={() => alert('Booking link will be connected')}
            className="group relative inline-flex items-center gap-3 bg-beige-800 text-white px-10 py-5 text-lg font-semibold hover:bg-beige-900 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <span>SECURE YOUR SPOT NOW</span>
            <MdArrowForward className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-beige-700 mt-3">立即預約您的位置</p>
        </div>

        {/* Contact Info */}
        <div className="bg-white/90 backdrop-blur-sm p-8 border border-beige-300 shadow-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6 text-beige-900">
            Questions? Contact Us
          </h3>
          <p className="text-beige-600 text-center mb-6">
            有疑問？聯絡我們
          </p>

          <div className="space-y-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/821037573918"
              className="flex items-center justify-between bg-green-500/10 p-4 hover:bg-green-500/20 transition-colors border border-green-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-beige-600">+82 10-3757-3918</p>
                </div>
              </div>
              <MdChevronRight className="w-5 h-5 text-beige-400" />
            </a>

            {/* Business Hours */}
            <div className="bg-beige-50 p-4 border border-beige-200">
              <p className="font-semibold mb-2">Business Hours 營業時間</p>
              <p className="text-beige-600">November 29-30: 11:00 AM - 8:00 PM</p>
              <p className="text-beige-500 text-sm">11月29-30日: 上午11時 - 晚上8時</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-beige-200">
          <p className="text-beige-500 text-sm">
            © 2024 Seoul Beauty Artists · All Rights Reserved
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/821037573918"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transform hover:scale-110 transition-all duration-300 z-50"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
      </a>
    </section>
  )
}