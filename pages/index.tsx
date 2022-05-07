import type { NextPage } from 'next'
import Header from '../components/header';
import styles from '../styles/Home.module.css'
import Footer from './../components/footer';
import Title from './../components/title';
import Form from '../components/form';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <main className={styles.main}>
       <Title title="MCN Guest House Feedback Form " subTitle="Kindly fill the form below to get started" />
        <div className={styles.grid}>
        <Form />
        </div>
      </main>

    <Footer />
    </div>
  )
}
export default Home
