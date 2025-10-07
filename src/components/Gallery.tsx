import { useRef, useState } from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function Gallery() {
  const eyebrowScrollRef = useRef<HTMLDivElement>(null)
  const lipScrollRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  const eyebrowGallery = [
    { id: 1, src: '/eyebrow01.jpeg' },
    { id: 2, src: '/eyebrow02.png' },
    { id: 3, src: '/eyebrow03.jpeg' },
    { id: 4, src: '/eyebrow04.jpeg' },
    { id: 5, src: '/KakaoTalk_Photo_2025-10-07-15-38-15_005.jpeg' },
    { id: 6, src: '/KakaoTalk_Photo_2025-10-07-15-38-15_007.jpeg' },
    { id: 7, src: '/KakaoTalk_Photo_2025-10-07-15-38-15_008.jpeg' },
    { id: 8, src: '/KakaoTalk_Photo_2025-10-07-16-11-17_001.png' },
    { id: 9, src: '/KakaoTalk_Photo_2025-10-07-16-11-18_002.jpeg' },
    { id: 10, src: '/KakaoTalk_Photo_2025-10-07-16-11-18_003.jpeg' },
    { id: 11, src: '/KakaoTalk_Photo_2025-10-07-16-11-18_004.jpeg' },
    { id: 12, src: '/eyebrow-new.jpeg' },
  ]

  const lipGallery = [
    { id: 1, src: '/lip02.jpeg' },
    { id: 2, src: '/lip03.png' },
    { id: 3, src: '/lip04.jpeg' },
    { id: 4, src: '/lip01.jpg' },
  ]

  const [currentGallery, setCurrentGallery] = useState<'eyebrow' | 'lip'>('eyebrow')

  const imagesPerPage = 4
  const totalPages = Math.ceil(eyebrowGallery.length / imagesPerPage)

  const scrollLeft = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const scrollRight = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const getCurrentPageImages = () => {
    const startIndex = currentPage * imagesPerPage
    return eyebrowGallery.slice(startIndex, startIndex + imagesPerPage)
  }

  // Modal navigation functions
  const openImageModal = (imageSrc: string, gallery: 'eyebrow' | 'lip') => {
    const targetGallery = gallery === 'eyebrow' ? eyebrowGallery : lipGallery
    const imageIndex = targetGallery.findIndex(img => img.src === imageSrc)
    setCurrentGallery(gallery)
    setSelectedImageIndex(imageIndex)
    setSelectedImage(imageSrc)
  }

  const navigateModalImage = (direction: 'prev' | 'next') => {
    const targetGallery = currentGallery === 'eyebrow' ? eyebrowGallery : lipGallery
    const newIndex = direction === 'prev'
      ? (selectedImageIndex - 1 + targetGallery.length) % targetGallery.length
      : (selectedImageIndex + 1) % targetGallery.length

    setSelectedImageIndex(newIndex)
    setSelectedImage(targetGallery[newIndex].src)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedImageIndex(0)
  }

  return (
    <section className="py-20 bg-beige-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige-900 mb-4">
            Before & After
          </h2>
          <p className="text-lg text-beige-700">前後對比</p>
          <p className="text-beige-600 mt-2">Real results from our Seoul studio</p>
          <p className="text-sm text-beige-500">首爾工作室真實案例</p>
        </div>

        {/* Eyebrow Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-beige-900 mb-8 text-center">
            Eyebrow Embroidery
            <span className="block text-base font-sans text-beige-600 mt-1">眉毛紋繡</span>
          </h3>

          <div className="relative">
            {/* Left Navigation Arrow - Responsive positioning */}
            <button
              onClick={scrollLeft}
              disabled={currentPage === 0}
              className={`absolute left-2 md:left-[-60px] top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-beige-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                currentPage === 0
                  ? 'text-beige-400 cursor-not-allowed bg-beige-100'
                  : 'text-beige-800 hover:text-beige-900 hover:shadow-xl hover:bg-beige-300'
              }`}
            >
              <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Right Navigation Arrow - Responsive positioning */}
            <button
              onClick={scrollRight}
              disabled={currentPage === totalPages - 1}
              className={`absolute right-2 md:right-[-60px] top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-beige-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                currentPage === totalPages - 1
                  ? 'text-beige-400 cursor-not-allowed bg-beige-100'
                  : 'text-beige-800 hover:text-beige-900 hover:shadow-xl hover:bg-beige-300'
              }`}
            >
              <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Grid Container - Full width like Lip Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-500 ease-in-out">
              {getCurrentPageImages().map((item) => (
                <div key={item.id} className="pt-1 pb-2">
                  <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer"
                       onClick={() => openImageModal(item.src, 'eyebrow')}>
                    <div className="relative overflow-hidden">
                      <img
                        src={item.src}
                        alt={`Eyebrow treatment ${item.id}`}
                        className="w-full h-80 object-cover"
                        onError={(e) => {
                          console.error(`Failed to load image: ${item.src}`)
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Page Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-beige-700'
                      : 'bg-beige-300 hover:bg-beige-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lip Gallery */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-beige-900 mb-8 text-center">
            Lip Embroidery
            <span className="block text-base font-sans text-beige-600 mt-1">唇部紋繡</span>
          </h3>

          {/* Grid Container */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lipGallery.map((item) => (
              <div key={item.id} className="pt-1 pb-2">
                <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer"
                     onClick={() => openImageModal(item.src, 'lip')}>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={`Lip treatment ${item.id}`}
                      className="w-full h-80 object-cover"
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.src}`)
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-beige-100 text-beige-700 px-6 py-3 border border-beige-300">
            <CheckCircleIcon className="w-5 h-5 fill-current" />
            <span className="font-medium">100% Authentic Client Results</span>
            <span className="text-sm">100% 真實客戶效果</span>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal()
            }
          }}
        >
          {/* Content Container */}
          <div className="relative flex flex-col items-center max-w-[90vw] max-h-[90vh]">
            {/* Main Image */}
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[75vh] object-contain"
            />

            {/* Bottom Navigation Bar */}
            <div className="mt-4 flex items-center gap-4">
              {/* Previous Button */}
              <button
                onClick={() => navigateModalImage('prev')}
                className="w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>

              {/* Image Counter */}
              <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                {selectedImageIndex + 1} / {currentGallery === 'eyebrow' ? eyebrowGallery.length : lipGallery.length}
              </div>

              {/* Next Button */}
              <button
                onClick={() => navigateModalImage('next')}
                className="w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}