import React, { useState } from "react";
import ReportForm from "../components/ReportForm";
import ReportList from "../components/ReportList";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Report2 = () => {
    const [loading, setLoading] = useState(false);

    const notifsuccess = () =>
        toast.success("berhasil tambahakan report!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    return (
        <div className="bg-gray-100 min-h-screen">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <header className="bg-blue-500 py-4 px-8 text-white">
                <h1 className="text-2xl font-bold">Aplikasi Laporan</h1>
            </header>
            <main className="container mx-auto p-4">
                <div className="fllex relative  mx-auto grid grid-cols-1 gap-4 px-4 pt-8 md:grid-cols-3  md:px-8 lg:max-w-7xl lg:grid-cols-2 lg:gap-1 ">
                    <ReportForm notsucces={notifsuccess} />
                    <ReportList />
                </div>
            </main>
            <footer className="bg-gray-200 py-2 text-center">
                <p className="text-gray-500 text-sm">
                    © 2023 Aplikasi Laporan. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Report2;
