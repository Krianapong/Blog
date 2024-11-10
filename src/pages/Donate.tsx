import React, { useState } from 'react';
import QRCode from 'react-qr-code'; // ไลบรารีนี้ใช้ default import ได้

const Donate: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const [qrData, setQrData] = useState<string>('');

    const bankAccount = '5222301122650362';

    const generateQrCode = () => {
        const qrContent = `00020101021129370016A000000677010111${bankAccount}530376454045${amount}5802TH6304`;
        setQrData(qrContent);
    };

    return (
        <div className="prose mx-auto p-8 bg-white shadow-md rounded-lg">
            {/* <p className="text-center">
                กรุณากรอกจำนวนเงินที่ต้องการบริจาคเพื่อสร้าง QR Code สำหรับธนาคารกรุงไทย
            </p> */}

            <div className="mt-6">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="กรอกจำนวนเงิน (บาท)"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={generateQrCode}
                    className="mt-4 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-transform transform hover:scale-105"
                >
                    Generate QR Code
                </button>
            </div>

            {qrData && (
                <div className="mt-8 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">QR Code ของคุณ</h2>
                    <QRCode value={qrData} size={200} />
                    <p className="mt-4 text-center">สแกน QR Code นี้เพื่อบริจาคผ่านธนาคารกรุงไทย</p>
                </div>
            )}
        </div>
    );
};

export default Donate;
