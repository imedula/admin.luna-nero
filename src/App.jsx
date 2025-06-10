import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import './App.css'; // Добавляем импорт стилей

const App = () => {
    
    const url = import.meta.env.VITE_API_URL;
    console.log("444",url);
    return (
        <div>
            <ToastContainer />
            <Navbar />
            <hr />
            <div className="app-content">
                <Sidebar />
                <div className="routes"> {/* Добавляем контейнер для Routes */}
                    <Routes>
                        <Route path="/add" element={<Add url={url} />} />
                        <Route path="/list" element={<List url={url} />} />
                        <Route path="/orders" element={<Orders url={url} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;