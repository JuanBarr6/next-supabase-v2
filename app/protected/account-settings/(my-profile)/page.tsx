export default function MyProfile() {
  return (
    <div className="space-y-1">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="h-[200px] w-[200px] bg-[#34367f] text-primary-foreground"
        >
          {i}
        </div>
      ))}
    </div>
  );
}
