import Card from "../ui/Card";

function Cart() {
  return (
    <section className="flex flex-col gap-2 min-h-screen md:min-h-0 md:h-full md:overflow-y-auto pt-[30px] pb-6">
      <Card title="Cart (3)" subtitle="your items">
        <div className="flex flex-col gap-2 mt-[15px] min-h-screen">
          <p className="description">Your cart is currently empty :(</p>
        </div>
      </Card>
    </section>
  );
}

export default Cart;