import React from "react";
import { Preview, print } from "react-html2pdf";
import { terbilang } from "../services/terbilang";
import angkaTerbilang from "@develoka/angka-terbilang-js";

const Kwitansi = ({nama_karyawan,jabatans,totlaLemburMalam,totalSM,tanggal}) => {
    // const generatePdf = () => {
    //   const element = document.getElementById('kwitansi');
    //   html2pdf().from(element).save();
    // };
    function removeNonDigits(amount) {
      return amount.replace(/[^\d]/g, '');
    }
    
    function formatCurrency(amount) {
      var cleanedAmount = removeNonDigits(amount);
      return cleanedAmount.replace(/^(0+)/, '');
    }
     
    function convertToNumber(amount) {
      // Hapus tanda mata uang "Rp"
      amount = amount.replace('Rp', '');
    
      // Hapus tanda titik sebagai pemisah ribuan
      amount = amount.replace(/\./g, '');
    
      // Hapus tanda koma dan semua karakter setelahnya
      amount = amount.replace(/,.*/, '');
    
      return amount;
    }
    
    const kwitansiData = {
        nomor: "KW001",
        tanggal: "26 Juni 2023",
        penerima: "John Doe",
        jumlah: "Rp 1.000.000",
    };

    const Exp = () => {
        return <></>;
    };

    const handlePrint = () => {
        const options = {
            filename: `Lembur_${nama_karyawan}_${jabatans}_${tanggal}`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };

        print(options.filename, "kwitansi");
    };

    const pdfOptions = {
        orientation: "portrait",
        unit: "mm",
        format: "A4",
    };

    return (
        <div>
            <div>
                {/* <Preview id="kwitansi"> */}
                <div   id="kwitansi">

                  <div
                      className="m-2 max-w-xl rounded-lg border border-dashed p-3"
                    
                  >
                      <div className="flex items-center py-1">
                          <p className="font-Bitter font-bold">Nomor Kwitansi:</p>
                          <div className="ml-2 h-8  flex-1 border-b  flex items-center"></div>
                      </div>
                      <div className="flex items-center py-1 ">
                          <p className="font-Bitter font-bold">Tanggal:</p>
                          <div className="ml-2 h-8  flex-1 border-b font-Bitter  flex items-center">{tanggal}</div>
                      </div>
                      <div className="flex items-center py-1">
                          <p className="font-Bitter font-bold">
                              Telah di terima dari :
                          </p>
                          <div className="ml-2 h-8  flex-1 border-b font-Bitter  flex items-center"> {nama_karyawan} / {jabatans}</div>
                      </div>
                      <div className="flex items-center py-1">
                          <p className="font-Bitter font-bold">
                              Uang sejumlah :
                          </p>
                          <div className=" ml-2  h-8 flex-1 flex bg-graydisable3 px-2  text-sm items-center font-Bitter text-white">
                              {angkaTerbilang(formatCurrency(totlaLemburMalam)).replace(/^.|\b\w/g, (match) => match.toUpperCase())}{" "}
                              Rupiah
                          </div>
                      </div>
                      <div className="flex items-center py-1">
                          <p className="font-Bitter font-bold">
                              Untuk Pembayaran:{" "}
                          </p>
                          <div className="ml-2 h-8  flex-1 border-b font-Bitter  flex items-center">
                              Lembur Malam
                          </div>
                      </div>
                      <div className="mt-10 flex items-center justify-between py-1 px-5">
                          <div className="ml-2 w-36 border-b border-t bg-graydisable py-2 font-bold font-Bitter">
                             { totlaLemburMalam}
                          </div>
                          <div>
                              <div className="mb-24 w-40  font-Bitter text-sm  flex items-center text-center">Jatigede, {tanggal}</div>
                              <div className="w-30 border-b"></div>
                          </div>
                      </div>
                  </div>
{/* ----------------lembur Siang */}
                  <div
                      className="m-2 max-w-xl rounded-lg border border-dashed p-3"
                    
                  >
                      <div className="flex items-center py-1">
                          <p className="font-Bitter font-bold">Nomor Kwitansi:</p>
                          <div className="ml-2 h-8  flex-1 border-b  flex items-center"></div>
                      </div>
                      <div className="flex items-center py-1">
                          <p className="font-Bitter font-bold">Tanggal:</p>
                          <div className="ml-2 h-8  flex-1 border-b font-Bitter flex items-center">{tanggal}</div>
                      </div>
                      <div className="flex items-center py-1">
                          <p className="font-Bitter font-bold">
                              Telah di terima dari :
                          </p>
                          <div className="ml-2 h-8  flex-1 border-b font-Bitter flex items-center"> {nama_karyawan} / {jabatans}</div>
                      </div>
                      <div className="flex items-center py-1">
                          <p className="font-Bitter font-bold">
                              Uang sejumlah :
                          </p>
                          <div className=" ml-2  h-8 flex flex-1 bg-graydisable3 px-2  font-Bitter text-sm items-center text-white">
                     

                              {angkaTerbilang(formatCurrency(totalSM)).replace(/^.|\b\w/g, (match) => match.toUpperCase())}{" "}
                              Rupiah
                        
                          </div>
                      </div>
                      <div className="flex items-center py-1">
                          <p className="font-Bitter font-bold">
                              Untuk Pembayaran:{" "}
                          </p>
                          <div className="ml-2 h-8  flex-1 border-b font-Bitter  flex items-center">
                              Lembur Siang
                          </div>
                      </div>
                      <div className="mt-10 flex items-center justify-between py-1 px-5">
                          <div className="ml-2 w-36 border-b border-t bg-graydisable py-2 font-bold text-sm">
                             { totalSM}
                          </div>
                          <div>
                              <div className="mb-24 w-40  text-sm font-Bitter  flex items-center text-center">Jatigede, {tanggal}</div>
                              <div className="w-30 border-b"></div>
                          </div>
                      </div>
                  </div>
                



                </div>
                {/* </Preview> */}
            </div>
            {/* 
            <button onClick={() => handlePrint("a", "jsx-template")}> print</button> */}
            <button onClick={handlePrint}>print</button>
        </div>
    );
};

export default Kwitansi;
