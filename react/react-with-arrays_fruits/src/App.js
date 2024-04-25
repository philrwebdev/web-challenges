import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: '🍌 Banana',
      color: 'yellow',
    },
    {
      id: 2875,
      name: '🍐 Birne',
      color: 'green',
    },
    {
      id: 2081,
      name: '🍑 Pfirsich',
      color: '#FFCBA4',
    },
    {
      id: 5763,
      name: '🥝 Kiwi',
      color: '#a9c77e',
    },
    {
      id: 6150,
      name: '🍓 Strawberry',
      color: 'red',
    }
  ];
  

  return (
    <div className="app">
        {fruits.map((fruit) => {
        return(<Card name={fruit.name} key={fruit.id} color={fruit.color}/>);
        })}
    </div>
  );
}
