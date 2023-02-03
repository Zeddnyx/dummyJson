export default function Home(props) {

  return <div className={div1}>
     <div className={div2}>
      {props.datas.map((data, i) => {
        return <div key={i} className={div3}>
          <h1 className='text-2xl font-extrabold'>{data.title}</h1>
          <p className='pr-36 md:pr-20'>{data.description}</p>
          <h3 className='font-bold text-xl'>${data.price}</h3>
        </div>
      })}
    </div>
  </div>
}

const div1 = 'font-sans my-5 grid gap-3 mx-auto'
const div2 = 'grid grid-cols-1 gap-10 md:gap-36 mx-auto'
const div3 = 'bg-blue-800 max-w-sm mx-auto rounded p-5 grid gap-3'
