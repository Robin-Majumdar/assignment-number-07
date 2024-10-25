import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'

const Navbar = () => {
    return (
        <nav className='container mx-auto p-4'>
            <div className='flex justify-between items-center'>
                <a href=""> <img className="logo-image" src={logo} alt="Logo Image" /></a>

                <div className='flex items-center gap-8'>
                    <ul className='flex gap-4'>
                        <li className='text-base font-normal text-gray-for-li'><a href="">Home</a></li>
                        <li className='text-base font-normal text-gray-for-li'><a href="">Fixture</a></li>
                        <li className='text-base font-normal text-gray-for-li'><a href="">Teams</a></li>
                        <li className='text-base font-normal text-gray-for-li'><a href="">Schedules</a></li>
                    </ul>
                    <div className='flex gap-2 items-center border rounded-md py-1 px-4'>
                        <span className='text-base font-semibold'>
                            Coin
                        </span>
                        <span>
                            <img className='coin-logo' src={coin} alt="Coin Image" />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;