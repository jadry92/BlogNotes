import React from 'react'
import './styles.scss'
interface IProps {
  children : React.ReactNode;
}

const HomeLayout = ({children} : IProps) => {
  return (
    <section className=''>
      {children}
    </section>
  )
}

export default HomeLayout