import Layout from '../../layouts/layout';
import Navbar from '../../components/navbar';
import data from '../../dataset/hiburan.json';

function Main(){
  return (
    <Layout>
        <Navbar/>
        {data.map((data, index) => 
        <div className="section" key={index}>
        <section className="section2">
            <div className="img">
                <img src={data.img} width="200 px" height="120 px"/>
            </div>
            <div className="desc">
                <h3>{data.judul}</h3>
                <h5>{data.date}</h5>
                <button><a href={data.link}>Baca</a></button>
            </div>
        </section>
    </div>
        )}
    </Layout>
  )
}
  

export default Main;