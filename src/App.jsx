import { useState, useEffect } from 'react'

function App() {
  const [datas, setDatas] = useState([])
  const [cari, setCari] = useState()
  const [load, setLoad] = useState(false)


  const api = async cari => {
    setLoad(true)
    const apinya = await fetch(`https://dummyjson.com/products/search?q=${cari}`)
    const json = await apinya.json()
    setDatas(json.products)
    console.log('by Zedd,      Hayoooh mau ngapain')
    setLoad(false)
  }

  useEffect(() => {
    api('women')
  }, [])

  // buat state untuk tampung api dan untuk handle search nya
  // kemudian state buat handle cari nya di isi target.value 
  // dan onClick pada button di isi function apinya dengan argument dari state cari
  //
  // jikq input search nya pas d ketik harus 1 1 jangan d buat conponent!!

  const List = () => {
    return <div className='grid gap-5 md:grid-cols-2 md:gap-36'>
      {datas.map((data, i) => {
        return <div key={i} className='border-2 border-black max-w-xs md:w-[300px] mx-auto rounded p-5 grid gap-3'>
          <h1 className='text-2xl font-extrabold'>{data.title}</h1>
          <p className='pr-36 md:pr-20'>{data.description}</p>
          <h3 className='font-bold text-xl'>${data.price}</h3>
        </div>
      })}
    </div>
  }
  

  return <div>
    {datas?.length > 0 
      ? ( <div className='max-w-lg font-sans my-5 grid gap-3 mx-auto'>
           <div className='flex mx-auto'>
             <input type="text"
               className='border-2 border-black outline-none pl-2'
               value={cari} 
               onChange={ e => setCari(e.target.value) } 
             />
             <button onClick={() => api(cari)} 
               type="submit"
               className='bg-black text-white px-5 hover:bg-gray-700 outline-none'
             >Search</button>
           </div>
           
           <List /> 

        </div> ) 
      : ( <div className='text-center my-20'>{cari} not found</div> )
    }
  </div>
}

export default App
