import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Python: linguagem popular com berço na comédia inglesa</strong>
                        <p>
                            Ocupando o pódio entre as gigantes do mercado, Python conquistou a programação com sua estrutura madura, referência e humor
                        </p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Python: linguagem popular com berço na comédia inglesa</strong>
                        <p>
                            Ocupando o pódio entre as gigantes do mercado, Python conquistou a programação com sua estrutura madura, referência e humor
                        </p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Python: linguagem popular com berço na comédia inglesa</strong>
                        <p>
                            Ocupando o pódio entre as gigantes do mercado, Python conquistou a programação com sua estrutura madura, referência e humor
                        </p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Python: linguagem popular com berço na comédia inglesa</strong>
                        <p>
                            Ocupando o pódio entre as gigantes do mercado, Python conquistou a programação com sua estrutura madura, referência e humor
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}