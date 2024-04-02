import React, { forwardRef } from 'react'

const Details = forwardRef((props, ref) => {
    return (
        <div>
            <dialog id="my_modal_3" ref={ref} className="modal">
                <div className="modal-box glass backdrop-blur h-screen">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='text-4xl pixfont'>
                         Gods Eye
                    </div>
                    <img className='mt-4 rounded-md h-56' src="https://img.freepik.com/free-photo/multi-colored-butterfly-flies-among-vibrant-nature-beauty-generated-by-ai_188544-19743.jpg?w=740&t=st=1712053844~exp=1712054444~hmac=f1fd2f92d2d253d299de9db3d44f888cad1dd23171d753497489198da16c11a1"
                        alt="" />
                    <div class="flex items-center my-4">
                    <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC" class="h-8 w-8 border border-white rounded-full mr-2" />
                    <p class="text-gray-400 text-[12px] pixfont">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                            class="text-white font-bold pixfont ">Bored Ape Yatch Club</a>
                    </p>
                   </div>
                    <div className='text-2xl pixfont'>
                        Description
                    </div>
                    <div className='text-sm pixfont'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    </div>
                    <button className="btn btn-active btn-neutral mt-4">Neutral</button>
                </div>
            </dialog>
        </div>
    )
})

export default Details