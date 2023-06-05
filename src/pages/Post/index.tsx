import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";
import { IPostProps } from "../../data/@types/Posts";
import { getInformationsOfPost } from "../../data/business/Posts";
import { Avatar } from "../../components/Avatar";
import { Comment } from "../../components/Posts/Comment";
import { IconGoBack } from "../../components/IconGoBack";
import styles from "./Post.module.css";

export function Post() {
  const urlImageFake = "";
  const { id } = useParams();
  const [post, setPost] = useState<IPostProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getPost() {
    const temp = await getInformationsOfPost(id);
    setPost(temp);
    setIsLoading(false);
  }
  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <main className={styles.container}>
      {isLoading ? (
        <section>
          <h3>Carregando...</h3>
        </section>
      ) : (
        <>
          {post !== null ? (
            <>
              <IconGoBack />
              <article className={` ${styles.post} `}>
                <div className={styles.postImage}>
                  {urlImageFake !== "" ? (
                    <img src={urlImageFake} />
                  ) : (
                    <span className={styles.tagInfo}>ProBlog Image</span>
                  )}
                </div>
                <section className={styles.details}>
                  <h2 className={styles.author}>Por {post.userName}</h2>
                  <div title="comentários" className={styles.comments}>
                    <BiChat size={20} />
                    <span>{post.qtdComments}</span>
                  </div>
                </section>
                <section className={styles.wrapperText}>
                  <h2 className={styles.title}>{post.title}</h2>
                  <p className={styles.body}>{post.body}</p>
                </section>
              </article>
              <Link
                to={`/users/${post.id}`}
                className={`${styles.genericBox} ${styles.wrapperInfoAuthor}`}
              >
                <Avatar size={100} />
                <section className={styles.wrapperText}>
                  <h2 className={styles.title}>{post.userName}</h2>
                  <p className={styles.details}>
                    Ver detalhes
                    <FiChevronRight size={18} />
                  </p>
                </section>
              </Link>

              <section className={styles.commentList}>
                <h2>Comentários</h2>
                {post.comments.map((comment) => {
                  return (
                    <Comment
                      key={comment.id}
                      name={comment.name}
                      email={comment.email}
                      content={comment.body}
                    />
                  );
                })}
              </section>
            </>
          ) : (
            <section className={styles.wrapperText}>
              <h1 className={styles.title}>Ops...</h1>
              <h2 className={styles.body}>
                Não foi possivel Carregar o Post solicitado.
                <br />
                Retorne para{" "}
                <Link to={"/"} style={{ textDecoration: "underline" }}>
                  Home
                </Link>
              </h2>
            </section>
          )}
        </>
      )}
    </main>
  );
}
