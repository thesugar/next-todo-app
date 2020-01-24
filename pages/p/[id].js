import { useRouter } from 'next/router'
import Layout from '../../components/Layout.js'
import TaskDetail from '../../components/TaskDetail';
import Link from 'next/link';


export default () => {
  const router = useRouter()

  // 以下の title の部分は書き換えが必要（追加したやつがErrorになる）
  return (
    <Layout title='Todoapp - タスク詳細'>
      <TaskDetail docId={router.query.id} />
      <Link href="/address">
                <button>back</button>
      </Link>

      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}