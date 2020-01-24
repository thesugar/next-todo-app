import Link from 'next/link';
import Layout from '../components/Layout';
import AddressAdd from '../components/AddressAdd';
import firebase from "firebase";

export default () => (
    <Layout header="Todo" title="タスクを登録する">
        <AddressAdd />
        <hr />
        <div>
            <Link href="/address">
                <button>back</button>
            </Link>
        </div>
    </Layout>
);