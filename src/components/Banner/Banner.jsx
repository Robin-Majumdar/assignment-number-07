import bannerImage from '../../assets/bg-shadow.png'
import cricketImage from '../../assets/banner-main.png'


const Banner = () => {
    return (
        <div className='container mx-auto bg-[#131313]'>
            <div className='relative'>
                <img className='w-full' src={bannerImage} alt="Banner Image" />

                <div className="content absolute inset-0 flex flex-col items-center justify-center text-center">
                    <img className='mb-5' src={cricketImage} alt="Cricket Image" />
                    <h1 className="text-white text-4xl font-bold mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-xl font-medium mb-6 text-p-color">Beyond Boundaries Beyond Limits</p>
                    <div className='border rounded-xl border-[#E7FE29] p-2'>
                        <button className="px-4 py-2 bg-[#E7FE29] text-black font-semibold rounded-lg hover:bg-[#FDE047]">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;