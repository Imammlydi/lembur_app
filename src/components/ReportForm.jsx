import React, { useState } from "react";
import { createReport, getReportByIdInspector } from "../services/reports";
// import { createReport } from './api';

const ReportForm = ({ notsucces, notfyerror }) => {
    const id_inspector = localStorage.getItem("id_inspector");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        shift: "",
        date: "",
        inspector_id: id_inspector,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const tokens = localStorage.getItem("token");
        createReport(formData, tokens)
            .then((response) => {
                console.log("Laporan berhasil ditambahkan:", response.data);
                getReportByIdInspector(id_inspector, tokens).then((result) => {
                    console.log(result), setReports(result);
                });
                // Lakukan tindakan lanjutan setelah laporan berhasil ditambahkan
                notsucces();
            })
            .catch((error) => {
                console.error("Gagal menambahkan laporan:", error);
                // Lakukan tindakan lanjutan jika terjadi kesalahan
                notfyerror();
            });
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="mb-4 text-2xl font-bold">Tambah Laporan</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="text-gray-700 block">Judul</label>
                    <input
                        className="border-gray-400 w-full rounded border px-4 py-2"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 block">Deskripsi</label>
                    <input
                        className="border-gray-400 w-full rounded border px-4 py-2"
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 block">Shift</label>
                    <input
                        className="border-gray-400 w-full rounded border px-4 py-2"
                        type="text"
                        name="shift"
                        value={formData.shift}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 block">Tanggal</label>
                    <input
                        className="border-gray-400 w-full rounded border px-4 py-2"
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
                {/* <div className="mb-4">
          <label className="block text-gray-700">ID Pemeriksa</label>
          <input
            className="border border-gray-400 px-4 py-2 rounded w-full"
            type="text"
            name="inspector_id"
            value={formData.inspector_id}
            onChange={handleChange}
          />
        </div> */}
                <button
                    className="bg-blue-500 rounded px-4 py-2 text-blue1"
                    type="submit"
                >
                    Tambah Laporan
                </button>
            </form>
        </div>
    );
};

export default ReportForm;
