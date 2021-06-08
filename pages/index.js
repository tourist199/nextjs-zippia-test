import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container pt-5 d-flex justify-content-center">
      <Link href="/test/jobs">Redirect to Jobs</Link>
    </div>
  );
}
