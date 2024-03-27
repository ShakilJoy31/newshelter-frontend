"use client"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import DashboardCSS from '../style/Dashboard.module.css';

export default function SliderNews() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='mt-[12px] bg-black'>
            {/* <h1 className='my-2'> <svg className="gradient-text text-3xl font-bold" width="100%" height="38" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#FF0078' }} />
                        <stop offset="50%" style={{ stopColor: '#F6EFA7' }} />
                        <stop offset="100%" style={{ stopColor: '#FF0078' }} />
                    </linearGradient>
                </defs>
                <text x="50%" y="30" fill="url(#gradient)" textAnchor="middle">Best Selling Product</text>
            </svg></h1> */}

            <Slider {...settings}>
                <div className={`w-full px-2 hover:cursor-pointer ${DashboardCSS.carslImgContainer}`}>

                    <div style={{ position: 'absolute', bottom: '10px', zIndex: '3' }} className='px-2 w-full'>
                        <h1 className='h-8'>New number 1</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-slate-400' >Detail of that news.</p>
                        </div>
                    </div>

                    <div className={`${DashboardCSS.carslImgContainer}`} style={{ border: '3px solid crimson', borderRadius: '8px' }}>
                        <figure><img src='https://i.ytimg.com/vi/csCup-q_yLU/maxresdefault.jpg' alt="Product Image" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} /></figure>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                            zIndex: '2',
                        }}
                    ></div>
                </div>



                <div className={`w-full px-2 hover:cursor-pointer ${DashboardCSS.carslImgContainer}`}>

                    <div style={{ position: 'absolute', bottom: '10px', zIndex: '3' }} className='px-2 w-full'>
                        <h1 className='h-8'>New number 1</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-slate-400' >Detail of that news.</p>
                        </div>
                    </div>

                    <div className={`${DashboardCSS.carslImgContainer}`} style={{ border: '3px solid crimson', borderRadius: '8px' }}>
                        <figure><img src='https://assets.materialup.com/uploads/a916f375-9c3f-4164-91c1-cb6e4cc7abcb/preview.png' alt="Product Image" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} /></figure>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                            zIndex: '2',
                        }}
                    ></div>
                </div>


                
                <div className={`w-full px-2 hover:cursor-pointer ${DashboardCSS.carslImgContainer}`}>

                    <div style={{ position: 'absolute', bottom: '10px', zIndex: '3' }} className='px-2 w-full'>
                        <h1 className='h-8'>New number 1</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-slate-400' >Detail of that news.</p>
                        </div>
                    </div>

                    <div className={`${DashboardCSS.carslImgContainer}`} style={{ border: '3px solid crimson', borderRadius: '8px' }}>
                        <figure><img src='https://i.ytimg.com/vi/csCup-q_yLU/maxresdefault.jpg' alt="Product Image" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} /></figure>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                            zIndex: '2',
                        }}
                    ></div>
                </div>








                <div className={`w-full px-2 hover:cursor-pointer ${DashboardCSS.carslImgContainer}`}>

                    <div style={{ position: 'absolute', bottom: '10px', zIndex: '3' }} className='px-2 w-full'>
                        <h1 className='h-8'>New number 1</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-slate-400' >Detail of that news.</p>
                        </div>
                    </div>

                    <div className={`${DashboardCSS.carslImgContainer}`} style={{ border: '3px solid crimson', borderRadius: '8px' }}>
                        <figure><img src='https://greative.co/wp-content/uploads/2022/10/catatan-4-1.png' alt="Product Image" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} /></figure>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                            zIndex: '2',
                        }}
                    ></div>
                </div>

            </Slider>
        </div>
    );
}


// The notes

// Default classs className="flex min-h-screen flex-col items-center justify-between p-24"
// style={{ textDecoration: 'line-through' }}