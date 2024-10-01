export default function Post() {
  const names = ["matheus", "carol"];
  const name = names[Math.floor(Math.random() * names.length)];
  return (
    <div>
      <p>{name}</p>
      <p>React.js is awesome</p>
    </div>
  );
}
