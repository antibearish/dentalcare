import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/biodata');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-teal-600 text-white p-6 text-center">
          <h1 className="text-4xl font-bold mb-2">🪶 Dental Caries Care</h1>
          <p className="text-lg opacity-90">Aplikasi Edukasi dan Skrining Kesehatan Gigi</p>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="flex-1">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                <span className="text-5xl">🦷</span>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Selamat Datang di Dental Care</h2>
              <p className="text-gray-600 mb-4">
                Aplikasi ini dibuat sebagai media pembelajaran interaktif yang menggabungkan edukasi, 
                kuis/skrining, dan solusi personalisasi berdasarkan hasil penilaian.
              </p>
              <p className="text-gray-600">
                Dengan Dental Caries Care, Anda dapat memahami risiko gigi berlubang dan mendapatkan 
                solusi yang sesuai untuk menjaga kesehatan gigi Anda.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Tentang Aplikasi Ini</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Edukasi tentang kesehatan gigi dan penyebab gigi berlubang</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Kuesioner skrining untuk menilai risiko gigi berlubang</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Solusi personalisasi berdasarkan hasil penilaian</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Fitur game edukasi untuk kebiasaan menjaga kesehatan gigi</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">Pembuat dan Institusi</h3>
            <p className="text-gray-700">
              Aplikasi ini dikembangkan sebagai bagian dari proyek edukasi kesehatan gigi. 
              Tujuan utamanya adalah memberikan informasi dan alat edukasi yang interaktif 
              untuk membantu masyarakat memahami pentingnya menjaga kesehatan gigi dan 
              mencegah terjadinya gigi berlubang.
            </p>
          </div>

          <div className="text-center">
            <button 
              onClick={handleStart}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Mulai Sekarang
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-4 text-center text-gray-600 border-t">
          <p>© {new Date().getFullYear()} Dental Caries Care - Developed for Educational Purposes</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;