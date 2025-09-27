import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/screening');
  };

  const handleDownload = () => {
    alert('Fitur download PDF akan diimplementasikan nanti');
  };

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">Hasil Penilaian Risiko Gigi Berlubang</h1>
        
        <div className="bg-blue-50 p-8 rounded-lg mb-8 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Risiko Rendah</h2>
          <div className="text-6xl mb-4">😊</div>
          <p className="text-gray-700 text-lg">
            Hasil skrining menunjukkan bahwa Anda memiliki risiko rendah terhadap gigi berlubang.
            Terus pertahankan kebiasaan baik Anda!
          </p>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Rekomendasi untuk Anda:</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Teruskan kebiasaan menyikat gigi dua kali sehari</li>
            <li>Kurangi konsumsi gula secara keseluruhan</li>
            <li>Bersihkan gigi secara teratur</li>
            <li>Periksakan gigi ke dokter gigi setiap 6 bulan sekali</li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={handleBack}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Kembali
          </button>
          
          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Unduh PDF Hasil
          </button>
          
          <button
            onClick={handleRestart}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Mulai Ulang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;