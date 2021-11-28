import phone from '../image/menuImages/smartphone-1-48x48.png';
import laptop from '../image/menuImages/laptop-2-48x48.png';
import apple from '../image/menuImages/apple-48x48.png';
import samsung from '../image/menuImages/phone-samsung-galaxy-note-popular-model-48x48.png';
import tablet from '../image/menuImages/tablet-outline-in-horizontal-position-1-48x48.png';
import phukien from '../image/menuImages/headset-1-48x48.png';
import khuyenmai from '../image/menuImages/gift-1-48x48.png';



export const Router = [
    {
        lable: 'ĐIỆN THOẠI',
        icon: phone,
        path: '/dienthoai',
        enpont: '/products?danhmuc=dienthoai'
    },
    {
        lable: 'LAP TOP',
        icon: laptop,
        path: '/laptop',
        enpont: '/products?danhmuc=laptop'
    },
    {
        lable: 'APPLE',
        icon: apple,
        path: '/dienthoai/apple',
        enpont: '/products?thuonghieu=Apple'
    },
    {
        lable: 'SAMSUNG',
        icon: samsung,
        path: '/dienthoai/samsung',
        enpont: '/products?thuonghieu=samssung'
    },
    {
        lable: 'TABLET',
        icon: tablet,
        path: '/tablet',
        enpont: '/products?danhmuc=tablet'
    },
    {
        lable: 'PHỤ KIỆN',
        icon: phukien,
        path: '/phukien',
        enpont: '/products?danhmuc=phukien'
    },
    {
        lable: 'KHUYẾN MÃI',
        icon: khuyenmai,
        path: '/khuyenmai',
        enpont: '/products?khuyenmai=true'
    }
]