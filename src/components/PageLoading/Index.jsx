// import React from 'react'
// import loading1 from '@/assets/images/loading1.gif'


// const PageLoading = () => {
//   return (
//     <div className='r-flex aic jsc'>
//       <img src={loading1} alt="" />
//     </div>
//   )
// }




// export default PageLoading


import { FC, useEffect, useState } from 'react';
// import ContentLoader from './content-loader'; // or any spinner component

const aa = () => {
  return (
    <div>123</div>
  )
}

const LazyLoader = ({ delay = 250, ...props }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return show ? <aa /> : null;
};

export { LazyLoader as default };
