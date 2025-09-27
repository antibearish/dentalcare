import React from 'react';
import { useNavigate } from 'react-router-dom';

const EducationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/screening');
  };

  const handleBack = () => {
    navigate('/biodata');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">Materi Edukasi</h1>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Apa itu Gigi Berlubang?</h2>
            <p className="text-gray-700">
              Gigi berlubang atau karies gigi adalah kerusakan pada enamel gigi yang disebabkan oleh bakteri 
              di mulut. Bakteri ini menghasilkan asam yang menyerang enamel gigi dan menyebabkan lubang.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-green-800 mb-3">Penyebab Gigi Berlubang</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Konsumsi makanan dan minuman manis secara berlebihan</li>
              <li>Kurangnya menjaga kebersihan mulut</li>
              <li>Gigi yang tidak dirawat secara rutin</li>
              <li>Minum susu sebelum tidur tanpa membersihkan gigi</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-yellow-800 mb-3">Gejala Gigi Berlubang</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Nyeri gigi, terutama saat makan atau minum sesuatu yang manis, panas, atau dingin</li>
              <li>Lubang atau cekungan terlihat pada gigi</li>
              <li>Bercak cokelat, hitam atau putih pada permukaan gigi</li>
              <li>Sakit saat menggigit</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <button
            onClick={handleBack}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Kembali
          </button>
          
          <button
            onClick={handleContinue}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Lanjutkan ke Skrining
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;