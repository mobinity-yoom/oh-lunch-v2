import { useRouter } from 'next/router'
import Home from '../index'
import { getAllMenus } from '../../lib/menus'

export default function Post() {
    // const router = useRouter()
    // const { menu } = router.query
    return <p>Oh {menu}</p>
  }

export async function getStaticPaths() {
    // Return a list of possible value for id
    const menus = getAllMenus()
    return {
        menus,
        fallback: false
    }
}
  
export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    // const postData = getPostData(params.id)
    return {
        props: {
            params
        }
    }
}