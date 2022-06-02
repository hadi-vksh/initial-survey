import Head from "next/head";
import Image from "next/image";
import consumerStyles from "../styles/consumer.module.css";
import svg from "../pic/mark.svg";
import i from "../pic/i1.png";
import Consumer from "../components/Consumer";
export default function consumer() {
  return (
    <div className={consumerStyles.s}>
      <Head>
        <title>Consumer Complaints</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        ></link>
      </Head>

      <div className={consumerStyles.container}>
        <div>
          <div className={consumerStyles.head}>
            <div className={consumerStyles.hd}>
              <div>
                <Image src={i} alt="Pic" width={80} height={85} />
              </div>
              <div>
                a<span className={consumerStyles.white}>gor</span>á
              </div>
<<<<<<< HEAD

=======
>>>>>>> 3ef51a43d7e9a66447a60135dce70e7b3c22660b
            </div>

            <div>
              <button className={consumerStyles.btn}>About</button>
            </div>
          </div>
          <div className={consumerStyles.cont}>
<<<<<<< HEAD
            <div>
=======
            <div className={consumerStyles.cont1}>
>>>>>>> 3ef51a43d7e9a66447a60135dce70e7b3c22660b
              <div className={consumerStyles.t1}>
                <span className={consumerStyles.title}>
                  <span className={consumerStyles.title2}>
                    Still haven’t got that refund?
                  </span>
<<<<<<< HEAD
                  <br></br>
=======
    
>>>>>>> 3ef51a43d7e9a66447a60135dce70e7b3c22660b
                  <span className={consumerStyles.title1}>
                    Allow us to fight your fights.
                  </span>
                </span>
              </div>
              <div className={consumerStyles.mid}>
                <span>
                  At agorá, we provide you the legal resources to fight against
<<<<<<< HEAD
                  poor customer services and <br></br>fradulent market practises in
=======
                  poor customer services and fradulent market practises in
>>>>>>> 3ef51a43d7e9a66447a60135dce70e7b3c22660b
                  e-commerce.
                </span>

              </div>
              <div className={consumerStyles.points}>
                <div>
                  <div className={consumerStyles.p}>
                    <div className={consumerStyles.i}>
                      <Image src={svg} />
                    </div>
                    <div className={consumerStyles.t}>
                      Fight refusal to replace faulty products.
                    </div>
                  </div>
                  <div className={consumerStyles.p}>
                    <div className={consumerStyles.i}>
                      <Image src={svg} />
                    </div>
                    <div className={consumerStyles.t}><div>Fight delay in refunds</div></div>
                  </div>
                  <div className={consumerStyles.p}>
                    <div className={consumerStyles.i}>
                      <Image src={svg} />
                    </div>
                    <div className={consumerStyles.t}>
                      Fight misleading advertisements
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={consumerStyles.fm}>
              <div className={consumerStyles.f1}>Start your journey here.</div>

              <form action="./thank-you" method="post">

                <div className={consumerStyles.i1}><input className={consumerStyles.ph} placeholder="Email or Phone number" required></input></div>
                <div className={consumerStyles.i2}><input className={consumerStyles.go} type="submit" value="Go"></input></div>

              </form>

            </div>
          </div>
        </div>
        <div className={consumerStyles.foot}>
          By signing up, you are agreeing to our term’s & conditions & for us to contact you through the phone number & email provided.
        </div>
      </div>
    </div>

  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 3ef51a43d7e9a66447a60135dce70e7b3c22660b
