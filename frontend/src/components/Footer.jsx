import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Giới thiệu */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Amit Store</h3>
          <p className="text-sm text-gray-300">
            Amit là cửa hàng chuyên cung cấp các sản phẩm công nghệ chính hãng: laptop, điện thoại, phụ kiện, thiết bị thông minh... với giá cả cạnh tranh và dịch vụ tận tâm.
          </p>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Liên hệ</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>📍 Địa chỉ: 123 Đường Công Nghệ, Q.1, TP.HCM</li>
            <li>📞 Hotline: 0909 123 456</li>
            <li>📧 Email: support@amitstore.vn</li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Kết nối với chúng tôi</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition">Facebook</a>
            <a href="#" className="hover:text-pink-500 transition">Instagram</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-red-500 transition">YouTube</a>
          </div>
        </div>
      </div>

      {/* Footer dưới cùng */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Amit Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
