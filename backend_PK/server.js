require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3001;

// Kết nối MongoDB (Dùng biến môi trường cho bảo mật)
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://baouyen037:kaFR9i6mmyXKMKa1@cluster0.a6b7j.mongodb.net/QLDatLich?retryWrites=true&w=majority';

// Middleware để xử lý JSON từ client
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Could not connect to MongoDB Atlas...', err));

// Import models
const BenhNhan = require('./models/benhnhan');
const BacSi = require('./models/bacsi'); 
const DichVu = require('./models/dichvu');
const LichHen = require('./models/lichhen');
const ThanhToan = require('./models/thanhtoan');
const BenhAn = require('./models/benhan');
const Thuoc = require('./models/thuoc');
const DonThuoc = require('./models/donthuoc');

// API để lấy danh sách bệnh nhân
app.get('/api/benhnhans', async (req, res) => {
  try {
    const benhnhans = await BenhNhan.find();
    res.json(benhnhans);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API để thêm bệnh nhân mới
app.post('/api/benhnhans', async (req, res) => {
  const { ten, sdt, diachi, gioitinh, ngaysinh } = req.body;
  const newBenhNhan = new BenhNhan({ ten, sdt, diachi, gioitinh, ngaysinh });

  try {
    await newBenhNhan.save();
    res.status(201).json(newBenhNhan);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API để lấy danh sách bác sĩ
app.get('/api/bacsis', async (req, res) => {
  try {
    const bacsis = await BacSi.find();
    res.json(bacsis);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API để thêm bác sĩ mới
app.post('/api/bacsis', async (req, res) => {
  const { ten, sdt, ngaylamviec, giolamviec } = req.body;
  const newBacSi = new BacSi({ ten, sdt, ngaylamviec, giolamviec });

  try {
    await newBacSi.save();
    res.status(201).json(newBacSi);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API để lấy danh sách dịch vụ
app.get('/api/dichvus', async (req, res) => {
  try {
    const dichvus = await DichVu.find();
    res.json(dichvus);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API để thêm dịch vụ mới
app.post('/api/dichvus', async (req, res) => {
  const { ten, gia, mota, hinhanh } = req.body;
  const newDichVu = new DichVu({ ten, gia, mota, hinhanh });

  try {
    await newDichVu.save();
    res.status(201).json(newDichVu);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API để tạo lịch hẹn
app.post('/api/lichhens', async (req, res) => {
  const { MaBN, MaBS, MaDV, ngay, gio } = req.body;
  const newLichHen = new LichHen({ MaBN, MaBS, MaDV, ngay, gio });

  try {
    await newLichHen.save();
    res.status(201).json(newLichHen);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API để tạo thanh toán
app.post('/api/thanhtoans', async (req, res) => {
  const { MaBN, MaDV, tongtien, hinhthucthanhtoan } = req.body;
  const newThanhToan = new ThanhToan({ MaBN, MaDV, tongtien, hinhthucthanhtoan });

  try {
    await newThanhToan.save();
    res.status(201).json(newThanhToan);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API để tạo bệnh án
app.post('/api/benhans', async (req, res) => {
  const { MaBN, MaBS, chandoan, ngaytaoBA } = req.body;
  const newBenhAn = new BenhAn({ MaBN, MaBS, chandoan, ngaytaoBA });

  try {
    await newBenhAn.save();
    res.status(201).json(newBenhAn);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API để thêm thuốc
app.post('/api/thuocs', async (req, res) => {
  const { ten, gia, donvi_doluong } = req.body;
  const newThuoc = new Thuoc({ ten, gia, donvi_doluong });

  try {
    await newThuoc.save();
    res.status(201).json(newThuoc);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API để thêm đơn thuốc
app.post('/api/donthuocs', async (req, res) => {
  const { MaBA, MaDT } = req.body;
  const newDonThuoc = new DonThuoc({ MaBA, MaDT });

  try {
    await newDonThuoc.save();
    res.status(201).json(newDonThuoc);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Lắng nghe trên cổng 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
