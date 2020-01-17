import Link from 'next/link';
import Layout from '../components/Layout';
import AddressShow from '../components/AddressShow';
import firebase from "firebase";

export default () => (
    <Layout header="ADdress" title="address book.">
        <AddressShow />
        <hr />
        <div>
            <Link href="/address">
                <button>back</button>
            </Link>
        </div>
    </Layout>
);