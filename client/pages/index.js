import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Jumbotron from '../components/Jumbotron'
import { ScaleLoader } from 'react-spinners'

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
    <>
      <Jumbotron title='E-LE@RN' desc='Online Education Marketplace' />
    </>
  )
}

export default HomePage
