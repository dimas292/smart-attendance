import "./globals.css";

export const metadata = {
  title: "Attendance System",
  description: "Revolutionary QR code based attendance system that streamlines workforce management for company ZYX.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
