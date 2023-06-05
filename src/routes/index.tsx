import { Route, Routes } from "react-router-dom";
import { Base } from "../pages/layouts/Base";
import { Home } from "../pages/Home";
import { Users } from "../pages/Users";
import { Post } from "../pages/Post";
import { Details } from "../pages/Users/Details";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Details />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}
