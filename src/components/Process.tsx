import {
  MdSmartphone,
  MdChat,
  MdAutoAwesome,
  MdCreditCard,
  MdLocationOn,
  MdTrain,
  MdLocalShipping,
  MdPushPin
} from 'react-icons/md'

export default function Process() {
  const steps = [
    {
      number: '1',
      icon: <MdSmartphone className="w-8 h-8 text-white" />,
      title: 'Book via WhatsApp',
      subtitle: 'WhatsApp預約',
      description: 'Reserve your spot on WhatsApp',
      subdescription: '通過WhatsApp預約您的位置'
    },
    {
      number: '2',
      icon: <MdChat className="w-8 h-8 text-white" />,
      title: 'Consultation',
      subtitle: '諮詢',
      description: 'Discuss your desired look',
      subdescription: '討論您想要的效果'
    },
    {
      number: '3',
      icon: <MdAutoAwesome className="w-8 h-8 text-white" />,
      title: 'Treatment',
      subtitle: '治療',
      description: '2-hour professional procedure',
      subdescription: '2小時專業療程'
    },
    {
      number: '4',
      icon: <MdCreditCard className="w-8 h-8 text-white" />,
      title: 'Payment',
      subtitle: '付款',
      description: 'Pay remaining balance in cash',
      subdescription: '以現金支付餘額'
    }
  ]

  return (
    <section className="py-20 bg-beige-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-12 w-96 h-96 bg-beige-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-32 right-24 w-80 h-80 bg-warm-200 rounded-full filter blur-3xl"></div>
        <div className="absolute top-2/3 left-1/4 w-72 h-72 bg-nude-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-beige-700">預約流程</p>
          <div className="w-24 h-1 bg-beige-400 mx-auto mt-6"></div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-beige-300 to-beige-300 transform translate-x-12"></div>
              )}

              <div className="text-center">
                {/* Step Number */}
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-beige-700 to-beige-700 rounded-full flex items-center justify-center text-white shadow-lg">
                    <div className="flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-semibold text-beige-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-beige-600 text-sm mb-3">{step.subtitle}</p>
                <p className="text-beige-700 text-sm">{step.description}</p>
                <p className="text-beige-500 text-xs mt-1">{step.subdescription}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Location Section */}
        <div className="bg-gradient-to-br from-beige-50 to-beige-100 p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-beige-900 mb-6 text-center">
            Location 地點
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="bg-white p-6">
              <div className="flex items-start mb-4">
                <div className="mr-3 flex items-center justify-center">
                  <MdLocationOn className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="font-semibold text-beige-700 mb-2">
                    Room 2501A, Car Po Commercial Building
                  </p>
                  <p className="text-beige-600">
                    18-20 Lyndhurst Terrace, Central, Hong Kong
                  </p>
                  <p className="text-beige-600 text-sm mt-2">
                    中環擺花街18-20號
                  </p>
                  <p className="text-beige-600 text-sm">
                    嘉寶商業大廈2501A室
                  </p>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-beige-600 flex items-center gap-2">
                  <MdPushPin className="w-4 h-4 text-amber-700" />
                  Next to Benefit Cosmetics
                </p>
                <p className="text-xs text-beige-500 mt-1">
                  位於Benefit旁邊
                </p>
              </div>
            </div>

            {/* Transport */}
            <div className="bg-white p-6">
              <h4 className="font-semibold text-beige-700 mb-4">Transportation 交通</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="mr-3 flex items-center justify-center">
                    <MdTrain className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-beige-700">Central Station - 5 min walk</p>
                    <p className="text-beige-600 text-sm">中環站 · 5分鐘步行</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 flex items-center justify-center">
                    <MdLocalShipping className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-beige-700">Multiple bus routes available</p>
                    <p className="text-beige-600 text-sm">多條巴士路線</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}