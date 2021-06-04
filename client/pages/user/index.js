import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Jumbotron from '../../components/Jumbotron'
import { ScaleLoader } from 'react-spinners'
import LeftNav from '../../components/LeftNav'

const HomePage = () => {
  const router = useRouter()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading } = userLogin

  useEffect(() => {
    if (!userInfo || userInfo === null) {
      router.push('/login')
    }
  }, [router, userInfo])

  if (loading) {
    return <ScaleLoader size={50} />
  }

  return (
    <div className='admin active'>
      <div className='leftNav'>
        <LeftNav />
      </div>
      <main className='mainContent'>
        <Jumbotron
          title='Dashboard'
          desc='E-LE@RN - Online Education Marketplace'
        />
        <div>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
        </div>
      </main>
    </div>
  )
}

export default HomePage
