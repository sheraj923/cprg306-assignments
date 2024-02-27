import ItemList from './item-list';
export default function Page() {
    return (
      <main>
        <h1 className="text-4xl font-bold">Shopping List</h1>
        <h2 className="text-2xl font-semibold">Categories by</h2>
        <div>
        <ItemList />
        </div>
      </main>
    );
  }