import { useState, useEffect } from 'react'
import Nav from './page/Nav'
import Home from './page/Home'

function App() {
  const [datas, setDatas] = useState([])
  const [cari, setCari] = useState('')
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(null)

  const api = async cari => {
    setLoad(true)
    setError(null)
    try {
      const apinya = await fetch(`https://dummyjson.com/products/search?q=${cari}`)
      if (!apinya.ok) {
        throw new Error('something went wrong')
      }
      const json = await apinya.json()
      setDatas(json.products)
    } catch (error){
      setError(error.message)
    }
    setLoad(false)
  }

  let content = <p className={logic}>'{cari}' not found!</p>
  if (datas.length > 0) {
    content = <Home datas={datas} />
  }
  if (load) {
    content = <p className={logic}>Loading ...</p>
  }
  if (error) {
    content = <p className={error}></p>
  }

  useEffect(() => {
    api('women')
  }, [])

  return <div className='relative mx-auto max-w-sm'>
    <Nav />
    <div className='flex mx-auto my-5 '>
      <input type="text"
        className={input} value={cari} 
        onChange={ e => setCari(e.target.value) } 
      />
      <button onClick={() => api(cari)} type="submit" className={btn} >Search</button>
    </div>
    {content}
  </div>
}
export default App

const input = 'mx-auto border-2 border-black outline-none pl-2'
const btn = 'mx-auto bg-black text-white px-5 hover:bg-gray-700 outline-none'

const logic = 'text-center my-20'
