const Contact = () => {
    return (
        <div id="contact" className="w-full h-[40vh] mt-0">
            <div className="w-[80%] pt-12 pb-8 mx-auto rounded-bl-3xl rounded-br-3xl rounded-tl-xl bg-custom-image bg-cover">
                <div className="text-center">
                    <p className="text-4xl text-white font-bold">Get Or Promo Code by</p>
                    <p className="text-4xl text-white font-bold">
                        Subscribing To our  Newsletter
                    </p>
                    <div className="flex w-[35%] mt-10  mx-auto p-2 justify-center">
                        <input type="text" className="px-8 py-2 border rounded-bl-2xl rounded-tl-2xl focus:outline-none focus:ring focus:border-custom-blue" placeholder="Enter Your Email">
                        </input>
                        <button className='text-white bg-custom-orange py-2 px-4 rounded-br-2xl rounded-tr-2xl'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
