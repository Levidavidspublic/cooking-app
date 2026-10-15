export default function HomePage() {
  return (
    <main>
      <h1>App</h1>
      <p>
        Static marketing placeholder. The source <code>landing-template</code>{" "}
        had no application files — replace this page with real product content,
        privacy/terms/contact, and links into the web app.
      </p>
      <p>
        <a href={process.env.NEXT_PUBLIC_WEB_APP_URL ?? "http://localhost:3000"}>
          Open app
        </a>
      </p>
    </main>
  );
}
