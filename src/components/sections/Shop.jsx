import Card from "../ui/Card";

function Shop() {
  return (
    <section className="flex flex-col gap-2 min-h-screen md:min-h-0 md:h-full md:overflow-y-auto pt-[30px] pb-2">

      <Card title="Shop" subtitle="select category">
        <div className="flex flex-col text-xl text-neutral-500 leading-tight">
          <p className="tracking-wider hover:underline hover:underline-offset-2 hover:decoration-1">karate-gi</p>
          <p className="tracking-wider hover:underline hover:underline-offset-2 hover:decoration-1">obi</p>
          <p className="tracking-wider hover:underline hover:underline-offset-2 hover:decoration-1">equipment</p>
          <p className="tracking-wider hover:underline hover:underline-offset-2 hover:decoration-1">accesories</p>
        </div>
      </Card>

      <Card title="Products" subtitle="karate-gi">

      </Card>

    </section>
  );
}

export default Shop;