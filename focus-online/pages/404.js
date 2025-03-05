import Link from "next/link";

export default function Error() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/" className="btn">Return Home</Link>
    </div>
  );
}
