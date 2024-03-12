const page = () => {
  const sample = async () => {
    'use server'; // can inline in server comp
    console.log('hello');
  };
  return (
    <div>
      <form action={sample}>
        <button>click</button>
      </form>
    </div>
  );
};

export default page;
