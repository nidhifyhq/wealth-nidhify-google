interface BlogContentProps {
  children: React.ReactNode;
}

export default function BlogContent({ children }: BlogContentProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">{children}</div>
    </div>
  );
}
