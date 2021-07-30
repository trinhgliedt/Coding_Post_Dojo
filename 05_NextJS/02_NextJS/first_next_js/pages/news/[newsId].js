// our-domain.com/other-news
import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return (
    <div>
      <h1>Other news</h1>
    </div>
  );
}
