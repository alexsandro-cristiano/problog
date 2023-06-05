import { useEffect, useState } from "react";
import { IHeadlineProps } from "../../data/@types/Posts";
import { getAllPost } from "../../data/business/Posts";
import { CardHeadline } from "../../components/Posts/CardHeadline";
import styles from "./Home.module.css";

export function Home() {
  const [headlines, setHeadline] = useState<IHeadlineProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getHeadlines() {
    const temp = await getAllPost();
    setHeadline(temp);
    setIsLoading(false);
  }
  useEffect(() => {
    getHeadlines();
  }, []);

  return (
    <>
      <main className={styles.wrapper}>
        {isLoading ? (
          <section>
            <h3>Carregando...</h3>
          </section>
        ) : (
          headlines.map((item) => {
            return (
              <CardHeadline
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                userId={item.userId}
                img={item.img}
              />
            );
          })
        )}
      </main>
    </>
  );
}
