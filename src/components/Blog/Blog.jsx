
const Blog = ({ blog }) => {
    const { image, name, country, role, battingType, bowlingType, biddingPrice } = blog;
    return (
        <div className="border rounded-xl p-4">
            <span>
                <img className="rounded-xl" src={image} alt="" />
            </span>
            <div className="flex items-center gap-2 mt-4 mb-4">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                </span>
                <h4 className="text-xl font-semibold">{name}</h4>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path d="M3.5 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0v-4.392l1.657-.348a6.449 6.449 0 0 1 4.271.572 7.948 7.948 0 0 0 5.965.524l2.078-.64A.75.75 0 0 0 18 12.25v-8.5a.75.75 0 0 0-.904-.734l-2.38.501a7.25 7.25 0 0 1-4.186-.363l-.502-.2a8.75 8.75 0 0 0-5.053-.439l-1.475.31V2.75Z" />
                        </svg>
                    </span>
                    <p>{country}</p>
                </div>
                <p className="border rounded px-2 bg-gray-200">{role}</p>
            </div>

            <hr />

            <div className="space-y-3 text-base font-medium">
                <p className="mt-4">{battingType}</p>
                <p>{bowlingType}</p>
                <div className="flex justify-between items-center">
                    <p>Price: {biddingPrice} $</p>
                    <button className="border rounded-lg py-1 px-4 bg-[#E7FE29] hover:bg-[#FDE047]">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;