import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BiodataPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save this data
    console.log('Biodata submitted:', formData);
    navigate('/education');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-8"> biodata </h1>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Masukkan nama lengkap Anda"
                required
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
                Umur
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Masukkan umur Anda"
                min="1"
                max="120"
                required
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
                Jenis Kelamin
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              >
                <option value="">Pilih jenis kelamin</option>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
                <option value="other">Lainnya</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Kembali
            </button>
            
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Lanjutkan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BiodataPage;