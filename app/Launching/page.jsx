const Launching =()=>{
    return <div className="text-white"> 
    <h1 className=" dm-sans text-white text-center text-[72px]">
    [pegasus]
    </h1>
    <p className="dm-mono text-[19px] text-white text-center leading-[10px]">LAUNCHING</p>

    <div className="w-[975px] mx-auto mt-[23px]">  
      <p className="dm-mono text-[19px] mb-2">pegasus status: <span className="text-[#DC6CA2]">online</span></p>
      <div className=" bg-[#291b2282] flex h-[744px] border border-[5px] border-black rounded-[7px]">
        <div className="pb-5 w-[550px] relative">
          <div className=" mx-[25px] absolute bottom-5">
            <p className="dm-mono text-[15px] pl-2 mb-2"><span className="text-[#DC6CA2]">peg:</span> let’s deploy your coin!</p>
            <p className="dm-mono text-[15px] pl-2 mb-2"><span className="text-[#DC6CA2]">peg:</span> setup your liquidity bands.</p>
            <p className="dm-mono text-[15px] pl-2 mb-2"><span className="text-[#DC6CA2]">peg: Band 1 has been set!</span> You’ll need 6 ETH to fill it. Projected market cap is $98,205.</p>
            <p className="dm-mono text-[15px] pl-2 mb-2"><span className="text-[#DC6CA2]">peg:</span> initializing liquidity pools...</p>
            <p className="dm-mono text-[15px] pl-2 mb-2"><span className="text-[#DC6CA2]">peg:</span> <span className="text-green-500">success!</span></p>
            <p className="dm-mono text-[15px] pl-2 mb-2"><span className="text-[#DC6CA2]">peg:</span> bundling your supply...</p>
            
            
            <p className="bg-[#00000040] border border-black py-[2px] px-6 rounded text-[19px] dm-mono mt-6">pegv1 - [UPDATE PANEL]</p>
          </div>
        </div>
        <div className="bg-[#0000004d] w-full border-0 border-l-[5px] border-black px-[29px] py-[26px]">
          <p className="dm-sans text-[30px]">Launching...</p>
          <p className="text-[14px] dm-mono">We’re deploying your pools and bundling for you!</p>

          <div className="mt-[196px] w-[80%] mx-auto h-[5px] bg-[#00000080] rounded overflow-hidden">
            <div className="bg-white h-2 w-[40%]"></div>
            </div>
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

export default Launching;