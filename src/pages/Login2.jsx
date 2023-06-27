import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login2 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const notifyerror = () =>
        toast.error("Username/Password! Not match", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "https://server-reports.kencang.id/report-app4/public/api/login",
                {
                    email: email,
                    password: password,
                }
            );

            // Cek apakah responsenya sukses atau tidak
            if (response.status === 200) {
                const token = response.data.token;
                // Simpan token di local storage
                localStorage.setItem("token", token);
                console.log("Login berhasil");
                var decoded = jwt_decode(token);
                setIsLoggedIn(true);
                console.log(token);
                console.log(response.data.user[0].inspector[0]);
                const id_inspector = response.data.user[0].inspector[0].id;
                const field = response.data.user[0].inspector[0].field;
                const name = response.data.user[0].name;
                localStorage.setItem("id_inspector", id_inspector);
                localStorage.setItem("field", field);
                localStorage.setItem("name", name);
                console.log(decoded.exp);
                const expToken = decoded.exp;

                localStorage.setItem("exp", JSON.stringify(expToken));
            } else {
                console.log("Login gagal");
                notifyerror();
            }
        } catch (error) {
            console.log("Terjadi kesalahan:", error);
            notifyerror();
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="from-blue-400 to-blue-600 flex h-screen items-center justify-center bg-gradient-to-b p-2">
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
            <div className="w-full max-w-sm rounded-md bg-blue1 p-6 shadow-md">
                <h1 className="mb-4 text-center text-2xl font-bold text-white">
                    Login
                </h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="border-gray-300 mb-4 w-full rounded-md border px-3 py-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border-gray-300 mb-4 w-full rounded-md border px-3 py-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="bg-blue-700 hover:bg-blue-800 rounded py-2 px-4 font-bold text-blue1"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login2;
