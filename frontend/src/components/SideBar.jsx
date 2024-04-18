import logo from '../assets/logo.png'

const SideBar = () => {
    return(
        <div className="overflow-hidden shadow-lg text-white bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg h-screen w-1/5 pt-10 text-lg">
            <img className='h-24 w-24 mx-auto'
            src= {logo} alt= "logo" />
                THis is font style
        </div>
    )
}

export default SideBar