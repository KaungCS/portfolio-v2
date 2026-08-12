import '../styles/globals.css';

// Placeholder: Global layout (imports Tailwind + global variables)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
