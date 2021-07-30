// our-domain.com/news
import { Fragment } from "react";
import Link from "next/link";
export default function NewsPage() {
  return (
    <Fragment>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href="/news/about-nextJS">About Next JS</Link>
        </li>
        <li>
          <Link href="">Another item</Link>
        </li>
      </ul>
    </Fragment>
  );
}
