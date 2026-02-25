import Contact from './assets/contact.jsx'
import Hello from './assets/hello.jsx'

function App() {
  const helloData = [
    { name: 'Shinnnamon', message : 'Hi there'},
    { name: 'Tom', message : 'Hello World'},
  ];

  return (
    <div >
      {helloData.map((item, index) => (
        <Hello key={index} name={item.name} message={item.message} />
      ))}

      <Contact email="chimonkung0@gmail.com" phone="0810154373"/>
    </div>
  );
}

export default App