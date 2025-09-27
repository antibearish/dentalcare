import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScreeningPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/results');
  };

  const handleBack = () => {
    navigate('/education');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">Kuesioner Skrining Gigi Berlubang</h1>
        
        <div className="space-y-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Seberapa sering Anda menyikat gigi dalam sehari?</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="question1" className="mr-2" />
                <span>Dua kali sehari atau lebih</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question1" className="mr-2" />
                <span>Satu kali sehari</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question1" className="mr-2" />
                <span>Kurang dari satu kali sehari</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question1" className="mr-2" />
                <span>Tidak pernah</span>
              </label>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Seberapa sering Anda mengonsumsi makanan/minuman manis dalam seminggu?</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="question2" className="mr-2" />
                <span>Kurang dari 3 kali seminggu</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question2" className="mr-2" />
                <span>3-5 kali seminggu</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question2" className="mr-2" />
                <span>Lebih dari 5 kali seminggu</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question2" className="mr-2" />
                <span>Setiap hari</span>
              </label>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Apakah Anda pernah merasakan nyeri gigi?</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="question3" className="mr-2" />
                <span>Belum pernah</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question3" className="mr-2" />
                <span>Jarang</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question3" className="mr-2" />
                <span>Sering</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question3" className="mr-2" />
                <span>Sangat sering</span>
              </label>
            </div>
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
            onClick={handleFinish}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Selesai dan Lihat Hasil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreeningPage;