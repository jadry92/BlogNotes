import React from 'react'
import './styles.scss'
interface IProps {
  children : React.ReactNode;
}

const HomeLayout = ({children} : IProps) => {
  return (
    <section className='bg-color-3 text-white'>
      {children}
    </section>
  )
}

export default HomeLayout