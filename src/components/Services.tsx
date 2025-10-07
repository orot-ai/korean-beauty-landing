
export default function Services() {
  const services = [
    {
      title: 'Eyebrow Embroidery',
      subtitle: '眉毛紋繡',
      price: 'HK$ 3,000',
      features: [
        'Hair Stroke Technique',
        '2 hours procedure',
        'Natural looking result',
        '霧眉/線條眉技術',
        '2小時療程',
        '自然逼真效果'
      ]
    },
    {
      title: 'Lip Embroidery',
      subtitle: '唇部紋繡',
      price: 'HK$ 4,000',
      features: [
        'Full lip coloring',
        '2 hours procedure',
        'Long-lasting color',
        '全唇上色',
        '2小時療程',
        '持久顯色'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-32 right-16 w-80 h-80 bg-beige-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-warm-300 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-nude-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige-900 mb-4">
            Services & Pricing
          </h2>
          <p className="text-lg text-beige-700">服務及價格</p>
          <div className="w-24 h-1 bg-beige-400 mx-auto mt-6"></div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className={`${(index === 0 || index === 1) ? 'relative bg-gradient-to-br from-beige-100 to-beige-200' : 'bg-gradient-to-br from-beige-100 to-beige-200'} py-10 px-8 text-center`}>
                {index === 0 && (
                  <div
                    className="absolute inset-0 bg-cover opacity-25"
                    style={{
                      backgroundImage: 'url(/eyebrow-new.jpeg)',
                      backgroundSize: '110%',
                      backgroundPosition: '100% 50%'
                    }}
                  ></div>
                )}
                {index === 1 && (
                  <div
                    className="absolute inset-0 bg-cover opacity-25"
                    style={{
                      backgroundImage: 'url(/lip01.jpg)',
                      backgroundSize: '110%',
                      backgroundPosition: '50% 40%'
                    }}
                  ></div>
                )}
                <div className="relative z-10">
                  <h3 className="text-3xl font-semibold text-beige-900 mb-1 mt-2">
                    {service.title}
                  </h3>
                  <p className="text-beige-600">{service.subtitle}</p>
                </div>
              </div>

              {/* Price */}
              <div className="bg-white px-8 py-6 text-center border-b">
                <span className="text-4xl font-bold text-beige-700">
                  {service.price}
                </span>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-5 h-5 border-2 border-amber-700 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-beige-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Touch-up Service */}
        <div className="bg-gradient-to-r from-beige-800 to-beige-900 p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-semibold mb-3">
            Touch-up Service Available
          </h3>
          <p className="text-lg mb-4">補色服務 (兩個月後)</p>
          <div className="text-3xl font-bold mb-4">HK$ 1,500</div>
          <p className="text-beige-100">
            Perfect your results with a complimentary follow-up
            <span className="block mt-1">完美您的效果，包含後續跟進</span>
          </p>
        </div>
      </div>
    </section>
  )
}