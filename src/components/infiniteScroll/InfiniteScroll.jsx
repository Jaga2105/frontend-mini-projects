import React, { useEffect, useState } from 'react'

const InfiniteScroll = () => {
  const [count, setCount] = useState(50);
  let Elements = [];
  for(let i=0; i<count; i++){
    Elements.push(<div key={i}>{i+1}</div>)
  }
  console.log(window.innerHeight)
  console.log(window.innerHeight + window.scrollY)
  console.log(window.document.body.offsetHeight)
  useEffect(()=>{
    const onScroll = () =>{
      if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight-30){
        setCount(count+50);
      }
    }
    window.addEventListener("scroll", onScroll);

    return ()=>{
      window.removeEventListener("scroll", onScroll)
    }
  },[count])

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Infinite Scroll</h1>
        <div>{Elements}</div>
    </div>
  )
}

export default InfiniteScroll