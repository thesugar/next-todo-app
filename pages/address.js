import Link from 'next/link';
import Layout from '../components/Layout';
import firebase from 'firebase';

import Address from '../components/Address';

export default () => (
    <Layout header="GroupTodo" title="Top page">
        <div>
            <h2>What's this app?</h2>
            <p>グループを作って、グループでやることやタスクを共有するアプリです。</p>
            <p>友だち同士や、職場、サークル、家族など、いろんなグループを作ってタスクを管理できます。</p>
            <p>自分ひとりのタスクを作ることもできます。</p>
            <h2>あなたのタスク一覧</h2>
            < Address/>
            <Link href="/address_add">
                <button>タスクを新規登録！</button>
            </Link>
        </div>
    </Layout>
);