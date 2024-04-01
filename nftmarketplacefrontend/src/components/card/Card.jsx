import React from 'react'
import "./card.css"
function Card() {
    return (
        <div>
            <div class="my-10 w-72 glass p-5 rounded-md shadow-xl mx-20">
                <img src="https://miro.medium.com/max/1200/1*qGqMY0LcqT1xgdz0z9r8EA.png" alt="BAYC Ape" />
                <h2 class="text-md font-bold mt-3 pixfont text-xl">BAYC Ape</h2>
                <p class="text-gray-400 text-sm mb-2 pixfont text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="flex justify-between items-center text-sm">
                    <p class="text-cyan-400 font-bold pixfont text-xl">
                        <i class="fab fa-ethereum"></i> 70.1 ETH
                    </p>
                    <p class="text-gray-400 pixfont">
                        <i class="fas fa-clock"></i> 3 days left
                    </p>
                </div>
                <p class="bg-gray-600 h-[0.5px] w-full my-2"></p>
                <div class="flex items-center">
                    <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC" class="h-8 w-8 border border-white rounded-full mr-2" />
                    <p class="text-gray-400 text-[12px] pixfont">
                        Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                            class="text-white font-bold pixfont ">Bored Ape Yatch Club</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card