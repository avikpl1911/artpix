import React from 'react'
import "./card.css"
function Card({asset}) {
    return (
        <div>
            <div class="my-10 w-72 glass p-5 rounded-md shadow-xl mx-12">
                <img src={`http://localhost:2000/asset/${asset.file}`} alt="BAYC Ape" />
                <h2 class="text-md font-bold mt-3 pixfont text-xl">{asset.name}</h2>
                <p class="text-gray-400 text-sm mb-2 pixfont text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="flex justify-between items-center text-sm">
                    <p class="text-cyan-400 font-bold pixfont text-xl">
                        <i class="fab fa-ethereum"></i> 70.1 ETH
                    </p>
                    
                </div>
                <p class="bg-gray-600 h-[0.5px] w-full my-2"></p>
                
            </div>
        </div>
    )
}

export default Card