async function getData() {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:""});
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:3600}});
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      {/* {data.map(obj => (
        <p>{obj.name}</p>
      ))} */}
    </div>
  );
};

export default page;
