import { useEffect, useState } from "react";
import { IUsersProps } from "../../data/@types/Users";
import { getAllUsers } from "../../data/business/Users";
import { Card } from "../../components/Users/Card";
import styles from "./Users.module.css";

export function Users() {
  const [users, setUsers] = useState<IUsersProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getUsers() {
    const user = await getAllUsers();
    setUsers(user);
    setIsLoading(false);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className={styles.container}>
      {isLoading ? (
        <section>
          <h3>Carregando...</h3>
        </section>
      ) : (
        users.map((user) => {
          return (
            <Card
              key={user.id}
              id={user.id}
              fullName={user.name}
              companyName={user.company?.name}
            />
          );
        })
      )}
    </main>
  );
}
