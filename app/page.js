
export default function Home() {
  return (
     <div className="text-white"> 
      <h1 className=" dm-sans text-white text-center text-[72px]">
      [pegasus]
      </h1>
      <p className="dm-mono text-[19px] text-white text-center leading-[10px]">BUNDLE YOUR UNIV3 TOKEN</p>

      <div className="w-[975px] mx-auto mt-[23px]">  
        <p className="dm-mono text-[19px] mb-2">pegasus status: <span className="text-[#DC6CA2]">online</span></p>
        <div className=" bg-[#291b2282] flex border border-[5px] border-black rounded-[7px]">
          <div className="pb-5 w-[550px] relative">
            <div className=" mx-[25px] absolute bottom-5">
              <p className="dm-mono text-[15px] pl-2 mb-2"><span className="text-[#DC6CA2]">peg:</span> let’s deploy your coin!</p>
              <p className="bg-[#00000040] border border-black py-[2px] px-6 rounded text-[19px] dm-mono">pegv1 - [UPDATE PANEL]</p>
            </div>
          </div>
          <div className="bg-[#0000004d] w-full border-0 border-l-[5px] border-black px-[29px] py-[26px]">
            <p className="dm-sans text-[30px]">Token Info</p>
            <p className="text-[14px] dm-mono">Fill info about the coin you want to bundle on V3</p>
            <div className="grid grid-cols-2 gap-5 mt-[29px]">
              <div>
                <label className="dm-mono">Token Address</label>
                <input className="block bg-[#0000004f] border border-black px-3 py-1 rounded w-full" type="text" placeholder="0x420..."/>
              </div>
              <div>
                <label className="dm-mono"># of Wallets</label>
                <input className="block bg-[#0000004f] border border-black px-3 py-1 rounded w-full" type="text" placeholder="1 to 100"/>
              </div>
              <div>
                <label className="dm-mono">Max Transaction</label>
                <input className="block bg-[#0000004f] border border-black px-3 py-1 rounded w-full" type="text" placeholder="1% to 5%"/>
              </div>
              <div>
                <label className="dm-mono">Supply Buy Range (%)</label>
                <input className="block bg-[#0000004f] border border-black px-3 py-1 rounded w-full" type="text" placeholder="0.01% to 5%"/>
              </div>
              <div>
                <label className="dm-mono">Deployment Packages (Pricing)</label>
                <input className="block bg-[#0000004f] border border-black px-3 py-1 rounded w-full" type="text" placeholder="1 to 100"/>
              </div>
            </div>
              <button className="py-2 px-10 bg-[#0000004f] border border-black my-5 rounded">GET TOKEN INFO 🦄</button> 

              <textarea className="h-[190px] w-full rounded bg-[#00000036] border border-black" rows="4" cols="50"/>
            
              <button className="py-2 px-[32px] bg-[#0000004f] border border-black my-5 rounded">CONTINUE</button> 
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
  );
}
