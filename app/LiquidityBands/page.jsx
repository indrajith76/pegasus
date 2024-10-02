const LiquidityBands =()=>{
    return <div className="text-white"> 
    <h1 className=" dm-sans text-white text-center text-[72px]">
    [pegasus]
    </h1>
    <p className="dm-mono text-[19px] text-white text-center leading-[10px]">SET LIQUIDITY BANDS</p>

    <div className="w-[975px] mx-auto mt-[23px]">  
      <p className="dm-mono text-[19px] mb-2">pegasus status: <span className="text-[#DC6CA2]">online</span></p>
      <div className=" bg-[#291b2282] flex border border-[5px] border-black rounded-[7px]">
        <div className="pb-5 w-[550px] relative">
          <div className=" mx-[25px] absolute bottom-5">
            <p className="dm-mono text-[15px] pl-2 mb-2"><span className="text-[#DC6CA2]">peg:</span> let’s deploy your coin!</p>
            <p className="dm-mono text-[15px] pl-2 mb-2"><span className="text-[#DC6CA2]">peg:</span> setup your liquidity bands.</p>
            <p className="dm-mono text-[15px] pl-2 mb-6"><span className="text-[#DC6CA2]">peg: Band 1 has been set!</span> You’ll need 6 ETH to fill it. Projected market cap is $98,205.</p>
            <p className="bg-[#00000040] border border-black py-[2px] px-6 rounded text-[19px] dm-mono">pegv1 - [UPDATE PANEL]</p>
          </div>
        </div>
        <div className="bg-[#0000004d] w-full border-0 border-l-[5px] border-black px-[29px] py-[26px]">
          <p className="dm-sans text-[30px]">Setup Liquidity Bands</p>
          <p className="text-[14px] dm-mono">Configure V3 liquidity pools here</p>
          <div className="mt-[29px] mb-5 w-[50%]">
              <label className="dm-mono">Total Liquidity Bands</label>
              <input className="block bg-[#0000004f] border border-black px-3 py-1 rounded w-full" type="text" placeholder="1 to 10"/>
            </div>
            <div className="mt-[29px] mb-5 w-[50%]">
              <label className="dm-mono">Edit Bands</label>
              <select className="block bg-[#0000004f] border border-black px-3 py-1 rounded w-full" type="text">
                <option>1 to 10</option>
                <option>1 to 10</option>
                </select>
            </div>
            <textarea className="h-[190px] w-full rounded bg-[#00000036] border border-black" rows="4" cols="50"/>

            <div className="mt-[29px] mb-5 w-[50%]">
              <label className="dm-mono">Set Price Range</label>
              <input className="block bg-[#0000004f] border border-black px-3 py-1 rounded w-full" type="text" placeholder="0 to 999M"/>
            </div>
            
            <p className="dm-mono">
            ETH Required to fill: 6 Ξ<br/>
            Projected MC for this band: $98,205
            </p>

            <button className="py-2 px-10 bg-[#0000004f] border border-black my-5 rounded">SET BAND 🦄</button> 

          
            <button className="py-2 px-[32px] bg-[#0000004f] border border-black rounded block">DONE</button> 
        </div> 
      </div>
      <ul className="underline dm-mono text-[15px] flex justify-end gap-7 mt-1">
        <li>launch</li>
        <li>snipe</li>
        <li>disperse</li>
        <li>change colors</li>
        </ul>
    </div>
   </div>
}

export default LiquidityBands;