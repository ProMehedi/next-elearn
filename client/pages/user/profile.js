import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Jumbotron from '../../components/Jumbotron'
import { ScaleLoader } from 'react-spinners'
import { getUserDetails } from '../../store/actions/userActions'

const HomePage = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user, loading: loadingUser } = userDetails

  useEffect(() => {
    if (!userInfo || userInfo === null) {
      router.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      }
    }
  }, [router, userInfo])

  if (loading) {
    return <ScaleLoader size={50} />
  }

  return (
    <>
      <Jumbotron
        title='Dashboard'
        desc='E-LE@RN - Online Education Marketplace'
      />
    </>
  )
}

export default HomePage
