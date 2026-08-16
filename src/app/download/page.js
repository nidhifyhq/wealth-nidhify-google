import DownloadRedirect from "@/components/DownloadRedirect";

export const metadata = {
  title: "Download Nidhify",
  description:
    "Download Nidhify — track mutual funds, FDs, gold, and your entire net worth in one secure dashboard.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DownloadPage() {
  return <DownloadRedirect />;
}
